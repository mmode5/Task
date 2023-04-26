import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarOffersComponent } from './similar-offers.component';

describe('SimilarOffersComponent', () => {
  let component: SimilarOffersComponent;
  let fixture: ComponentFixture<SimilarOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimilarOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimilarOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
