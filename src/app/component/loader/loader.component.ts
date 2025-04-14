import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  @Input() show = true;
  fadeOut = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['show'] && changes['show'].currentValue === false) {
      // Trigger fade-out when loader is set to hide
      this.fadeOut = true;

      // Optionally remove from DOM after fade
      setTimeout(() => {
        this.show = false;
      }, 800); // Match the transition time in CSS
    }
  }
}
