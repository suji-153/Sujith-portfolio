import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { PageContainer } from './shared/components/page-container/page-container';
@Component({ selector: 'app-root', imports: [RouterOutlet, Header, Footer, PageContainer], templateUrl: './app.html', styleUrl: './app.css' })
export class App {
  constructor() {
    inject(ViewportScroller).setOffset([0, 80]);
  }
}
