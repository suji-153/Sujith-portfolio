import { Component } from '@angular/core';
@Component({ selector: 'app-technology-badge', template: `<span class="badge"><ng-content /></span>`, styles: [`.badge { display: inline-flex; align-items: center; padding: .35rem .7rem; border: 1px solid var(--color-border); border-radius: var(--radius-pill); background: var(--color-section); color: var(--color-heading); font: 500 var(--text-xs)/1.4 var(--font-mono); }`] })
export class TechnologyBadge {}
