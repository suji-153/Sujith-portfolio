import { Component } from '@angular/core';
@Component({ selector: 'app-content-card', template: `<div class="card"><ng-content /></div>`, styles: [`.card { height: 100%; padding: clamp(1.25rem, 3vw, 2rem); border: 1px solid var(--color-border); border-radius: var(--radius-lg); background: var(--color-background); box-shadow: var(--shadow-sm); }`] })
export class ContentCard {}
