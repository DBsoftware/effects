import { UsuarioModel } from '../../models/usuario.model';
import * as fromAcciones from '../actions';

export interface UsuariosState {
    usuarios: UsuarioModel[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: UsuariosState = {
    usuarios: [],
    loaded: false,
    loading: false,
    error: null
};

export function usuariosReducer(state: UsuariosState = estadoInicial, action: fromAcciones.acciones): UsuariosState {
    switch (action.type) {
        case fromAcciones.GET_USERS:
            return {...state, loading: true};
        case fromAcciones.GET_USERS_SUCCESS:
            return {...state, usuarios: [...action.usuarios], loading: false, loaded: true};
        case fromAcciones.GET_USERS_FAIL:
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

