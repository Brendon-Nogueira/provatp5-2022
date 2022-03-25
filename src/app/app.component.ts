import { Times } from './times';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  newTimes: Times = {} as Times
  timesList: Times [] = []


  saveClub(form: NgForm){
    this.timesList.push(this.newTimes)
    this.newTimes = {} as Times
    form.resetForm()
  }


}
