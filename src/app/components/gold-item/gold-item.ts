import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-gold-item',
  styleUrl: './gold-item.css',
  templateUrl: './gold-item.html',
})
export class GoldItem {
  //Receive data from parent components
  @Input() karat: number = 24;
  @Input() price: number = 0; 


  //Send an event from parent comoponents
  @Output() goldSelected = new EventEmitter<number>();

  // Triggered when the user clicks the button
  selectGold() {
    this.goldSelected.emit(this.karat);
  }
}
