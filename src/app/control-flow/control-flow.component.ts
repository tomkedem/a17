import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-control-flow',
    templateUrl: './control-flow.component.html',
    imports: [
        NgIf,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault
    ]
})

export class ControlFlowComponent {
    bestClub: boolean = true;
    clubName: 'real' | 'barca' | 'milan' = 'real';
}