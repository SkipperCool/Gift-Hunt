import { Component, OnInit } from '@angular/core';
import { MdDialog } from "@angular/material";

@Component({
  selector: 'app-gift-hint',
  templateUrl: './gift-hint.component.html',
  styleUrls: ['./gift-hint.component.css']
})
export class GiftHintComponent implements OnInit {

  public answer1: string;
  public icon: string;
  public className: string;
  public className2: string;
  public markAnswer1:boolean= false;

  public answer2: string;
  public markAnswer2:boolean= false;
  public answer3: string;
  public markAnswer3:boolean= false;
  public answer4: string;
  public markAnswer4:boolean= false;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  public checkAnswer() {
    console.log(this.answer1);

      this.markAnswer1 = false;
    if (!this.answer1) {
      this.icon = ''
    } else if (this.answer1.toUpperCase().includes('WATCH')) {
      this.icon = 'watch';
      this.className = 'green';
      this.markAnswer1 = true;
    } else {
      this.icon = 'close';
      this.className = 'red';
    }
  }

  public checkAnswer2() {

      this.markAnswer2 = false;
    if (this.answer2) {
      this.markAnswer2 = true;
      if(this.answer2==='A') {
        this.className2 = 'gold';
      } else if(this.answer2==='B') {
        this.className2 = 'silver';
      } else {
        this.className2 = 'red';
      }
    } 
  }

  public checkAnswer3() {

      this.markAnswer3 = false;
    if (this.answer3 && this.answer3==='7') {
      this.markAnswer3 = true;
    } 
  }

  public checkAnswer4() {

      this.markAnswer4 = false;
    if (this.answer4 && this.answer4==='28') {
      this.markAnswer4 = true;
    } 
  }

}