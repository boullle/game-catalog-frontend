import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { GamesList } from '../games-list/games-list';
import { GameService } from '../../shared/services/game';
import { Game } from '../../shared/models/games.model';
import { Subscription } from 'rxjs';
import { GameTop } from '../../shared/services/game-top';
import { TopGamesList } from '../top-games-list/top-games-list';

@Component({
  selector: 'app-home',
  imports: [GamesList,TopGamesList],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private gameService = inject(GameService);
  private gameTop = inject(GameTop);
  private cdr = inject(ChangeDetectorRef);
  protected games!: Game[];
  protected topGames!: Game[];
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.getGamesInTemplate();
    this.getTopGamesInTemplate(10);
  }
  private getGamesInTemplate(): void {
    this.subscriptions.push(
      this.gameService.getGames().subscribe((gamesFromApi: Game[]) => {
        this.games = gamesFromApi;
        this.cdr.detectChanges();
      })
    );
  }
  private getTopGamesInTemplate(limit: number): void {
    this.subscriptions.push(
      this.gameTop.getGamesTop(limit).subscribe((topGamesFromApi: Game[]) => {
        this.topGames = topGamesFromApi;
        this.cdr.detectChanges();
      })
    );
  }
}
