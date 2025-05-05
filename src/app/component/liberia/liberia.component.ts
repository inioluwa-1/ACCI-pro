import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-liberia',
  imports: [RouterLink],
  templateUrl: './liberia.component.html',
  styleUrl: './liberia.component.css'
})
export class LiberiaComponent {
  ngOnInit () {
    window.scrollTo(0, 0);
  }
}
