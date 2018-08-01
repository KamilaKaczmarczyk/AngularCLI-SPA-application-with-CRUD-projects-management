import { Component } from "@angular/core";
import { ProjectsService } from "../../app/projects.service";
import { Project } from "../../models/interface";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { AddModalsComponent } from "../../modals/add-modal/add_modal.component";
import { EditModalComponent } from "../../modals/edit-modal/edit-modal.component";
import { DetailModalComponent } from "../../modals/detail-modal/detail.component";
import { PROJECTS } from "../../models/mock-projects";

@Component({
  selector: "content",
  templateUrl: "content.component.html",
  styleUrls: ["content.component.scss"]
})
export class ContentComponent {
  closeResult: string;

  projects: Project[];

  getProjects(): void {
    this.projects = this.projectsService.getProjects();
  }

  public get hasProject(): boolean {
    return this.projects.length !== 0;
  }

  constructor(
    private projectsService: ProjectsService,
    private modalService: NgbModal
  ) {
    this.getProjects();
  }

  open() {
    this.modalService
      .open(AddModalsComponent, {
        ariaLabelledBy: "modal-basic-title",
        centered: true
      })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
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
  openDetail(item){
    const modal = this.modalService.open(DetailModalComponent, {
      ariaLabelledBy: "modal-basic-title",
      centered: true
    });
    (<DetailModalComponent>modal.componentInstance).item = item;

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
}
