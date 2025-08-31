import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-auth-nav',
  standalone: true,
  imports: [MenubarModule, RouterLink, RouterLinkActive],
  templateUrl: './auth-nav.component.html',
  styleUrl: './auth-nav.component.scss'
})
export class AuthNavComponent {
 
}
