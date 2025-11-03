import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StudentState } from '../reducer/student.reducer';

export const selectStudentState = createFeatureSelector<StudentState>('student');
export const selectAllStudents = createSelector(selectStudentState, state => state.students);
export const selectStudentError = createSelector(selectStudentState, state => state.error);
