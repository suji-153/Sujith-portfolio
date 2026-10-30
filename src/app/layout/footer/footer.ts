import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageContainer } from '../../shared/components/page-container/page-container';
import { SOCIAL_LINKS } from '../../data/social.data';
@Component({selector:'app-footer',imports:[PageContainer,RouterLink],templateUrl:'./footer.html',styleUrl:'./footer.css'})
export class Footer { readonly year=new Date().getFullYear(); readonly social=SOCIAL_LINKS; }
