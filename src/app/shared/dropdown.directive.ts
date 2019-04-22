import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') toggleOpen() {
    if (this.isOpen) {
      this.renderer.removeClass((this.elRef.nativeElement as HTMLElement).nextSibling, 'show');
    } else {
      this.renderer.addClass((this.elRef.nativeElement as HTMLElement).nextSibling, 'show');
    }
    this.isOpen = !this.isOpen;
  }
}
