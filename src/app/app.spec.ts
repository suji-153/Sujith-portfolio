import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
describe('App', () => {
  beforeEach(async () => { await TestBed.configureTestingModule({ imports: [App], providers: [provideRouter(routes)] }).compileComponents(); });
  it('renders the application shell', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('header')).toBeTruthy();
    expect(element.querySelector('main')).toBeTruthy();
    expect(element.querySelector('footer')).toBeTruthy();
  });
  it('renders the home and not-found routes', async () => {
    const fixture = TestBed.createComponent(App);
    const router = TestBed.inject(Router);
    await router.navigateByUrl('/');
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain('digital experiences');
    await router.navigateByUrl('/missing-page');
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).querySelector('h1')?.textContent).toContain('Page not found');
  });
});
