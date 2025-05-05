import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-sierra-leone',
  imports: [RouterLink],
  templateUrl: './sierra-leone.component.html',
  styleUrl: './sierra-leone.component.css'
})
export class SierraLeoneComponent {
  ngOnInit () {
    window.scrollTo(0, 0);
  }
}
