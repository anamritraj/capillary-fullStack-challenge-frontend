import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnChanges {

  constructor() { }
  @Input() game: Game;

  ngOnChanges(changes: SimpleChanges) {
  }
}

export interface Game{
  title:string;
  score: string;
  genre: string;
  editors_choice: string;
  platform: string;

}
