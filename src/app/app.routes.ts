import { Routes } from '@angular/router';
import { StudentRegisterComponent } from './features/student-register/student-register/student-register.component';
import { StudentListComponent } from './features/student-list/student-list/student-list.component';

export const routes: Routes = [
    { path: 'studentregister', component: StudentRegisterComponent },
    { path: 'student', component: StudentListComponent },
];
