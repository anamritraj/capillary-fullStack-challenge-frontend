import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {

  constructor(
    private _gameService: GameService
  ) { }

  ngOnInit() {
    this._gameService.getGames().subscribe(result =>{
      console.log(result);
    },
    error =>{
      console.log(error);
    });
  }

}
