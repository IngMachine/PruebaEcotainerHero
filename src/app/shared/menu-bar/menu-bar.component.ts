import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[] = [];
  isList: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'Home',
          icon:'pi pi-fw pi-home',
          routerLink: '/heroes/list'
      },
      {
          label:'List Of Heroes',
          icon:'pi pi-fw pi-list',
          routerLink: '/heroes/list'
      }
    ];
  }

}
