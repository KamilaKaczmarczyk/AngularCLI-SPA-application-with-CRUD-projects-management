import { Injectable } from '@angular/core';
import { Project } from '../models/interface';
import { PROJECTS } from '../models/mock-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects():Project[]{
    return PROJECTS;}

}
