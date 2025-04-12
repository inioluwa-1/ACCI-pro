import { AfterViewChecked, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LoaderComponent } from './component/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink, NavbarComponent, FooterComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewChecked {
  title = 'ACCI-project';

  isLoading = true;
  private hasChecked = false;

  ngAfterViewChecked() {
    if (!this.hasChecked) {
      this.hasChecked = true;

      // Allow DOM to settle
      setTimeout(() => {
        const images = Array.from(document.images);
        let loadedImages = 0;

        if (images.length === 0) {
          this.isLoading = false;
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
      });
    }
  }
}
