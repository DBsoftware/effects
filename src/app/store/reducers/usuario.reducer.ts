import { UsuarioModel } from '../../models/usuario.model';
import * as fromAcciones from '../actions';

export interface UsuarioState {
    usuario: UsuarioModel;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuarioState = {
    usuario: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer(state: UsuarioState = estadoInicial, action: fromAcciones.accionesUsuario): UsuarioState {
    switch (action.type) {
        case fromAcciones.GET_USER:
            return {...state, loading: true};
        case fromAcciones.GET_USER_SUCCESS:
            return {...state, usuario: {...action.usuario}, loading: false, loaded: true, error: null};
        case fromAcciones.GET_USER_FAIL:
            return {...state,
                loading: false,
                loaded: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                    }
            };
        default:
            return state;
    }
}

