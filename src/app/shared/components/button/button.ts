import { Directive, input } from '@angular/core';

@Directive({
  selector: 'button[appButton]',
  host: { '[class.ui-button]': 'true', '[class.ui-button--secondary]': 'variant() === "secondary"' },
})
export class Button { readonly variant = input<'primary' | 'secondary'>('primary'); }
