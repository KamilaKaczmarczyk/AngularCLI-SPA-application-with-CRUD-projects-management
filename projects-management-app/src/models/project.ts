import { ProjectLifeCycle } from "./projectLifeCycle";

 export interface Project{
id : number;
name: string;
description: string;
date?: number;
updateDate?: number;
startTime?: string;
endTime?: string;
projectLifeCycle?:ProjectLifeCycle[];
}


