import { Component, computed, input, output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = input.required<User>()
  selected = input.required<boolean>()

  selectUser = output<string>();
  imagePath = computed(() => 'assets/users/' + this.user().avatar);

  onSelectUser(){
    this.selectUser.emit(this.user().id)
  }
}