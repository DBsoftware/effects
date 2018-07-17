import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: any [] = [];
  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit() {
    this._usuariosService.getUsuarios()
    .subscribe(res => this.usuarios = res );
  }

}
