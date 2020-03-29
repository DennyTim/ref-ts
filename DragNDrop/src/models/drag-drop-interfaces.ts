namespace App {
    export interface DragTarget {
        dragHandler(event: DragEvent): void;
        dragOverHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
    }
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }
}
