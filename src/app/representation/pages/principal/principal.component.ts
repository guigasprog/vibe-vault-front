import { Component } from '@angular/core';
import { CarrosselComponent } from '../../../components/carrossel.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CarrosselComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
})
export class PrincipalComponent {}
