import { Action } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';

export const GET_USERS = '[USERS] cargar usuarios';
export const GET_USERS_FAIL = '[USERS] cargar usuarios fallido';
export const GET_USERS_SUCCESS = '[USERS] cargar usuarios exitoso';

export class GetUsers implements Action  {
    readonly type = GET_USERS;
}
export class GetUsersFail implements Action  {
    readonly type = GET_USERS_FAIL;
    constructor(public payload: any) {}
}
export class GetUsersSuccess implements Action  {
    readonly type = GET_USERS_SUCCESS;
    constructor(public usuarios: UsuarioModel[]) {}
}

export type acciones = GetUsers|
                    GetUsersFail|
                    GetUsersSuccess;


