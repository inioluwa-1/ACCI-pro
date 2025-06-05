import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loading = true;
  private minDisplayTime = 400;
  private hideTimeout: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => 
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      )
    ).subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        if (this.hideTimeout) {
          clearTimeout(this.hideTimeout);
        }
      } else {
        this.hideTimeout = setTimeout(() => {
          this.loading = false;
        }, this.minDisplayTime);
      }
    });
  }
}
