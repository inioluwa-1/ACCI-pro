import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
  isVisible = true;

  constructor() {}

  ngOnInit(): void {}

  show() {
    this.isVisible = true;
  }

  hide() {
    setTimeout(() => {
      this.isVisible = false;
    }, 1000); // Match your CSS transition duration
  }
}
