import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'form-padrao',
  standalone: true,
  imports: [
    MatFormFieldModule
  ],
  templateUrl: './form-padrao.component.html',
  styleUrl: './form-padrao.component.scss'
})
export class FormPadraoComponent {
}