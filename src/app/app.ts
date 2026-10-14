import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { GoldPriceCard } from './components/gold-price-card/gold-price-card';
import { GoldCalculator } from './components/gold-calculator/gold-calculator';
import { GoldChart } from './components/gold-chart/gold-chart';
import { Footer } from './components/footer/footer';
import { PriceHistory } from './components/price-history/price-history';



@Component({
  imports: [Header, Hero, GoldPriceCard, GoldCalculator, GoldChart, PriceHistory, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
}
