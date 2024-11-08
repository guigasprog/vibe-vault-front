import { NgClass, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from '../app.routes';

@Component({
  selector: 'vv-header',
  standalone: true,
  imports: [NgIf],
  template: ` <header>
    <div
      (click)="navigateToThePrincipalPage()"
      class="logo"
      style="width: {{
        router.routerState.snapshot.url !== '/login' && width < 500
          ? '55%'
          : width >= 500
          ? '15%'
          : '100%'
      }}"
    >
      <h1
        class="title"
        style="font-size: {{
          router.routerState.snapshot.url !== '/login' && width < 500
            ? '28px'
            : width >= 500
            ? ''
            : ''
        }}"
      >
        Vibe Vault
      </h1>
      <h3 class="title sub-title">Store Website</h3>
    </div>
    <div class="vazio"></div>
    <ng-container
      *ngIf="router.routerState.snapshot.url !== '/login' || width > 500"
    >
      <div class="bloco">
        <figure id="blocoAvatarUsuario" (click)="navigateToTheLoginPage()">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
            class="IconDefaultProfileLogo"
          >
            <mask
              id="mask0"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="28"
              height="28"
              style="mask-type: alpha"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6375 13.5625C20.6063 12.2062 21.875 9.975 21.875 7.4375C21.875 3.325 18.55 0 14.4375 0C10.325 0 7 3.325 7 7.4375C7 9.975 8.26875 12.2062 10.2375 13.5625C6.34375 14.7875 3.5 18.4625 3.5 22.75V28H25.375V22.75C25.375 18.4625 22.5312 14.7875 18.6375 13.5625Z"
                fill="#347BBE"
              ></path>
            </mask>
            <g mask="url(#mask0)">
              <circle cx="14.5" cy="11.5" r="15.5" fill="#C4C4C4"></circle>
            </g>
          </svg>
        </figure>
        <div id="blocoInformacoesCliente" (click)="navigateToTheLoginPage()">
          <span
            ><span class="strong">ENTRE</span> ou <br /><span class="strong"
              >CADASTRE-SE</span
            ></span
          >
        </div>
      </div>
    </ng-container>
  </header>`,
  styles: [
    `
      @import '../../styles.scss';

      header {
        display: flex;
        width: 80%;
        padding: 1% 0;
        margin: 0 auto;

        .logo {
          cursor: pointer;
          width: 15%;
          text-align: center;
          .sub-title {
            font-size: 13px;
          }
        }

        .vazio {
          width: 60%;
        }

        .bloco {
          width: 25%;
          display: flex;
          align-items: center;
          gap: 10px;
          #blocoAvatarUsuario {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            border: 3px solid $dark-gray;
          }
          #blocoInformacoesCliente {
            .strong {
              cursor: pointer;
            }
          }
        }
      }

      @media (max-width: 500px) {
        header {
          width: 100%;
          padding: 5% 0;
          .logo {
            width: 60%;
            text-align: center;
            .title {
              font-size: 48px;
            }
            .sub-title {
              font-size: 20px;
            }
          }
          .vazio {
            width: 0;
          }
          .bloco {
            width: 45%;
          }
        }
      }
    `,
  ],
})
export class HeaderComponent {
  constructor(public router: Router) {}

  width = innerWidth;

  navigateToThePrincipalPage() {
    this.router.navigateByUrl('/');
  }

  navigateToTheLoginPage() {
    this.router.navigateByUrl('/login');
  }
}
