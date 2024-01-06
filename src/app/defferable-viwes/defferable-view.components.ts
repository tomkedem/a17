import { Component } from "@angular/core";
import { FooComponent } from "./foo";

@Component({
    standalone: true,
    selector: 'app-defferable-view',
    template:`
        <h1>Defferable View</h1>  
        <div class="blue"></div>   
        @defer (on viewport){
            <foo/>
        } @loading (after 1s; minimum 2s)
        {
            <h1>loading...</h1>
        } @error {
            <h1>Error</h1>
        } @placeholder {
            <h1>Foo component</h1>
        }
      
        <button (click)="iSaySo = true">Load</button>
    `,
    styles:`
    .blue {
        background: blue;
        height: 100vh;
        width: 200px;        
    }
    `,
    imports: [FooComponent]
})

export class DefferableViewComponent {
    iSaySo:boolean = false;      
}


