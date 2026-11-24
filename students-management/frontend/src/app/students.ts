import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/Student';


@Injectable({ providedIn: 'root' })
export class Students {

private http: HttpClient = inject(HttpClient);

private apiUrl = 'http://localhost:3000/students';

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(this.apiUrl);
    }

}
