import { Component } from '@angular/core';

interface MenuItem{
  texto: string,
  ruta: string
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  styles: [`li{cursor: pointer}`]
})
export class SidenavComponent  {

  templateMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: 'template/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: 'template/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: 'template/switches'
    },
  ]

  reactiveMenu: MenuItem[] = [
    {
      texto: 'Basicos',
      ruta: 'reactive/basicos'
    },
    {
      texto: 'Dinamicos',
      ruta: 'reactive/dinamicos'
    },
    {
      texto: 'Switches',
      ruta: 'reactive/switches'
    },
  ]

  authMenu: MenuItem[] = [
    {
      texto: 'registro',
      ruta: 'auth/registro'
    },
    {
      texto: 'login',
      ruta: 'auth/login'
    }
  ]

}
