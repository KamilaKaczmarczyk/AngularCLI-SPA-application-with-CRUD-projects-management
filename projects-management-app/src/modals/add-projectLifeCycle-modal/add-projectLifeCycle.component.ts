import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ProjectsService } from '../../app/projects.service';
import { LifeCycle } from '../../models/lifeCycleEnum';


@Component({
    selector: 'add-new-projectLifeCycle',
    templateUrl: 'add-projectLifeCycle.component.html',
    styleUrls:['add-projectLifeCycle.component.scss']
})
export class AddNewProjectLifeCycleComponent implements OnInit {
lifeCycleType = LifeCycle;

getLifeCycle():Array<string>{
const lifeCycle = Object.keys(this.lifeCycleType);
return lifeCycle.slice(lifeCycle.length/2);
}
    constructor(
        public activeModal: NgbActiveModal,
        private projectsService: ProjectsService
    ) { }

    ngOnInit() { 

    }

}