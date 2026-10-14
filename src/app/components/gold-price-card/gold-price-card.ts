import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-gold-price-card',
  styleUrl: './gold-price-card.css',
  templateUrl: './gold-price-card.html',
})
export class GoldPriceCard {
  goldPrices = [
    { karat: 24, price: 54.250, label:'أنقى العيارات'},
    { karat: 22, price: 49.730, label:'للمجوهرات'},
    { karat: 21, price: 47.480, label:'الاكثر تداولا '},
    { karat: 18, price: 40.700, label:'للتصاميم'}
  ];
}
