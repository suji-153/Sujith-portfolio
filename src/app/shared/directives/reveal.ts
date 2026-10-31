import { AfterViewInit, Directive, ElementRef, OnDestroy, inject } from '@angular/core';
@Directive({ selector: '[appReveal]' })
export class Reveal implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;
  ngAfterViewInit(): void {
    if (
      typeof window === 'undefined' ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return;
    const el = this.element.nativeElement;
    try {
      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            el.classList.add('revealed');
            this.observer?.disconnect();
          }
        },
        { threshold: 0.08 },
      );
      el.classList.add('reveal-ready');
      this.observer.observe(el);
    } catch {
      el.classList.remove('reveal-ready');
      this.observer?.disconnect();
    }
  }
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
