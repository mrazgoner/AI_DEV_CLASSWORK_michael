import express from 'express';
import { getStudents, getStudentById, postStudent } from './controllers/student.controller';

import cors from 'cors';   

const app = express();

app.use(express.json());
app.use(cors());

app.get('/students', getStudents);
app.get('/students/:id', getStudentById);
app.post('/students', postStudent);


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
