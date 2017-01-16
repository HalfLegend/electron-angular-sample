import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MainWindow} from "./main.window";
@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ MainWindow ],
    bootstrap:    [ MainWindow ]
})
export class MainWindowModule { }