import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-upcoming-event',
  imports: [RouterLink],
  templateUrl: './upcoming-event.component.html',
  styleUrl: './upcoming-event.component.css'
})
export class UpcomingEventComponent {

  ngOnInit () {
    window.scrollTo(0, 0);
  }
}
