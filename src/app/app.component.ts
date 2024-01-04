import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ControlFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'a17';
}
