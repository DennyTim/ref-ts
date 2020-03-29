/// <reference path="components/base.component.ts" />
/// <reference path="components/project-item.ts" />
/// <reference path="components/project-list.ts" />
/// <reference path="components/project-input.ts" />
/// <reference path="models/drag-drop-interfaces.ts" />
/// <reference path="models/project.models.ts" />
/// <reference path="state/project.component.ts" />
/// <reference path="utils/validatable.component.ts" />
/// <reference path="decorators/autobind.decorator.ts" />

namespace App {
    new ProjectInput();
    new ProjectList(ProjectStatus.Active);
    new ProjectList(ProjectStatus.Finished);
}
