import { Component, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy_users';
import { TaskComponent } from "./tasks/tasks.component";
import { SingleTaskComponent } from './tasks/singleTask/singleTask.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent, 
    UserComponent,
    TaskComponent 
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UdemyApp';
  users = DUMMY_USERS;
  selectedUserId: string | undefined;

  get selectedUser() {
    return DUMMY_USERS.find(u => u.id === this.selectedUserId)!
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }

  onSelectTask(name: string){
    console.log("AppComponent selected Task for: " + name)
  }
}
