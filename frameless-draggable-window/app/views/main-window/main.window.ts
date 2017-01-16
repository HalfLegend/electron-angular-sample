import {Component} from '@angular/core';
import {ElegularWindowRef} from 'elegular/client';
import Point = Electron.Point;
@Component({
    templateUrl: __dirname + "/main.window.html"
})
export class MainWindow {
    private isDragging : boolean;
    private initialMouseOffset: Point;
    constructor(private _elegularWindowRef: ElegularWindowRef) {
    }

    onMouseDown(mouseEvent: MouseEvent){
        this.isDragging = true;
        let windowPosition = this._elegularWindowRef.getPosition();

        this.initialMouseOffset = {x: mouseEvent.screenX - windowPosition.x, y: mouseEvent.screenY - windowPosition.y};
    }

    onMouseMove(mouseEvent: MouseEvent){
        if (this.isDragging){
            //let initialScreenPostion = this._elegularWindowRef.getPosition();
            this._elegularWindowRef.setPosition(mouseEvent.screenX - this.initialMouseOffset.x, mouseEvent.screenY - this.initialMouseOffset.y, false);
        }
    }

    onMouseUp(){
        this.isDragging = false;
        this.initialMouseOffset = null;
    }
}