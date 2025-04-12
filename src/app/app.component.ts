import { AfterViewChecked, Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoaderComponent } from './component/loader/loader.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink, NavbarComponent, FooterComponent, LoaderComponent, NavigationEnd, Router],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ACCI-project';

  isLoading = true;
  constructor(private router: Router) {}

  ngOnInit() {
    // Wait for every navigation to finish
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.waitForImagesToLoad();
      });
  }

  waitForImagesToLoad() {
    const images = Array.from(document.images);
    let loadedImages = 0;

    if (images.length === 0) {
      this.isLoading = false;
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loadedImages++;
        if (loadedImages === images.length) {
          this.isLoading = false;
        }
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === images.length) {
            this.isLoading = false;
          }
        });

        img.addEventListener('error', () => {
          loadedImages++;
          if (loadedImages === images.length) {
            this.isLoading = false;
          }
        });
      }
    });
  }
}
