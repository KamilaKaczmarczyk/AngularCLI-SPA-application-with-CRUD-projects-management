import { LifeCycle } from "./lifeCycleEnum";

export interface ProjectLifeCycle {
  id:number;
  name:string;
  lifeCycle: LifeCycle;
  start: string;
  end: string;
  comment?: string;
}
