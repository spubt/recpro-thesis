import { Component } from '@angular/core';
import {SidebarService} from '../../shared/sidebar/sidebar.service';
import {NgClass} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../../shared/header/header.component';
import {SidebarComponent} from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-full-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    RouterOutlet,
    NgClass
  ],
  templateUrl: './full-layout.component.html',
  styleUrl: './full-layout.component.scss'
})
export class FullLayoutComponent {

  constructor( public sidebarService: SidebarService ) {

  }

  toggleSidebar() {
    this.sidebarService.setSidebarState(!this.sidebarService.getSidebarState());
  }

  getSideBarState() {
    return this.sidebarService.getSidebarState();
  }
}
