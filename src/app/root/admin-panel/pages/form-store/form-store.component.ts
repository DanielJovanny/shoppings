import { Component } from '@angular/core';


@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.scss']
})
export class FormStoreComponent {

  public imageUrl: string | ArrayBuffer =
    'https://bulma.io/images/placeholders/480x480.png'
  //Usa la url de la imagen local para previsualizar en la foto de perfil


  constructor() {
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = (event) => {
      console.log(reader)
      if (reader.result) {
        this.imageUrl = reader.result
      }
    }
  }


}
