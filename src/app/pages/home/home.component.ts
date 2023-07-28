import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private cards!: NodeListOf<Element>;

  ngOnInit() {
    this.cards = document.querySelectorAll('.card');
    this.addClickListeners();
  }

  private addClickListeners(): void {
    this.cards.forEach((card) => {
      card.addEventListener('click', () => {
        if (!card.hasAttribute('active')) {
          this.updateActiveCard(card);
          console.log(card)
        }
      });
    });
  }

  private updateActiveCard(activeCard: Element): void {
    this.cards.forEach((card) => {
      if (card === activeCard) {
        card.setAttribute('active', '');
      } else {
        card.removeAttribute('active');
      }
    });
  }

}
