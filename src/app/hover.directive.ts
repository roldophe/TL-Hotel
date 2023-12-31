import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = 'red';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {
    console.log('element:', this.element.nativeElement);
  }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.appHover,
    );
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green',
    );
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white',
    );
  }
}