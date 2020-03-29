import { Sorter } from "./Sorter";

class Node {
    next: Node | null = null;

    constructor(public data: number) {}
}

export class LinkedList extends Sorter {

    head: Node | null = null;

    add(data: number): void {
        const node = new Node(data); //создаем ноду

        if(!this.head) {             //проверка, является ли нода первой в списке
            this.head = node;
            return;
        }

        let tail = this.head;        // если элемент не первый записываем его в temp
        while (tail.next) {          // если ссылка на следующий не null, крутим до null
            tail = tail.next;        // если следующая нулл выходим из цикла
        }

        tail.next = node;            // в последнюю записываем нодку
    }

    get length(): number {
        if(!this.head) {
            return 0;
        }

        let length = 1;
        let node = this.head;
        while(node.next) {            // Можно было сделать через подсчет добавления/удаления
            length++;                 // зачем параноить постоянно пересчитывать длину не понятно
            node = node.next;
        }

        return length;
    }

    find(index: number) : Node {
        if(!this.head) {
            throw new Error('Index out of bounds');
        }

        let counter = 0;
        let node: Node | null = this.head;
        while(node) {
            if(counter === index) {
                return node;
            }

            counter++;
            node = node.next;
        }

        throw new Error('Index out of bounds');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if(!this.head) {
            throw new Error('List is empty');
        }

        return this.find(leftIndex).data >  this.find(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.find(leftIndex);
        const rightNode = this.find(rightIndex);

        [leftNode.data, rightNode.data] = [rightNode.data, leftNode.data];
    }

    print(): void {
        if(!this.head) {
            return;
        }

        let node: Node | null = this.head;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
