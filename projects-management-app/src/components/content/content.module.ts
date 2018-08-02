import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContentComponent } from "./content.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AddModalsComponent } from "../../modals/add-modal/add_modal.component";
import { EditModalComponent } from "../../modals/edit-modal/edit-modal.component";
import { DetailModalComponent } from "../../modals/detail-modal/detail.component";
import { AddNewProjectLifeCycleComponent } from "../../modals/add-projectLifeCycle-modal/add-projectLifeCycle.component";


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [
    ContentComponent,
    AddModalsComponent,
    EditModalComponent,
    DetailModalComponent,
    AddNewProjectLifeCycleComponent
  ],
  bootstrap: [],
  exports: [ContentComponent],
  providers: [NgbActiveModal],
  entryComponents: [
    AddModalsComponent,
    EditModalComponent,
    DetailModalComponent,
    AddNewProjectLifeCycleComponent
  ]
})
export class ContentModule {}
