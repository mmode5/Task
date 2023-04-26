import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinlaTournamentsComponent } from './finla-tournaments.component';

describe('FinlaTournamentsComponent', () => {
  let component: FinlaTournamentsComponent;
  let fixture: ComponentFixture<FinlaTournamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinlaTournamentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinlaTournamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
