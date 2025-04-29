import {Component, OnInit} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {MatModule} from '../../util/mat/mat.module';

import {AuthService} from '../../auth/auth.service';
import {SidebarService} from '../sidebar/sidebar.service';
import {User} from '@recprocess/recpro-frontend-lib';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MatModule,
    NgClass,
    NgIf,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  user: User = new User();
  initials: string = '';

  constructor(
    public sidebarService: SidebarService,
    private authService: AuthService
  ) {
    console.log(this.user);
  }

  theme_name = 'dark_mode'

  toggleSearch: boolean = false;

  darkMode() {

    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      if (this.theme_name == 'light_mode') {
        htmlElement.classList.replace('dark_mode', 'light_mode');
        this.theme_name = 'dark_mode';
      } else if (this.theme_name == 'dark_mode') {
        htmlElement.classList.replace('light_mode', 'dark_mode');
        this.theme_name = 'light_mode';
      }
    }
    return this.theme_name;
  }

  getSideBarSate() {
    return this.sidebarService.getSidebarState();
  }


  toggleSidebar() {
    this.sidebarService.setSidebarState(!this.sidebarService.getSidebarState());
  }

  openSearch() {
    this.toggleSearch = true;
  }

  searchClose() {
    this.toggleSearch = false;
  }

  ngOnInit() {
    this.authService.getCurrentUserObservable().subscribe(res => {
      this.user = res;
      this.initials = this.getInitials(this.user.firstName + ' ' + this.user.lastName);
    });
  }

  getInitials(name: string): string {

    if (!name) return '';
    const names = name.split(' ');
    const initials = names.map(n => n.charAt(0).toUpperCase()).join('');
    return initials.substring(0, 2);  // Nimmt die ersten zwei Initialen
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.authService.login();
  }
}
