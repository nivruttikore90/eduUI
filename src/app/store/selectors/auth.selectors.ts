import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '../reducer/auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('auth');
export const selectToken = createSelector(selectAuthState, state => state.token);
export const selectAuthError = createSelector(selectAuthState, state => state.error);
export const isAuthenticated = createSelector(selectToken, token => !!token);
