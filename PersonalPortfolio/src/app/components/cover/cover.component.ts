import { Component } from '@angular/core';
import { fader } from 'src/app/route-animations';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css'],
  animations: [fader],
})
export class CoverComponent {

}
