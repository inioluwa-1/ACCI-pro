import { Component } from '@angular/core';

@Component({
  selector: 'app-ongoing-programmes',
  imports: [],
  templateUrl: './ongoing-programmes.component.html',
  styleUrl: './ongoing-programmes.component.css'
})
export class OngoingProgrammesComponent {

  ngOnInit () {
    window.scrollTo(0, 0);
}

}
