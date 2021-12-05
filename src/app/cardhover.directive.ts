import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCardhover]'
})
export class CardhoverDirective {

  constructor(private el: ElementRef) { }
  @HostListener('mouseover') onOver() {
  this.el.nativeElement.style.backgroundColor = 'rgb(248, 211, 0)';
}
@HostListener('mouseout') onOut() {
  this.el.nativeElement.style.backgroundColor = '#fff';
}

}
