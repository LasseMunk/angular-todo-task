import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  UserComponent,
  HeaderComponent,
  UserTasksComponent,
  User,
} from './components';
import { DUMMY_USERS } from './dummy-users';
import { AddUserTaskComponent } from './components/add-user-task/add-user-task.component';
import { DUMMY_TASKS, Task } from './dummy-tasks';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    UserTasksComponent,
    AddUserTaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser = signal<User | undefined>(undefined);
  tasks = signal<Task[]>(DUMMY_TASKS satisfies Task[]);

  onSelectUser(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (user) this.selectedUser.set(user);
  }

  onAddUserTask(task: Task) {
    this.tasks.set([...this.tasks(), task]);
  }
}
