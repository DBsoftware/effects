import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuariosService } from '../../services/usuarios.service';
import { of } from 'rxjs';

@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions,
                private _usuariosSrv: UsuariosService) {}

    @Effect()
    cargarUsuario$ = this.actions$.ofType( usuarioActions.GET_USER )
                        .pipe(
                            switchMap( action =>
                                    this._usuariosSrv.getUserByID(action['id'])
                                    .pipe(
                                        map(user => new usuarioActions.GetUserSuccess(user)),
                                        catchError(err => of(new usuarioActions.GetUserFail(err)))
                                        )
                                    )
                            );

}
