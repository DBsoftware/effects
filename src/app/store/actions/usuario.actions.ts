import { Action } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';

export const GET_USER = '[USER] cargar usuario';
export const GET_USER_FAIL = '[USER] cargar usuario fallido';
export const GET_USER_SUCCESS = '[USER] cargar usuario exitoso';

export class GetUser implements Action  {
    readonly type = GET_USER;
    constructor(public id: string) {}
}
export class GetUserFail implements Action  {
    readonly type = GET_USER_FAIL;
    constructor(public payload: any) {}
}
export class GetUserSuccess implements Action  {
    readonly type = GET_USER_SUCCESS;
    constructor(public usuario: UsuarioModel) {}
}

export type accionesUsuario = GetUser|
                    GetUserFail|
                    GetUserSuccess;

