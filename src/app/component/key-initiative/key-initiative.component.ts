import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-key-initiative',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './key-initiative.component.html',
  styleUrl: './key-initiative.component.css'
})
export class KeyInitiativeComponent {

  ngOnInit () {
    window.scrollTo(0, 0);
  }
}
