import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miformulario') miformulario!: NgForm;
  
  initForm = {
    producto: '',
    precio: 0,
    existencia: 10
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean | null{
    return this.miformulario?.controls['producto']?.invalid &&
           this.miformulario?.controls['producto']?.touched;
  }


  precioValido(){
    // o tambien si puede poner min directamente en la etiqueta y chekear si el campo esta invalid
    return this.miformulario?.controls['precio'].value < 0 &&
           this.miformulario?.controls['precio']?.touched;
  }

  guardar(){
    console.log('posteo correcto');
    this.miformulario.resetForm({
      precio: 0,
      existencia: 0
    });
  }

}
