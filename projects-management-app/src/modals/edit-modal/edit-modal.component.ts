import { Component, OnInit} from '@angular/core';
import { ProjectsService } from '../../app/projects.service';
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Project } from '../../models/project';

@Component({
    selector: 'edit-modal',
    templateUrl: 'edit-modal.component.html',
    styleUrls:['edit-modal.component.scss']
})
export class EditModalComponent implements OnInit{
    inputName;
    inputStartProject;
    inputEndProject;
    textareaDescription;
    projects: Project[];
    item :Project;
    dangerMessage: string;

    constructor(
        public activeModal: NgbActiveModal,
        private projectsService: ProjectsService
    ) { }

getProject(){
    this.projectsService.getProjects();
}
seveChanges() {
    if (this.isAddModalFormValid()) {
      return this.setChanges();
    } else {
      this.setDangerMessage();
    }
  }

  private isAddModalFormValid() {
    return (
      this.inputName.value !== "" &&
      this.textareaDescription.value !== "" &&
      this.inputStartProject.value !== "" &&
      this.inputEndProject.value !== ""
    );
  }

  public setDangerMessage() {
    this.dangerMessage = "Warning! Any fields can be empty!";
    setTimeout(() => this.clearDangerMessage(), 3000);
  }
  private clearDangerMessage() {
    this.dangerMessage = null;
  }
setChanges(){
    const editedProject : Project={
        id: this.item.id,
        name: this.inputName.value,
        description: this.textareaDescription.value,
        updateDate: Date.now(),
        startTime: this.inputStartProject.value,
        endTime: this.inputEndProject.value,
        date :this.item.date,
        projectLifeCycle: this.item.projectLifeCycle
      };
      this.projectsService.updateProject(editedProject);
      this.activeModal.close();
}
ngOnInit(){
    this.inputName = <HTMLInputElement>document.getElementById('inputName');
    this.inputStartProject = <HTMLInputElement>document.getElementById('dateStart');
    this.inputEndProject = <HTMLInputElement>document.getElementById('dateEnd');
    this.textareaDescription = <HTMLInputElement>document.getElementById('exampleFormControlTextarea1');
  }

}