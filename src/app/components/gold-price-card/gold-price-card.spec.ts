import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoldPriceCard } from './gold-price-card';

describe('GoldPriceCard', () => {
  let component: GoldPriceCard;
  let fixture: ComponentFixture<GoldPriceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldPriceCard],
    }).compileComponents();

    fixture = TestBed.createComponent(GoldPriceCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
