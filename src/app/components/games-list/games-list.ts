import { Component, Input } from '@angular/core';
import { Game } from '../../shared/models/games.model';

@Component({
  selector: 'app-games-list',
  imports: [],
  templateUrl: './games-list.html',
  styleUrl: './games-list.css',
})
export class GamesList {
  @Input() games!: Game[];
}
