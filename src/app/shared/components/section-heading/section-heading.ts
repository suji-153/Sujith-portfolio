import { Component, input } from '@angular/core';
@Component({
  selector: 'app-section-heading',
  template: `<div class="section-heading">@if (eyebrow()) { <p class="eyebrow">{{ eyebrow() }}</p> }<h2>{{ heading() }}</h2>@if (description()) { <p class="description">{{ description() }}</p> }</div>`,
  styles: [`.section-heading { max-width: 42rem; } .eyebrow { margin-bottom: var(--space-3); color: var(--color-primary-hover); font: 600 var(--text-xs)/1.5 var(--font-mono); letter-spacing: .08em; text-transform: uppercase; } .description { margin-top: var(--space-4); }`],
})
export class SectionHeading { readonly heading = input.required<string>(); readonly eyebrow = input(''); readonly description = input(''); }
