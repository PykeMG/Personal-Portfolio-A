import { Component } from '@angular/core';
import { fader } from 'src/app/route-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [fader]
})
export class AboutComponent {

}
