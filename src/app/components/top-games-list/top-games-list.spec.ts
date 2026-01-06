import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGamesList } from './top-games-list';

describe('TopGamesList', () => {
  let component: TopGamesList;
  let fixture: ComponentFixture<TopGamesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopGamesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGamesList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
