import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ContentComponent } from "./content.component";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AddModalsComponent } from "../../modals/add-modal/add_modal.component";
import { EditModalComponent } from "../../modals/edit-modal/edit-modal.component";
import { DetailModalComponent } from "../../modals/detail-modal/detail.component";
import { AddNewProjectLifeCycleComponent } from "../../modals/add-projectLifeCycle-modal/add-projectLifeCycle.component";
import { EditProjectLifeCycleComponent } from "../../modals/edit-projrctLifeCycle-modal/edit-projectLifeCycle.component";


@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [
    ContentComponent,
    AddModalsComponent,
    EditModalComponent,
    DetailModalComponent,
    AddNewProjectLifeCycleComponent,
    EditProjectLifeCycleComponent
  ],
  bootstrap: [],
  exports: [ContentComponent],
  providers: [NgbActiveModal],
  entryComponents: [
    AddModalsComponent,
    EditModalComponent,
    DetailModalComponent,
    AddNewProjectLifeCycleComponent,
    EditProjectLifeCycleComponent
  ]
})
export class ContentModule {}
