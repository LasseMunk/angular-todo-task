import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../dummy-tasks';
import { User } from '../user';

@Component({
  selector: 'app-add-user-task',
  templateUrl: './add-user-task.component.html',
  styleUrl: './add-user-task.component.css',
})
export class AddUserTaskComponent {
  @Input({ required: true }) user!: User;
  @Output() submitTask = new EventEmitter<Task>();

  formFields: Task = {
    id: '',
    userId: '',
    title: '',
    dueDate: '',
    summary: '',
  };

  onFieldChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const field = target.name;
    const value = target.value;

    this.formFields = { ...this.formFields, [field]: value };
  }

  onSubmit(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    const submit: Task = {
      ...this.formFields,
      userId: this.user.id,
      id: (1000 * Math.random()).toFixed(0),
    };
    this.submitTask.emit(submit);
  }
}
