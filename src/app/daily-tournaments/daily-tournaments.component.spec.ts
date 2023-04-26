import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTournamentsComponent } from './daily-tournaments.component';

describe('DailyTournamentsComponent', () => {
  let component: DailyTournamentsComponent;
  let fixture: ComponentFixture<DailyTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
