import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './layout/header/header';
import { Home } from './features/home/home';
import { Reveal } from './shared/directives/reveal';
import { Component } from '@angular/core';
import { vi } from 'vitest';

@Component({ imports: [Reveal], template: '<section appReveal>Visible content</section>' })
class RevealHost {}

describe('Portfolio content and interactions', () => {
  beforeEach(() => TestBed.configureTestingModule({ providers: [provideRouter([])] }));

  it('renders confirmed identity, contact links, and planned projects', () => {
    const fixture = TestBed.createComponent(Home);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Sujithkumar S');
    expect(el.querySelector('h1')?.textContent).toContain('Junior Software Developer');
    expect(el.querySelectorAll('.project-card')).toHaveLength(3);
    expect(
      Array.from(el.querySelectorAll('.planned')).every(
        (item) => item.textContent?.trim() === 'Planned',
      ),
    ).toBe(true);
    expect(el.querySelector('a[href="https://github.com/suji-153"]')).toBeTruthy();
    expect(el.querySelector('a[href="https://www.linkedin.com/in/suji153/"]')).toBeTruthy();
    expect(el.textContent).not.toContain('awaiting verification');
    expect(el.querySelector('a[href="#projects"]')).toBeTruthy();
    expect(el.querySelector('a[href="#contact"]')).toBeTruthy();
  });

  it('exposes menu state and closes after navigation and Escape', () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const button = el.querySelector('button')!;
    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    expect(el.querySelector('nav')?.classList.contains('open')).toBe(true);
    (el.querySelector('nav a') as HTMLAnchorElement).click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    fixture.detectChanges();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('keeps content visible when reduced motion is requested', () => {
    vi.stubGlobal('IntersectionObserver', class {});
    vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: true }));
    const fixture = TestBed.createComponent(RevealHost);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('section').classList.contains('reveal-ready')).toBe(
      false,
    );
    vi.unstubAllGlobals();
  });
});
