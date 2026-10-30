import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found', imports: [RouterLink],
  template: `<section class="not-found"><p class="code">404 / PAGE NOT FOUND</p><h1>Page not found</h1><p>We couldn’t find the page you were looking for.</p><a routerLink="/">Return home <span aria-hidden="true">→</span></a></section>`,
  styles: [`.not-found { padding-block: clamp(5rem, 12vw, 9rem); } .code { color: var(--color-primary-hover); font-family: var(--font-mono); font-size: var(--text-xs); font-weight: 600; letter-spacing: .08em; } h1 { margin-block: var(--space-4); } a { display: inline-block; margin-top: var(--space-6); color: var(--color-primary-hover); font-weight: 600; }`],
})
export class NotFound {}
