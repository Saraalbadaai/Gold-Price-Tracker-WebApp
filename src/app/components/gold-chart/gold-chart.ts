import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-gold-chart',
  imports: [],
  templateUrl: './gold-chart.html',
  styleUrl: './gold-chart.css'
})
export class GoldChart {

  // أسعار تجريبية لآخر 30 يومًا
  prices: number[] = [
    51.2, 51.4, 51.1, 51.8, 52.1,
    51.9, 52.3, 52.0, 51.6, 51.7,
    52.2, 52.5, 52.1, 52.8, 53.2,
    52.9, 53.4, 53.1, 52.7, 52.8,
    53.3, 53.6, 53.2, 53.8, 54.1,
    53.9, 54.4, 54.0, 54.3, 54.25
  ];

  // الفترة المختارة
  selectedPeriod = signal<7 | 30>(30);

  // الأسعار المعروضة
  visiblePrices = computed(() => {
    return this.prices.slice(-this.selectedPeriod());
  });

  // نقاط الرسم البياني
  chartPoints = computed(() => {

    const data = this.visiblePrices();

    const minPrice = 50;
    const maxPrice = 55;

    return data.map((price, index) => {

      const x = 40 + index * (520 / (data.length - 1));

      const y = 220 -
        ((price - minPrice) / (maxPrice - minPrice)) * 180;

      return `${x},${y}`;

    }).join(' ');

  });

  // تغيير الفترة
  changePeriod(days: 7 | 30) {
    this.selectedPeriod.set(days);
  }

}