import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";
import { ProjectStatus } from "./models/project.models";

new ProjectInput();
new ProjectList(ProjectStatus.Active);
new ProjectList(ProjectStatus.Finished);

