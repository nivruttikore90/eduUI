import { AuthState } from './auth/auth.reducer';
import { StudentState } from './student/student.reducer';

export interface AppState {
  auth: AuthState;
  student: StudentState;
}
