import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu"; // Add this line


@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss'
})
export class MenuBarComponent {

}
