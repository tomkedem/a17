import { Component } from "@angular/core";
import { FooComponent } from "./foo";

@Component({
    standalone: true,
    selector: 'app-defferable-view',
    template:`
        <h1>Defferable View</h1>        
        @defer (on timer(2s)){
            <foo/>
        }
        <button (click)="iSaySo = true">Load</button>
    `,
    imports: [FooComponent]
})

export class DefferableViewComponent {
    iSaySo:boolean = false;      
}


