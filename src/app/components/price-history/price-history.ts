import { Component, computed, signal } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-price-history',
  imports: [DatePipe],
  templateUrl: './price-history.html',
  styleUrl: './price-history.css'
})
export class PriceHistory {

  searchDate = signal('');

  prices: number[] = [
    51.2, 51.4, 51.1, 51.8, 52.1,
    51.9, 52.3, 52.0, 51.6, 51.7,
    52.2, 52.5, 52.1, 52.8, 53.2,
    52.9, 53.4, 53.1, 52.7, 52.8,
    53.3, 53.6, 53.2, 53.8, 54.1,
    53.9, 54.4, 54.0, 54.3, 54.25
  ];

  history = this.prices.map((price, index) => {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - (29 - index));

    const previousPrice =
      index > 0 ? this.prices[index - 1] : price;

    return {
      date,
      price,
      change: price - previousPrice
    };
  }).reverse();

  filteredHistory = computed(() => {
    const query = this.searchDate();

    if (!query) {
      return this.history;
    }

    return this.history.filter(item => {
      const formattedDate = [
        item.date.getFullYear(),
        String(item.date.getMonth() + 1).padStart(2, '0'),
        String(item.date.getDate()).padStart(2, '0')
      ].join('-');

      return formattedDate === query;
    });
  });

  updateSearch(value: string) {
    this.searchDate.set(value);
  }

  clearSearch() {
    this.searchDate.set('');
  }
}