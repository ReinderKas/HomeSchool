import { Component, output, signal } from '@angular/core';
import { NewTaskData, Task } from '../../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  addTask = output<NewTaskData>();
  closed = output<void>();

  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDueDate = signal('')


  createTask(){
    this.addTask.emit({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      dueDate: this.enteredDueDate()
    })
  }
 
  closeDialog(){
    this.closed.emit();
  }
}
