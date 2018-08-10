import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "../../app/projects.service";
import { NgbActiveModal } from "../../../node_modules/@ng-bootstrap/ng-bootstrap";
import { LifeCycle } from "../../models/lifeCycleEnum";
import { ProjectLifeCycle } from "../../models/projectLifeCycle";
import { Project } from "../../models/project";

@Component({
  selector: "edit-projectLifeCycle",
  templateUrl: "edit-projectLifeCycle.component.html",
  styleUrls: ["edit-projectLifeCycle.component.scss"]
})
export class EditProjectLifeCycleComponent implements OnInit {
  item: Project;
  stage: ProjectLifeCycle;
  lifeCycleType = LifeCycle;
  stageInput;
  inputStartLifeCycle;
  inputEndLifeCycle;
  textareaComment;
  inputName;
  dangerMessage: string;

  getLifeCycle(): Array<string> {
    const lifeCycle = Object.keys(this.lifeCycleType);
    return lifeCycle;
  }
  setInputValue(stage) {
    this.stageInput.value = stage;
  }

  seveProjectLifeCycleChange() {
    if (this.isAddModalFormValid()) {
      return this.setProjectLifeCycleChange();
    } else {
      this.setDangerMessage();
    }
  }

  private isAddModalFormValid() {
    return (
      this.inputName.value !== "" &&
      this.textareaComment.value !== "" &&
      this.inputStartLifeCycle.value !== "" &&
      this.inputEndLifeCycle.value !== "" &&
      this.stageInput.value !== ""
    );
  }

  setProjectLifeCycleChange() {
    const changedProjectLifeCycle: ProjectLifeCycle = {
      id: this.stage.id,
      name: this.inputName.value,
      lifeCycle: this.stageInput.value,
      start: this.inputStartLifeCycle.value,
      end: this.inputEndLifeCycle.value,
      comment: this.textareaComment.value
    };
    const projectid = this.item.id;
    this.projectsService.editProjectLifeCycle(
      changedProjectLifeCycle,
      projectid
    );
    this.activeModal.close();
  }
  public setDangerMessage() {
    this.dangerMessage = "Warning! Any fields can be empty!";
    setTimeout(() => this.clearDangerMessage(), 3000);
  }
  private clearDangerMessage() {
    this.dangerMessage = null;
  }
  constructor(
    public activeModal: NgbActiveModal,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    this.stageInput = <HTMLInputElement>document.getElementById("stage");
    this.inputStartLifeCycle = <HTMLInputElement>(
      document.getElementById("dateStart")
    );
    this.inputEndLifeCycle = <HTMLInputElement>(
      document.getElementById("dateEnd")
    );
    this.textareaComment = <HTMLInputElement>(
      document.getElementById("exampleFormControlTextarea1")
    );
    this.inputName = <HTMLInputElement>document.getElementById("inputName");
  }
}
