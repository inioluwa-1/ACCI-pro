import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-key-initiative',
  imports: [RouterLink],
  templateUrl: './key-initiative.component.html',
  styleUrl: './key-initiative.component.css'
})
export class KeyInitiativeComponent {

  ngOnInit () {
    window.scrollTo(0, 0);
  }
}
