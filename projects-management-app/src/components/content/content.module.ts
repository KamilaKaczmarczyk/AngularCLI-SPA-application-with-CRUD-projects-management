import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './content.component';
import { NgbModule } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [ BrowserModule,
        NgbModule  ],
    declarations: [ ContentComponent ],
    bootstrap:    [],
    exports:[ContentComponent]
})
export class ContentModule { }