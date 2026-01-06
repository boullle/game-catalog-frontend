import { TestBed } from '@angular/core/testing';

import { GameTop } from './game-top';

describe('GameTop', () => {
  let service: GameTop;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTop);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
