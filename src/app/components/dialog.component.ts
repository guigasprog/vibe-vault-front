import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vv-dialog',
  standalone: true,
  imports: [NgClass, NgIf],
  template: `
    <div class="dialog-backdrop" *ngIf="visible" (click)="closeModal()"></div>
    <div class="dialog" *ngIf="visible" style="max-width: {{ width }};">
      <div class="dialog-header">
        <h3 class="title">{{ header }}</h3>
        <span class="dialog-close" (click)="closeModal()">&times;</span>
      </div>
      <div class="dialog-content content-text">
        <ng-content></ng-content>
      </div>
      <div class="dialog-footer">
        <ng-content select="[footer]"></ng-content>
      </div>
    </div>
  `,
  styles: [
    `
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.4);
      }
      .dialog {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        background: #3a3a3a;
        border: 0;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .dialog-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px 24px 12px 24px;
        background: #3a3a3a;
        border-radius: 5px 5px 0 0;
      }
      .dialog-content {
        padding: 12px 24px 0px 24px;
      }
      .dialog-footer {
        padding: 0px 24px 24px 24px;
        display: flex;
        background: #3a3a3a;
        border-radius: 0 0 5px 5px;
      }
      .dialog-close {
        scale: 1.7;
        cursor: pointer;
      }
    `,
  ],
})
export class DialogComponent {
  @Input() header: string = '';
  @Input() visible: boolean = false;
  @Input() width: string = '500px';
  @Output() visibleChange = new EventEmitter<boolean>();

  closeModal() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
