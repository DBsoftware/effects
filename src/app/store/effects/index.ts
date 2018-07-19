import { UsuariosEffects } from './usuarios.effects';
import { UsuarioEffects } from './usuario.effects';
export * from './usuarios.effects';
export * from './usuario.effects';

export const effectsArray: any[] = [UsuariosEffects, UsuarioEffects];
