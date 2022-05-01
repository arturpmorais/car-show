import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective {
  @HostBinding('width') width = 200;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e: Event) {
    this.width = 300;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e: Event) {
    this.width = 200;
  }

  constructor() { }

}