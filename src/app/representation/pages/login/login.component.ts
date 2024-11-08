import { Component, HostListener } from '@angular/core';
import { DialogComponent } from '../../../components/dialog.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DialogComponent, NgStyle],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isDialogVisible: boolean = false;
  isDialogEnderecoVisible: boolean = false;

  reg: boolean = false;

  windowWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowWidth = window.innerWidth;
  }

  registerPageVisible() {
    if (this.windowWidth > 500) {
      document.getElementById('card-login')!.style.marginLeft = '-680px';
      document.getElementById('card-acesso-redes-sociais')!.style.marginRight =
        '-680px';
    } else {
      document.getElementById('card-login')!.style.marginLeft = '-780px';
      document.getElementById('card-acesso-redes-sociais')!.style.marginRight =
        '-780px';
    }
    setTimeout(() => {
      document.getElementById('text-ou')!.style.opacity = '0';
      setTimeout(() => {
        if (this.windowWidth > 500) {
          document.getElementById('line-1')!.style.marginTop = '-280px';
          document.getElementById('line-2')!.style.marginTop = '280px';
        } else {
          document.getElementById('line-1')!.style.marginTop = '-1px';
          document.getElementById('line-1')!.style.marginLeft = '-300px';
          document.getElementById('line-2')!.style.marginRight = '-300px';
        }
        setTimeout(() => {
          document.getElementById('loginpage')!.style.display = 'none';
          document.getElementById('loginpage')!.style.zIndex = '-1000';
          document.getElementById('registerpage')!.style.display = 'flex';
          document.getElementById('registerpage')!.style.zIndex = '0';
          setTimeout(() => {
            document.getElementById('card-register')!.style.scale = '1';
          }, 10);
        }, 300);
      }, 200);
    }, 200);
  }

  loginPageVisible() {
    document.getElementById('card-register')!.style.scale = '0';
    setTimeout(() => {
      document.getElementById('registerpage')!.style.display = 'none';
      document.getElementById('registerpage')!.style.zIndex = '-1000';
      document.getElementById('loginpage')!.style.display = 'flex';
      document.getElementById('loginpage')!.style.zIndex = '0';
      setTimeout(() => {
        if (this.windowWidth > 500) {
          document.getElementById('card-login')!.style.marginLeft = '3%';
          document.getElementById(
            'card-acesso-redes-sociais'
          )!.style.marginRight = '3%';
        } else {
          document.getElementById('card-login')!.style.marginLeft = '10px';
          document.getElementById(
            'card-acesso-redes-sociais'
          )!.style.marginRight = '10px';
        }
        setTimeout(() => {
          if (this.windowWidth > 500) {
            document.getElementById('line-1')!.style.marginTop = '0px';
            document.getElementById('line-2')!.style.marginTop = '0px';
          } else {
            document.getElementById('line-1')!.style.marginTop = '-1px';
            document.getElementById('line-1')!.style.marginLeft = '0px';
            document.getElementById('line-2')!.style.marginRight = '0px';
          }
          document.getElementById('text-ou')!.style.opacity = '1';
        }, 300);
      }, 300);
    }, 300);
  }

  openDialog() {
    this.isDialogVisible = true;
  }

  closeDialog() {
    this.isDialogVisible = false;
  }
}
