import express from 'express';
import { getStudents, getStudentById, postStudent } from './controllers/student.controller';

const app = express();

app.use(express.json());

app.get('/students', getStudents);
app.get('/students/:id', getStudentById);
app.post('/students', postStudent);


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
