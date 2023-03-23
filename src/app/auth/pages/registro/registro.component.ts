import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { AuthService } from './Validators/auth.service';
import { EmailValidatorService } from './Validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombreApellido :['',[Validators.required, Validators.pattern(this.authServices.nombrePattern)]],
    email          :['',[Validators.required,Validators.pattern(this.authServices.emailPattern)], [this.ev]],
    username       :['',[Validators.required, this.authServices.noPuedeSerStrider]],
    password       :['',[Validators.required, Validators.minLength(6)]],
    password2      :['',[Validators.required]]
  },{
    validators:[ this.authServices.camposIguales('password', 'password2')]
  })


  get emailErrorMenssage(): string{

   const errors = this.miFormulario.get('email')?.errors;

        if(errors?.['required']){
        return 'El correo es obligatorio.';
      }else if (errors?.['emailTomado']){
        return 'El correo ya existe.';
      }else if (errors?.['pattern']){
        return 'El correo no tiene un formato valido.';
      }
      return ''
  }

  constructor(private fb: FormBuilder,
              private authServices: AuthService,
              private ev: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombreApellido : 'Franco Rodriguez',
      email          : 'franco@gmail.com',
      username       : 'pepito',
      password       : 'wishmaster',
      password2      : 'wishmaster'
    })
  }


  mostrarErrores(campo: string){
    return this.miFormulario.get(campo)?.invalid &&
           this.miFormulario.get(campo)?.touched
  }

  // emailExiste(){
  //   return this.miFormulario.get('email')?.touched &&
  //     this.miFormulario.get('email')?.errors?.['required'];
  // }

  // emailExistente(){
  //   return this.miFormulario.get('email')?.errors?.['emailTomado']&&
  //   this.miFormulario.get('email')?.touched;
  // }

  // emailPatronincorrecto(){
  //   return this.miFormulario.get('email')?.errors?.['pattern']&&
  //   this.miFormulario.get('email')?.touched;
  // }

  mostrarErrorEmail(){


    return null;
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    this.miFormulario.reset();
    console.log(this.miFormulario.value);
  }

}
