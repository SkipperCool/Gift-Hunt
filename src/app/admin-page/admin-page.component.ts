import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css','./indigo-pink.css']
})


export class AdminPageComponent implements OnInit {
  private questionLine = {};
  private answer=null;
  public questionBank:Array<any> = ["loading..."];
  public userAnswer:Array<any> = ["loading..."];

  constructor(private userService:UsersService){
  }

  ngOnInit(){
      this.getAllQuestions();
  }

  public addData(){
    this.userService.add(this.questionLine);
  }

  public setGiftAvailable(val:boolean) {
    this.userService.addGiftAnswer(val);
  }

  /*public addUserAnswer(key:any) {
    this.userService.addAnswer(key, this.answer);
    this.answer="";
  }*/

  private getAllQuestions(){
    this.userService.getAllQuestions()
    .subscribe(
      resp => this.questionBank = resp,
      err => this.questionBank = err
    );
  }
}
