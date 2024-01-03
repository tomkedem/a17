import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-control-flow',
    templateUrl: './control-flow.component.html',
    imports: [
        NgIf,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgFor
    ]
})

export class ControlFlowComponent {
    
    bestClub: boolean = true;
    clubName: 'real' | 'barca' | 'milan' = 'real';
    // Example in the component class
    clubs: never[] = [];

    myTrack(index: number): number {
        return index;
    }
    addClabs(): void {
        this.clubs = ['real', 'barca', 'milan'];
    }


}