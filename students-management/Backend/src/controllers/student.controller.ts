import { Request, Response } from 'express';
import { students } from '../data/students';    

export function getStudents(req: Request, res: Response) {
    res.json(students);
}

// get a single student by ID
export function getStudentById(req: Request, res: Response) {
    const id = req.params.id;
    if (typeof id !== 'string') {
        res.status(400).json({ message: 'Invalid student ID' });
        return;
    }

    const student = students.find(s => s.id === parseInt(id, 10));
    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
}

// add a new student
export function postStudent(req: Request, res: Response) {
    const { name, grades } = req.body;
    if (!name || !grades || !Array.isArray(grades)) {
        res.status(400).json({ message: 'Invalid student data' });
        return;
    }

    const newStudent = {
        id: students.length > 0 ? students[students.length - 1]!.id + 1 : 1,
        name,
        grades
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
}

