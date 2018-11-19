import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  showDrop = false;

  constructor(private rend: Renderer2, private ele: ElementRef) {
  }

  @HostListener('click') onClick() {
    this.showDrop = !this.showDrop;
    if (this.showDrop) {
      this.rend.addClass(this.rend.nextSibling(this.ele.nativeElement), 'show');
    } else {
      this.rend.removeClass(this.rend.nextSibling(this.ele.nativeElement), 'show');
    }
  }
}
