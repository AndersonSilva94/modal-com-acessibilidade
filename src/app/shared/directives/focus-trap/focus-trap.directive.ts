import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit {

  private firstFocusableElement: HTMLElement = null;
  private lastFocusableElement: HTMLElement = null;

  constructor(
    private elementRef: ElementRef<any>
  ) { }

  ngAfterViewInit(): void {
    const focusableElement = this.elementRef
      .nativeElement
      .querySelectorAll(`
        [tabindex]:not([tabindex="-1"]),
        a[href]:not([disabled]),
        button:not([disabled]),
        textarea:not([disabled]),
        input:not([disabled]),
        select:not([disabled])`
      )

    this.firstFocusableElement = focusableElement[0];
    this.lastFocusableElement = focusableElement[focusableElement - 1]
    this.firstFocusableElement.focus();
  }

}
