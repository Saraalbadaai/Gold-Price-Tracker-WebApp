import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-gold-calculator',
  styleUrl: './gold-calculator.css',
  templateUrl: './gold-calculator.html',
})
export class GoldCalculator {

  // أسعار الذهب التجريبية
  goldPrices = [
    { karat: 24, price: 54.250 },
    { karat: 22, price: 49.730 },
    { karat: 21, price: 47.480 },
    { karat: 18, price: 40.700 }
  ];

  // العيار الافتراضي
  selectedKarat = 24;

  // الوزن الافتراضي
  weight: number | null = 1;

  // الحصول على سعر الجرام
  get pricePerGram(): number {
    const gold = this.goldPrices.find(
      item => item.karat === Number(this.selectedKarat)
    );

    return gold?.price ?? 0;
  }

  // حساب القيمة الإجمالية
  get totalPrice(): number {
    if (this.weight === null || this.weight <= 0) {
      return 0;
    }

    return this.weight * this.pricePerGram;
  }
}