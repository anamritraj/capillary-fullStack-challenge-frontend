import { Component, OnInit } from '@angular/core';
import {GameService} from "../services/game.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
  providers: [GameService]
})
export class GameListComponent implements OnInit {

  games = [];
  search_games = [];
  onpage_games = [];
  current_page: number;
  total_pages:number;
  search_term: string;
  private per_page = 12;

  constructor(
    private _gameService: GameService,
  ) {
    this.search_term = "";
    this.current_page = 1;
  }

  ngOnInit() {

    this._gameService.getGames().subscribe(result =>{
      this.games = result;
      this.search_games = result;
      this.total_pages = Math.ceil(this.search_games.length/this.per_page);
      this.showPageResults(this.current_page);
    },
    error =>{
      console.log(error);
    });
  }

  performSearch(){
    this.search_term = this.search_term.toLowerCase();
    // console.log(this.search_term);
    this.current_page = 1;
    this.search_games = [];
    for (let i = 0; i < this.games.length; i++)
    {
      if(this.games[i].title.toLowerCase().includes(this.search_term)){
        // console.log(this.games[i].title);
        this.search_games.push(this.games[i]);
      }
    }
    if(this.search_term == ""){
      this.search_games = this.games;
    }
    this.showPageResults(this.current_page);
  }

  showPageResults(page_no){
    console.log(page_no);
    if(page_no <= this.total_pages && page_no >= 1){
      this.onpage_games = [];
      this.current_page = page_no;

      for (let i = this.per_page * (this.current_page - 1); i < this.per_page * this.current_page; i++)
      {
        if(this.search_games[i]){
          this.onpage_games.push(this.search_games[i]);
        }
      }
    }
  }

  createRange(){
    this.total_pages = Math.ceil(this.search_games.length/this.per_page);
    let items: number[] = [];
    for(let i = 1; i <= this.total_pages; i++){
      items.push(i);
    }
    return items;
  }
}


