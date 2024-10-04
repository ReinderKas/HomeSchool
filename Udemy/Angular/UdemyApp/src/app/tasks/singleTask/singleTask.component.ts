import { Component, input, output } from "@angular/core";
import { Task } from "../../../models/task";

@Component({
  selector: 'app-singleTask',
  standalone: true,
  templateUrl: './singleTask.component.html',
  styleUrl: './singleTask.component.scss'
})

export class SingleTaskComponent {
  task = input.required<Task>();
  deleted = output<string>();

  deleteTask(){
    this.deleted.emit(this.task().id)
  }
}
