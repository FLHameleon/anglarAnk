import {Component, OnInit} from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { interval, timer } from 'rxjs';
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
  flagversion: boolean = false;

  mast: Array<string> = ['', 'angular', 'react', 'vue'];
  versins: Array<string> = [];

  vaiant1: Array<string> = ['1.1.1', '1.2.1', '1.3.3'];
  vaiant2: Array<string> = ['2.1.2', '3.2.4', '4.3.1'];
  vaiant3: Array<string> = ['3.3.1', '5.2.1', '5.1.3'];


  constructor(private todosService: TodosService) {
  }

  ngOnInit() {
  }

  frameSelect() {
    if(this.framework) this.flagversion = true
    else this.flagversion = false

    if(this.flagversion) {
      switch(this.framework) {
        case 'angular': {
          this.versins = this.vaiant1
          break;
        }
        case 'react': {
          this.versins = this.vaiant2
          break;
        }
        case 'vue': {
          this.versins = this.vaiant3
          break;
        }
      }
    }
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


    if(this.email == "test@test.test") {
      const obs$ = timer(2000)
      obs$.subscribe(() => {
        alert('В базе данных почта test@test.test уже есть ')
      })
    }
    else this.todosService.pushUserData(todotodo)

    this.firstName = ''
    this.lastName = ''
    this.dateOfBirth = ''
    this.framework = ''
    this.frameworkVersion = ''
    this.email = ''
  }


}
