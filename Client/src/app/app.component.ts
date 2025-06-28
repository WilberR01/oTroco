import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormPadraoComponent } from "./form-padrao/form-padrao.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [MatSlideToggleModule, FormPadraoComponent]
})
export class AppComponent {
  title = 'Client';
}
