import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  
}

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.hasAttribute("active")) {
      updateActiveCard(card);
    }
  });
});

function updateActiveCard(activeCard: Element) {
  cards.forEach((card) => {
    if (card === activeCard) {
      card.setAttribute("active", "");
    } else {
      card.removeAttribute("active");
    }
  });
}
