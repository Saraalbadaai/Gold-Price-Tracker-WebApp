import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoldItem } from './gold-item';

describe('GoldItem', () => {
  let component: GoldItem;
  let fixture: ComponentFixture<GoldItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldItem],
    }).compileComponents();

    fixture = TestBed.createComponent(GoldItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
