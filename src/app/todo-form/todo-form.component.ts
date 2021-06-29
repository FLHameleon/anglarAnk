import {Component, OnInit} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {Todo, TodosService} from '../shared/todos.service';

// @NgModule({
//   imports: [MatSliderModule]
// })
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  dateOfBirth: string = '';
  framework: string = '';
  frameworkVersion: string = '';
  email: string = '';

  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
  }

  pushUserData() {
    const todotodo: Todo = {
      id: Date.now(),
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      framework: this.framework,
      frameworkVersion: this.frameworkVersion,
      email: this.email
    }

    this.todosService.pushUserData(todotodo)
    this.firstName = ''
    this.lastName = ''
    this.dateOfBirth = ''
    this.framework = ''
    this.frameworkVersion = ''
    this.email = ''
  }

}
