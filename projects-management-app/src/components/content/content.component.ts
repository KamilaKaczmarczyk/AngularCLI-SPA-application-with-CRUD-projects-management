import { Component} from "@angular/core";
import { ProjectsService } from "../../app/projects.service";
import { Project } from "../../models/project";
import { LifeCycle } from "../../models/lifeCycleEnum";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { AddModalsComponent } from "../../modals/add-modal/add_modal.component";
import { EditModalComponent } from "../../modals/edit-modal/edit-modal.component";
import { DetailModalComponent } from "../../modals/detail-modal/detail.component";
import { AddNewProjectLifeCycleComponent } from "../../modals/add-projectLifeCycle-modal/add-projectLifeCycle.component";
import { EditProjectLifeCycleComponent } from "../../modals/edit-projrctLifeCycle-modal/edit-projectLifeCycle.component";
import "chart.js";


@Component({
  selector: "content",
  templateUrl: "content.component.html",
  styleUrls: ["content.component.scss"]
})
export class ContentComponent {
  closeResult: string;
  projects: Project[];
  lifeCycleType = LifeCycle;
  pieChartData: number[] = [];
  pieChartLabels: string[] = this.getLifeCycle();
  pieChartType: string = "pie";

  getLifeCycle(): Array<string> {
    const lifeCycle = Object.keys(this.lifeCycleType);
    const enumArray = lifeCycle;
    enumArray.push("Rest Time");
    return enumArray;
  }
  isAnyStageAvailable(item: Project) {
    if (item.projectLifeCycle.length !== 0) {
      this.stageChartData(item);
      return true;
    }
    return false;
  }
  stageChartData(item) {
    const initiation = this.getTime(item, LifeCycle.Initiation);
    const planning = this.getTime(item, LifeCycle.Planning);
    const execution = this.getTime(item, LifeCycle.Execution);
    const closure = this.getTime(item, LifeCycle.Closure);
    const totalTime = this.getToatalTimeProject(item);
    const restTime: number =
      totalTime - initiation - execution - planning - closure;
    this.pieChartData = [initiation, planning, execution, closure, restTime];
  }
  private getToatalTimeProject(item): number {
    const x = item.startTime;
    const y = item.endTime;
    const score = this.dateDiff(x, y);
    return score < 0 ? 0 : score;
  }

  private getTime(item: Project, cycle: LifeCycle): number {
    let finalScore: number = 0;
    let i;
    for (i = 0; i <= item.projectLifeCycle.length - 1; i++) {
      const projectCycle = item.projectLifeCycle[i];
      if (projectCycle.lifeCycle === cycle) {
        const x = projectCycle.start;
        const y = projectCycle.end;
        const score = this.dateDiff(x, y);
        finalScore = finalScore + score;
      }
    }
    return finalScore < 0 ? 0 : finalScore;
  }

  private stringToDate(_date, _format, _delimiter) {
    let formatLowerCase = _format.toLowerCase();
    let formatItems = formatLowerCase.split(_delimiter);
    let dateItems = _date.split(_delimiter);
    let monthIndex = formatItems.indexOf("mm");
    let dayIndex = formatItems.indexOf("dd");
    let yearIndex = formatItems.indexOf("yyyy");
    let month = parseInt(dateItems[monthIndex]);
    month -= 1;
    let formatedDate = new Date(
      dateItems[yearIndex],
      month,
      dateItems[dayIndex]
    );
    return formatedDate;
  }
  dateDiff(x, y) {
    const day_start = this.stringToDate(x, "yyyy-MM-dd", "-").getTime();
    const day_end = this.stringToDate(y, "yyyy-MM-dd", "-").getTime();
    const total_days = (day_end - day_start) / (1000 * 60 * 60 * 24);
    return Math.round(total_days);
  }
  getProjects(): void {
    this.projects = this.projectsService.getProjects();
  }

  deleteProject(item) {
    const chooseProjectId = item.id;
    this.projectsService.deleteProject(chooseProjectId);
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
  openAddStage(item) {
    const modal = this.modalService.open(AddNewProjectLifeCycleComponent, {
      ariaLabelledBy: "modal-basic-title",
      centered: true
    });
    (<AddNewProjectLifeCycleComponent>modal.componentInstance).item = item;
    modal.result.then(
      result => {
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }
  openDetail(item) {
    const modal = this.modalService.open(DetailModalComponent, {
      ariaLabelledBy: "modal-basic-title",
      centered: true,
      size: "lg"
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
  openEditStage(item, stage) {
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
  deleteStage(item, stage) {
    const chooseProjectId = item.id;
    const chooseStageId = stage.id;
    this.projectsService.deleteStage(chooseStageId, chooseProjectId);
  }
  isInitiation(stage) {
    return stage.lifeCycle === "Initiation" ? true : false;
  }
  isExecution(stage) {
    return stage.lifeCycle === "Execution" ? true : false;
  }
  isPlanning(stage) {
    return stage.lifeCycle === "Planning" ? true : false;
  }
  isClosure(stage) {
    return stage.lifeCycle === "Closure" ? true : false;
  }
}
