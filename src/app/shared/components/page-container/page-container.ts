import { Component } from '@angular/core';
@Component({ selector: 'app-page-container', template: `<div class="container"><ng-content /></div>`, styles: [`.container { width: min(100% - 2 * var(--container-gutter), var(--container-width)); margin-inline: auto; }`] })
export class PageContainer {}
