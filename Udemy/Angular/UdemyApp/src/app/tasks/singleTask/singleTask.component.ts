import { Component, input } from "@angular/core";
import { Task } from "../../../models/task";

@Component({
  selector: 'app-singleTask',
  standalone: true,
  templateUrl: './singleTask.component.html',
  styleUrl: './singleTask.component.scss'
})

export class SingleTaskComponent {
  task = input.required<Task>();
}
