import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MainWindow} from "./main.window";
import {Layout} from "./layout";
import {routes} from "./router.config";
@NgModule({
    imports:      [ RouterModule.forRoot(routes) ,BrowserModule ],
    declarations: [ Layout, MainWindow ],
    bootstrap:    [ Layout ]
})
export class MainWindowModule { }