import { Injectable } from "@angular/core";
import { Project } from "../models/interface";
import { PROJECTS } from "../models/mock-projects";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  constructor() {}

  getProjects(): Project[] {
    return PROJECTS;
  }
  addProject(newProject: Project) {
    newProject.id =
      PROJECTS.length === 0 ? 1 : PROJECTS[PROJECTS.length - 1].id;
    PROJECTS.push(newProject);
  }
  updateProject(editedProject: Project) {
     const index = PROJECTS.findIndex(p => p.id === editedProject.id);
     PROJECTS.splice(index,1,editedProject);
  }
}
