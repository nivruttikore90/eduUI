import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { StudentService } from '../../core/services/student.service';
import * as StudentActions from '../actions/student.actions';


@Injectable()
export class StudentEffects {
  constructor(private actions$: Actions, private studentService: StudentService) { }

  loadStudents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.loadStudents),
      mergeMap(() =>
        this.studentService.getAll().pipe(
          map(students => StudentActions.loadStudentsSuccess({ students })),
          catchError(err => of(StudentActions.loadStudentsFailure({ error: err.message })))
        )
      )
    )
  );

  addStudent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudentActions.addStudent),
      mergeMap(({ student }) =>
        this.studentService.add(student).pipe(
          map(newStudent => StudentActions.addStudentSuccess({ student: newStudent })),
          catchError(err => of(StudentActions.addStudentFailure({ error: err.message })))
        )
      )
    )
  );
}