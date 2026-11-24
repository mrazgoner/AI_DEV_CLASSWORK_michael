import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Students } from '../students';
import { Student } from '../../models/Student';
  
@Component({
  imports: [CommonModule],
  standalone: true,
  selector: 'app-student',
  styleUrl: './student.scss',
  templateUrl: './student.html',
})
export class StudentComponent {
   private studentsService = inject(Students);

   students: Student[] = [];

    ngOnInit(): void {
        this.studentsService.getStudents().subscribe(data => {
            this.students = data;
        });
    }
}
