import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContentComponent } from "./content.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AddModalsComponent } from "../../modals/add-modal/add_modal.component";
import { EditModalComponent } from "src/modals/edit-modal/edit-modal.component";
import { DetailModalComponent } from "../../modals/detail-modal/detail.component";

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [
    ContentComponent,
    AddModalsComponent,
    EditModalComponent,
    DetailModalComponent
  ],
  bootstrap: [],
  exports: [ContentComponent],
  providers: [NgbActiveModal],
  entryComponents: [
    AddModalsComponent,
    EditModalComponent,
    DetailModalComponent
  ]
})
export class ContentModule {}
