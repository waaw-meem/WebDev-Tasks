import { Component, ElementRef, ViewChild } from '@angular/core';

interface TodoItem {
  userItemName: string;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {

  @ViewChild('itemName') itemName?:ElementRef

  todoList: TodoItem[] = [];

  addItem() {
    const newItem: TodoItem = {
      userItemName: this.itemName?.nativeElement.value
    };

    // Add the new item to the todoList
    this.todoList.push(newItem);
  }

  removeItem(index: number) {
    // Remove the item from the todoList based on the index
    this.todoList.splice(index, 1);
  }

}
