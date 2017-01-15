import {Component} from '@angular/core';
import {ElegularWindowRef} from 'elegular/client';
@Component({
    template: `<div style="background-image: url(note.png); width: 100px; height: 100px; background-size: 100px">
         </div>`
})
export class MainWindow {
    constructor(private _elegularWindowRef: ElegularWindowRef) {
    }

    onClick() {
        this._elegularWindowRef.blur();
    }
}