import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }
  @Input() game: Game;

  ngOnInit() {
  }
}

export interface Game{
  title:string;
  score: string;
  genre: string;
  editors_choic: string;
  platform: string;

}
