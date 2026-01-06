import { Component, OnInit,inject, ChangeDetectorRef } from '@angular/core';
import { GamesList } from '../games-list/games-list';
import { GameService } from '../../shared/services/game';
import { Game } from '../../shared/models/games.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [GamesList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private gameService=inject(GameService);
  private cdr = inject(ChangeDetectorRef);
  protected games!: Game[];
  private subscriptions : Subscription[]=[];

  ngOnInit(): void {
    this.getGamesInTemplate();
  }
  private getGamesInTemplate(): void {
    this.subscriptions.push(
      this.gameService.getGames().subscribe((gamesFromApi: Game[]) => {
        this.games = gamesFromApi;
        this.cdr.detectChanges();
      })
    );
  }
}
  
