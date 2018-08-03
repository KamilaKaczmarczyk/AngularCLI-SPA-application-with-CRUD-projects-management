import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectsService } from '../../app/projects.service';
import { LifeCycle } from '../../models/lifeCycleEnum';
import { ProjectLifeCycle } from '../../models/projectLifeCycle';
import { Project } from '../../models/project';


@Component({
    selector: 'add-new-projectLifeCycle',
    templateUrl: 'add-projectLifeCycle.component.html',
    styleUrls:['add-projectLifeCycle.component.scss']
})
export class AddNewProjectLifeCycleComponent implements OnInit {
item: Project;
lifeCycleType = LifeCycle;
stageInput;
inputStartLifeCycle;
inputEndLifeCycle;
textareaComment;
inputName;

getLifeCycle():Array<string>{
const lifeCycle = Object.keys(this.lifeCycleType);
return lifeCycle.slice(lifeCycle.length/2);
}

setInputValue(stage){
    this.stageInput.value = stage;
}

setProjectLifeCycle() {
    const newProjectLifeCycle : ProjectLifeCycle={
      id:null,
      name: this.inputName.value,
      lifeCycle :this.stageInput.value,
      start: this.inputStartLifeCycle.value,
      end:this.inputEndLifeCycle.value,
      comment:this.textareaComment.value
     };
     const projectid = this.item.id
     this.projectsService.addProjectLifeCycleToProject(newProjectLifeCycle, projectid);
   
 }
    constructor(
        public activeModal: NgbActiveModal,
        private projectsService: ProjectsService
    ) { }

    ngOnInit() { 
        this.stageInput = <HTMLInputElement>document.getElementById("stage");
        this.inputStartLifeCycle = <HTMLInputElement>document.getElementById('dateStart');
        this.inputEndLifeCycle = <HTMLInputElement>document.getElementById('dateEnd');
        this.textareaComment = <HTMLInputElement>document.getElementById('exampleFormControlTextarea1');
        this.inputName =<HTMLInputElement>document.getElementById('inputName');
    }

}