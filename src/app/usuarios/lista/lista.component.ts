import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import * as userActions from '../../store/actions';
import { AppState } from '../../store/app.reducer';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {
  usuarios: UsuarioModel [] = [];
  loading: boolean;
  error: any;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('usuarios')
    .subscribe(res => {
      this.usuarios = res.usuarios;
      this.loading = res.loading;
      this.error = res.error;
    } );
    this.store.dispatch( new userActions.GetUsers() );
  }

}
