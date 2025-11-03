import { createReducer, on } from '@ngrx/store';
import { Student } from '../../core/models/student.model';
import * as StudentActions from '../actions/student.actions';

export interface StudentState {
  students: Student[];
  error: string | null;
}

export const initialState: StudentState = {
  students: [],
  error: null
};

export const studentReducer = createReducer(
  initialState,
  on(StudentActions.loadStudentsSuccess, (state, { students }) => ({ ...state, students })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({ ...state, error })),
  on(StudentActions.addStudentSuccess, (state, { student }) => ({
    ...state,
    students: [...state.students, student]
  })),
  on(StudentActions.addStudentFailure, (state, { error }) => ({ ...state, error }))
);
