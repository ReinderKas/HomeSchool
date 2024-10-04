import { Component, computed, input, output, signal } from '@angular/core';
import { SingleTaskComponent } from "./singleTask/singleTask.component";
import { dummyTasks } from '../dummy_tasks';
import { AddTaskComponent } from "./add-task/add-task.component";
import { NewTaskData, Task } from '../../models/task';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [SingleTaskComponent, AddTaskComponent]
})

export class TaskComponent {
  allTasks = dummyTasks;

  taskList = signal<Task[]>(this.allTasks);
  userId = input.required<string>()
  name = input.required<string>();
  userTasks = computed(() => this.taskList().filter(t => t.userId === this.userId()));

  addNewTask = false

  openAddTask() {
    this.addNewTask = true;
  }
  onDeleteTask(id: string){
    this.taskList.set(this.taskList().filter(t => t.id !== id))
  }

  onCreateNewTask(data: NewTaskData){
    this.taskList.update(values => {
        return [{
          id: new Date().getDate().toString(),
          userId: this.userId(),
          summary: data.summary,
          dueDate: data.dueDate,
          title: data.title,
        }, ...values];
    });
    this.addNewTask = false;
  }

  onCloseNewTask(){
    this.addNewTask = false;
  }
}
