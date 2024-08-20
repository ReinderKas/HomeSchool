import { Component, computed, input, output } from '@angular/core';
import { SingleTaskComponent } from "./singleTask/singleTask.component";
import { dummyTasks } from '../dummy_tasks';

@Component({
  selector: 'app-task',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
  imports: [SingleTaskComponent]
})

export class TaskComponent {
  userId = input.required<string>()
  name = input.required<string>();
  userTasks = computed(() => dummyTasks.filter(t => t.userId === this.id()));

  selectTask = output<string>();

  addTask() {
    this.selectTask.emit(this.name()); 
  }
}
