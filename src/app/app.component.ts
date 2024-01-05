import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DefferableViewComponent } from './defferable-viwes/defferable-view.components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlFlowComponent,DefferableViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a17';
}
