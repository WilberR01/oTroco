import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormConfig } from "../components/form-padrao/form-config.interface";
import { FormPadraoComponent } from "../components/form-padrao/form-padrao.component";
import { Overlay } from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private dialog: MatDialog
  ) { }

  public openFormDialog<T extends { id: number | null | undefined }>(
    config: FormConfig<T>
  ): MatDialogRef<FormPadraoComponent<T>> {

    return this.dialog.open<FormPadraoComponent<T>, FormConfig<T>>(FormPadraoComponent, {
      width: '550px',
      maxHeight: '90vh',
      disableClose: false,
      autoFocus: 'first-tabbable',
      data: config
    });
  }
}