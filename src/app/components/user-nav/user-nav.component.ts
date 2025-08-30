import { Component , OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [ MenubarModule, AvatarModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss'
})
export class UserNavComponent implements OnInit {

    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                routerLink: '/user/home'
            },
            {
                label: 'Duaa',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Add Relation',
                        icon: 'pi pi-plus-circle',
                        routerLink: '/user/duaa/addRelation'
                    },
                    {
                        label: 'Remove Relation',
                        icon: 'pi pi-minus-circle',
                        routerLink: '/user/duaa/removeRelation'
                    }
                ]
            },
            {
                label: 'Dhikr',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Add Relation',
                        icon: 'pi pi-plus-circle',
                        routerLink: '/user/dhikr/addRelation'
                    },
                    {
                        label: 'Remove Relation',
                        icon: 'pi pi-minus-circle',
                        routerLink: '/user/dhikr/removeRelation'
                    }
                ]
            }
        ];
    }

}
