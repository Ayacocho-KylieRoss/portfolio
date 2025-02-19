import { Component } from '@angular/core';

@Component({
  selector: 'app-computer-society',
  templateUrl: './computer-society.component.html',
  styleUrls: ['./computer-society.component.css']
})
export class ComputerSocietyComponent {
  openModal(event: Event) {
    const target = event.target as HTMLImageElement;
    const modal = document.getElementById("imageModal") as HTMLElement;
    const modalImg = document.getElementById("fullImage") as HTMLImageElement;

    if (target && modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = target.src;
        modalImg.style.maxWidth = "90vw";
        modalImg.style.maxHeight = "90vh";
    }
}

  closeModal(event: Event) {
    const modal = document.getElementById("imageModal") as HTMLElement;
    const modalContent = document.querySelector(".modal-content") as HTMLElement;

    if (modal && event.target !== modalContent) {
        modal.style.display = "none";
    }
  }
}
