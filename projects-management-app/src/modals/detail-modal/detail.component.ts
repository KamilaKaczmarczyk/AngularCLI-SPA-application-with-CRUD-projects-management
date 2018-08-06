import { Component, OnInit } from "@angular/core";
import { ProjectsService } from "../../app/projects.service";
import {
  NgbActiveModal,
  ModalDismissReasons,
  NgbModal
} from "@ng-bootstrap/ng-bootstrap";
import { Project } from "../../models/project";
import { EditModalComponent } from "../edit-modal/edit-modal.component";
import { EditProjectLifeCycleComponent } from "../edit-projrctLifeCycle-modal/edit-projectLifeCycle.component";

@Component({
  selector: "detail-modal",
  templateUrl: "detail.component.html",
  styleUrls: ["detail.component.scss"]
})
export class DetailModalComponent implements OnInit {
  closeResult: string;
  item: Project;
  projects: Project[];

  getProject() {
    this.projectsService.getProjects();
  }
  deleteProject(item) {
    const chooseProject = item.id;
    this.projectsService.deleteProject(chooseProject);
  }
  deleteStage(item, stage) {
    const chooseProjectId = item.id;
    const chooseStageId = stage.id;
    this.projectsService.deleteStage(chooseStageId, chooseProjectId);
  }

  constructor(
    public activeModal: NgbActiveModal,
    private projectsService: ProjectsService,
    private modalService: NgbModal
  ) {}

  openEdit(item) {
    const modal = this.modalService.open(EditModalComponent, {
      ariaLabelledBy: "modal-basic-title",
      centered: true
    });
    (<EditModalComponent>modal.componentInstance).item = item;

    modal.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  openEditStage(item,stage) {
    const modal = this.modalService.open(EditProjectLifeCycleComponent, {
      ariaLabelledBy: "modal-basic-title",
      centered: true
    });
    (<EditProjectLifeCycleComponent>modal.componentInstance).item = item;
    (<EditProjectLifeCycleComponent>modal.componentInstance).stage = stage;

    modal.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit() {}
}
