import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  private cards!: NodeListOf<Element>;

  ngOnInit() {
    this.cards = document.querySelectorAll('.card_');
    this.addClickListeners();
  }

  private addClickListeners(): void {
    this.cards.forEach((card) => {
      card.addEventListener('click', () => {
        if (!card.hasAttribute('active')) {
          this.updateActiveCard(card);
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
