import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Game } from '../models/games.model';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gamesUrl: string = environment.apiUrl;
  private httpClient=inject(HttpClient);

  getGames() :Observable<Game[]> {
    return this.httpClient.get<Game[]>(this.gamesUrl + '/index');
  }
}
