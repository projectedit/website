import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
  
})
export class ToolbarComponent implements OnInit {

  toolbarColor: string = 'transparent'; // Start with red color
  scrollThreshold: number = 900; // Set scroll threshold to header height
  navbarState = 'in';
  logoState = 'in';
  linksState = 'in';

  constructor() { }

  ngOnInit(): void {
    this.updateToolbarColor(); // Update color initially based on scroll position
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateToolbarColor();
  }

  updateToolbarColor() {
    if (window.scrollY > this.scrollThreshold) {
      this.toolbarColor = '#003848ff'; // Change to blue after scrolling
    } else {
      this.toolbarColor = 'transparent'; // Stay red before scrolling
    }
  }
}

