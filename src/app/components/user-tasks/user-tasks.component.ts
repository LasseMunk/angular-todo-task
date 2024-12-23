import { Component, Input } from '@angular/core';
import { User } from '../user/user-types';
import { UserTaskComponent } from '../user-task/user-task.component';
import { DUMMY_TASKS, Task } from '../../dummy-tasks';

@Component({
  selector: 'app-user-tasks',
  imports: [UserTaskComponent],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) tasks: Task[] = [];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
