import { LifeCycle } from "./lifeCycleEnum";

export interface ProjectLifeCycle {
  lifeCycle: LifeCycle;
  start: string;
  end: string;
  comment?: string;
}
