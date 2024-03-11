import { Component } from '@angular/core';
import { MainComponent } from "./layouts/main/main.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <app-main></app-main>
  `,
    styles: [],
    imports: [MainComponent]
})
export class AppComponent {}
