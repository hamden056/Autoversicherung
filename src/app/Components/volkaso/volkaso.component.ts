import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volkaso',
  templateUrl: './volkaso.component.html',
  styleUrls: ['./volkaso.component.css']
})
export class VolkasoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  changeColor(event : Event) {
    let buttons = document.querySelectorAll('button');
  
    // Reset the border color of all buttons
    buttons.forEach(button => button.style.borderColor = 'black');
  
    // Change the border color of the clicked button
  
    (event.target as HTMLElement).style.borderColor = '#f0906a';
  
  
  }
  isSelected = false;

changeBorderColor() {
  this.isSelected = !this.isSelected;
}

selectedCard !: number;

  selectCard(card: number) {
    this.selectedCard = card;
  }

}
