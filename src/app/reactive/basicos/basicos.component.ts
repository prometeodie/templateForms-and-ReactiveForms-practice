import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  // miFormulario:FormGroup= new FormGroup({
  //   'nombre': new FormControl('Franco', Validators.required),
  //   'precio': new FormControl(100 , Validators.required),
  //   'existencias': new FormControl(4 , Validators.required)
  // })
  miFormulario: FormGroup = this.fb.group({
    'nombre': [, [Validators.required, Validators.minLength(3)]],
    'precio': [, [Validators.required, Validators.min(0)]],
    'existencias': [, Validators.required],
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.miFormulario.reset({
      nombre: 'dados',
      precio: 100
    })
  }
 

 mostrarError(campo:string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;

    // console.log(this.miFormulario.controls['nombre'])
 }
 
 guardar(){
   
  if(this.miFormulario.invalid){
    this.miFormulario.markAllAsTouched();
    return;
  }
  console.log(this.miFormulario.value);
  this.miFormulario.reset();
}
  

}
