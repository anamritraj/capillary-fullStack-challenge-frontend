import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {

  games = [];
  search_games = [];
  search_term: string;

  constructor(
    private _gameService: GameService
  ) {
    this.search_term = "";
  }

  ngOnInit() {
    this._gameService.getGames().subscribe(result =>{
      this.games = result;
      this.search_games = result;
    },
    error =>{
      console.log(error);
    });
  }

  performSearch(){
    console.log(this.search_term);
    this.search_term = this.search_term.toLowerCase();
    this.search_games = [];
    for (let i = 0; i < this.games.length; i++)
    {
      if(this.games[i].title.toLowerCase().includes(this.search_term)){
        console.log(this.games[i].title);
        this.search_games.push(this.games[i]);
      }
    }
    if(this.search_term == ""){
      this.search_games = this.games;
    }
  }
}

export interface Game{
  title:string;
  score: string;
  genre: string;
  editors_choic: string;
  platform: string;

}

