import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectsService } from "../../app/projects.service";
import { Project } from "../../models/project";


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
  dangerMessage: string;

  constructor(
    public activeModal: NgbActiveModal,
    private projectsService: ProjectsService
  ) {}

  setProject() {
    const newProject: Project = {
      id: null,
      name: this.inputName.value,
      description: this.textareaDescription.value,
      date: Date.now(),
      startTime: this.inputStartProject.value,
      endTime: this.inputEndProject.value,
      projectLifeCycle: []
    };
    this.projectsService.addProject(newProject);
    this.activeModal.close();
  }

  seveProject() {
    if (this.isAddModalFormValid()) {
      return this.setProject();
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

  ngOnInit() {
    this.inputName = <HTMLInputElement>document.getElementById("inputName");
    this.inputStartProject = <HTMLInputElement>(
      document.getElementById("dateStart")
    );
    this.inputEndProject = <HTMLInputElement>document.getElementById("dateEnd");
    this.textareaDescription = <HTMLInputElement>(
      document.getElementById("exampleFormControlTextarea1")
    );
  }
}
