import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PageContainer } from '../../shared/components/page-container/page-container';
@Component({selector:'app-header',imports:[RouterLink,RouterLinkActive,PageContainer],templateUrl:'./header.html',styleUrl:'./header.css'})
export class Header {
 readonly open=signal(false);
 readonly links=[{label:'About',id:'about'},{label:'Skills',id:'skills'},{label:'Experience',id:'experience'},{label:'Projects',id:'projects'},{label:'Education',id:'education'}];
 close():void{this.open.set(false)}
 @HostListener('document:keydown.escape') onEscape():void{if(this.open()){this.close();document.getElementById('menu-toggle')?.focus()}}
}
