import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [ BrowserModule,
    NgbModule ],
    declarations: [ NavbarComponent ],
    bootstrap:    [],
    exports:[NavbarComponent]
})
export class NavbarModule { }