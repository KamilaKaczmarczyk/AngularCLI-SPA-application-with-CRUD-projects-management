import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContentComponent } from './content.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddModalsComponent } from '../../modals/add-modal/add_modal.component';



@NgModule({
    imports: [ 
        BrowserModule,
        NgbModule],
    declarations: [ ContentComponent, AddModalsComponent],
    bootstrap:    [],
    exports:[ContentComponent],
    providers:[NgbActiveModal],
    entryComponents: [
        AddModalsComponent
      ]
})
export class ContentModule { }