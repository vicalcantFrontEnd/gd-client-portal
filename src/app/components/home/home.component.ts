import { Component } from '@angular/core';
import { MenuBarComponent } from '../../share/components/menu-bar/menu-bar.component';
import {MatButtonModule} from '@angular/material/button'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuBarComponent,
    MatButtonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
