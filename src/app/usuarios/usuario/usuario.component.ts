import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import * as fromUsuario from '../../store/actions';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {
  usuario: UsuarioModel;
  loading: boolean;
  error: any;
  constructor( private router: ActivatedRoute,
    private store: Store<AppState> ) { }

  ngOnInit() {
    this.router.params
    .pipe(map(obj => obj.id))
    .subscribe(id => {
      this.store.dispatch( new fromUsuario.GetUser(id) );
    });
    this.store.select('usuario')
    .subscribe(user => {
      this.usuario = user.usuario;
      this.loading = user.loading;
      this.error = user.error;
    });
  }

}
