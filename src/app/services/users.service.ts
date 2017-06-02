import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class UsersService {
    
    constructor(private _http:Http, private _db:AngularFireDatabase){
    }
    public  getAllQuestions() : Observable<any>{
        return this._db.list('/QBank',{
        query: {
            orderByChild: 'question'
        }
    });
    }

    public  getUserAnswers() : Observable<any>{
        return this._db.list('/User',{
        query: {
            orderByKey: true
        }
        });
    }

    public  getGift() : Observable<any>{
        return this._db.list('/Gift',{
            query: {
            orderByKey: true
        }
        });
    }

private id = "User-Pramod";
    public add(questionLine){
        var newPostKey = this._db.database.ref('/QBank/').push().key;
        this._db.database.ref('/QBank/'+newPostKey).set({question: questionLine.question,answer: questionLine.answer});
    }

    public addAnswer(key, answer,uid){
        //var newPostKey = this._db.database.ref('/User/').push().key;
        this._db.database.ref('/User/'+uid+"/"+key).set(answer);
    }

    public addGiftAnswer(val:boolean){
        this._db.database.ref('/Gift/'+'isGift').set(val);
    }


    public save(user:any){
        console.log(user);
        this._db.database
        .ref('/QBank/'+user.$key)
        .update({name: user.name});
    }
}