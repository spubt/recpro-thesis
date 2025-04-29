import { Component } from '@angular/core';
import {SidebarService} from './sidebar.service';
import {NavigationEnd, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgOptimizedImage} from '@angular/common';
import {MatModule} from '../../util/mat/mat.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    MatModule,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  activeLink = '';

  constructor(public sidebarservice: SidebarService, private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeLink = event.urlAfterRedirects;
      }
    });
  }

  getSideBarSate(): boolean {
    return this.sidebarservice.getSidebarState();
  }

  isPanelActive(startsWith: string): boolean {
    return this.activeLink.startsWith(startsWith);
  }
}
