import { Component } from '@angular/core';
import { MaterialModule } from '../../utils/material.module';
@Component({
  selector: 'app-lancamentos',
  imports: [
    MaterialModule,
    MaterialModule
  ],
  templateUrl: './lancamentos.component.html',
  styleUrl: './lancamentos.component.scss'
})
export class LancamentosComponent {

}
