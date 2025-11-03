import { createAction, props } from '@ngrx/store';
import { Login } from "../../core/models/login.model";

export const login = createAction('[Auth] Login', props<{ credentials: Login }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());
export const logout = createAction('[Auth] Logout');
