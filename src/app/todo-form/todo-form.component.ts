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

  masHobby: Array<any> = [{name: '', duration: ''}];


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
    else this.versins = []
  }

  pushUserData() {
    const todotodo: Todo = {
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dateOfBirth,
      framework: this.framework,
      frameworkVersion: this.frameworkVersion,
      email: this.email,
      hobby: this.masHobby,
      id: Date.now(),
    }


    if(this.email == "test@test.test") {
      const obs$ = timer(2000)
      obs$.subscribe(() => {
        alert('Oшибкa: такой емейл уже существует')
      })
    }
    else {
      // console.log('this = ', this)
      if(
        this.firstName == '' ||
        this.lastName == '' ||
        this.dateOfBirth == '' ||
        this.framework == '' ||
        this.frameworkVersion == '' ||
        this.email == '' ||
        this.masHobby[0].name == '' ||
        this.masHobby[0].duration == ''
      ) { alert('ЗАПОЛНЕНЫ НЕ ВСЕ ПОЛЯ') }
      else {
        this.todosService.pushUserData(todotodo)

        this.firstName = ''
        this.lastName = ''
        this.dateOfBirth = ''
        this.framework = ''
        this.frameworkVersion = ''
        this.email = ''
        this.masHobby = [{name: '', duration: ''}];
      }
    }
  }

  addHobbi() {
    this.masHobby.push({name: '', duration: ''})
  }

  delHobbi() {
    this.masHobby.pop();
  }


}
