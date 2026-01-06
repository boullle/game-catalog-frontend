import { Component, Input } from '@angular/core';
import { Game } from '../../shared/models/games.model';

@Component({
  selector: 'app-top-games-list',
  imports: [],
  templateUrl: './top-games-list.html',
  styleUrl: './top-games-list.css',
})
export class TopGamesList {
   @Input() topGames!: Game[];
}
