import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();
  constructor(private dataService: DataStorageService) { }

  fetchData() {
    this.dataService.getRecipes();
  }

  ngOnInit() {
  }

  /* onSelect(feature: string){
    this.featureSelected.emit(feature);
  } */

  saveData() {
    this.dataService.storeRecipes()
    .subscribe(
      response => console.log(response),
      err => console.log(err));
  }
}
