import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuariosService } from '../../services/usuarios.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions,
                private _usuariosSrv: UsuariosService) {}

    @Effect()
    cargarUsuarios$ = this.actions$.ofType( usuariosActions.GET_USERS )
                        .pipe(
                            switchMap( () =>
                                    this._usuariosSrv.getUsuarios()
                                    .pipe(
                                        map(users => new usuariosActions.GetUsersSuccess(users)),
                                        catchError(err => of(new usuariosActions.GetUsersFail(err)))
                                        )
                                    )
                            );

}
