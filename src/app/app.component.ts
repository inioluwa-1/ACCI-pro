import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoaderComponent } from './component/loader/loader.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, NavbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'ACCI-project';
  @ViewChild(LoaderComponent) loader!: LoaderComponent;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loader?.show();
      } else if (event instanceof NavigationEnd) {
        this.loader?.hide();
      }
    });
  }
}
