import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {

  games = [];
  search_term: string;
  constructor(
    private _gameService: GameService
  ) {
    this.search_term = "";
  }

  ngOnInit() {
    this._gameService.getGames().subscribe(result =>{
      this.games = result;
    },
    error =>{
      console.log(error);
    });
  }

}
