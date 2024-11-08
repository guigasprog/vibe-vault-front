import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'vv-carrossel',
  standalone: true,
  imports: [NgFor],
  template: `
    <div class="carousel-container" style="">
      <ng-content></ng-content>
      <button (click)="prev()">‹</button>
      <button (click)="next()">›</button>
    </div>
  `,
  styles: [
    `
      .carousel-container {
        margin: 0 auto;
        position: relative;
        width: 100%;
        height: 400px;
        overflow: hidden;
      }
      button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 24px;
        padding: 0px 14px 7px 14px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        cursor: pointer;
      }
      button:focus {
        outline: none;
      }
      button:nth-of-type(1) {
        left: 10px;
      }
      button:nth-of-type(2) {
        right: 10px;
      }
    `,
  ],
})
export class CarrosselComponent {
  currentIndex = 0;

  next() {}

  prev() {}
}
