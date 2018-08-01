import { Component, OnInit} from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Project } from 'src/models/interface';

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

    constructor(
        public activeModal: NgbActiveModal,
        private projectsService: ProjectsService
    ) { }

getProject(){
    this.projectsService.getProjects();
}
setChanges(){
    const editedProject : Project={
        id: this.item.id,
        name: this.inputName.value,
        description: this.textareaDescription.value,
        date: Date.now(),
        startTime: this.inputStartProject.value,
        endTime: this.inputEndProject.value
      };
      this.projectsService.updateProject(editedProject);
}
ngOnInit(){
    this.inputName = <HTMLInputElement>document.getElementById('inputName');
    this.inputStartProject = <HTMLInputElement>document.getElementById('dateStart');
    this.inputEndProject = <HTMLInputElement>document.getElementById('dateEnd');
    this.textareaDescription = <HTMLInputElement>document.getElementById('exampleFormControlTextarea1');
  }

}