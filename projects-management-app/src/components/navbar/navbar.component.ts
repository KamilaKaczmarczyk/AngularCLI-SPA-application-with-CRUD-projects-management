import { Component } from "@angular/core";
import { ProjectsService } from "../../app/projects.service";
import { Project } from "../../models/interface";

@Component({
  selector: "navbar",
  templateUrl: "navbar.component.html",
  styleUrls: ["navbar.component.scss"]
})
export class NavbarComponent {
  public areAnyProject: boolean;

  projects: Project[];

  getProjects(): void {
    this.projects = this.projectsService.getProjects();
  }

  public addFirstProject() {
    if (this.projects.length !== 0) {
      this.areAnyProject = true;
    }else{
        this.areAnyProject = false;
    }
  }
  constructor(private projectsService: ProjectsService) {
    this.getProjects();
    this.addFirstProject();
  }
}
