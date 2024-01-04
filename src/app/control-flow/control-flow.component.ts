
import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'app-control-flow',
    templateUrl: './control-flow.component.html',
    imports: []
})

export class ControlFlowComponent {
    
    bestClub: boolean = true;
    clubName: 'real' | 'barca' | 'milan' = 'real';
    // Example in the component class
    clubs: any[] = [];

    myTrack(index: number): number {
        return index;
    }
    addClabs(): void {
        this.clubs = ['real', 'barca', 'milan'];
    }


}