import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/services/users.service';
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  private answer=null;
  public questionBank:Array<any> = ["loading..."];
  public userAnswer:Array<any> = ["loading..."];

  public isGiftAvailable:any;

  public marks:number=0;
  
  constructor(private userService:UsersService,private auth: AuthService){
  }

  ngOnInit(){
      this.getAllQuestions();
      this.getAllUserAnswers();
      this.getMarks();
  }
  public saveData(user:any) {
      this.userService.save(user);
  }

  public addUserAnswer(key:any,uid:any) {
    this.userService.addAnswer(key, this.answer,uid);
    this.answer="";
  }

  private getAllQuestions(){
    this.userService.getAllQuestions()
    .subscribe(
      resp => this.questionBank = resp,
      err => this.questionBank = err
    );
  }

  private getAllUserAnswers(){
    this.userService.getUserAnswers()
    .subscribe(
      resp => this.userAnswer = resp,
      err => this.userAnswer = err
    );

  }

  private getMarks() {
    this.userService.getGift()
    .subscribe(
      resp => this.isGiftAvailable = resp[0].$value,
      err => this.isGiftAvailable = false 
    );
    }

}
