import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectsService } from "src/app/projects.service";
import { Project } from "src/models/interface";

@Component({
  selector: "add_modal",
  templateUrl: "add_modal.component.html",
  styleUrls: ["add_modal.component.scss"]
})
export class AddModalsComponent implements OnInit {
  inputName;
  inputStartProject;
  inputEndProject;
  textareaDescription;

  constructor(
    public activeModal: NgbActiveModal,
    private projectsService: ProjectsService
  ) {}

  setProject() {
     const newProject : Project={
        id: null,
        name: this.inputName.value,
        description: this.textareaDescription.value,
        date: Date.now(),
        startTime: this.inputStartProject.value,
        endTime: this.inputEndProject.value
      };
      this.projectsService.addProject(newProject);
    
  }

  ngOnInit(){
    this.inputName = <HTMLInputElement>document.getElementById('inputName');
    this.inputStartProject = <HTMLInputElement>document.getElementById('dateStart');
    this.inputEndProject = <HTMLInputElement>document.getElementById('dateEnd');
    this.textareaDescription = <HTMLInputElement>document.getElementById('exampleFormControlTextarea1');
  }
}
