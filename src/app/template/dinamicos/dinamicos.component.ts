import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos:Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: 
  './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent  {
  @ViewChild('miFormulario') miFormulario!: NgForm

persona: Persona = {
  nombre: 'Franco',
  favoritos: [
    {id:1, nombre: 'God of War'},
    {id:2, nombre: 'The  Last of Us'}
  ]
}

  addNewGame(){
    const  nuevoJuego: Favorito = 
      { id: this.persona.favoritos.length+1, 
        nombre: this.miFormulario.controls['nuevoJuego'].value}

    this.persona.favoritos.push({...nuevoJuego});
    this.miFormulario.controls['nuevoJuego'].reset();
  }
  delete(index: number){
    this.persona.favoritos.splice(index,1);
  }

  guardar(){
    console.log('guardar works!!!');
  }
}
