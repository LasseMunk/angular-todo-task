import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../dummy-tasks';

@Component({
  selector: 'app-user-task',
  imports: [],
  templateUrl: './user-task.component.html',
  styleUrl: './user-task.component.css',
})
export class UserTaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() completeTask = new EventEmitter<string>();

  onCompleteTask() {
    this.completeTask.emit(this.task.id);
  }
}
