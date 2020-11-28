import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service/lib/cookie.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/homepage', title: 'Homepage',  icon:'person', class: '' },
    { path: '/dashboard', title: 'Personal Information',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Visa Status Management',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Housing',  icon:'library_books', class: '' },
    { path: '/hr-visa', title: 'visa',  icon:'library_books', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
