import { Injectable } from "@angular/core";
import { Project } from "../models/project";
import { PROJECTS } from "../models/mock-projects";
import { ProjectLifeCycle } from "../models/projectLifeCycle";

@Injectable({
  providedIn: "root"
})
export class ProjectsService {
  constructor() {}

  private projectID(){
    if(PROJECTS.length === 0){
    return 1
  }else
     return PROJECTS.length +1;
  };

  getProjects(): Project[] {
    return PROJECTS;
  }
  addProject(newProject: Project) {
    newProject.id = this.projectID();
    PROJECTS.push(newProject);
  }
  updateProject(editedProject: Project) {
     const index = PROJECTS.findIndex(p => p.id === editedProject.id);
     PROJECTS[index] = editedProject;
  }
  deleteProject(chooseProjectId : number){
    const index = PROJECTS.findIndex(p=> p.id === chooseProjectId);
    PROJECTS.splice(index,1);
  }


  addProjectLifeCycleToProject(newProjectLifeCycle :ProjectLifeCycle, projectid:number){
    const index = PROJECTS.findIndex(p=> p.id === projectid);
    newProjectLifeCycle.id = (PROJECTS[index].projectLifeCycle.length === 0)? 1 : PROJECTS[index].projectLifeCycle.length + 1;
    PROJECTS[index].projectLifeCycle.push(newProjectLifeCycle);
  }

  
}
