
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


let students = [
    { id: 1, name: 'Juan Dela Cruz', course: 'BSIT', yearLevel: 1 },
    { id: 2, name: 'Maria Santos', course: 'BSCS', yearLevel: 2 }
];

let nextId = 3;


app.get('/', (req, res) => {
    res.json({ message: 'Student Records API is running!' });
});


app.get('/api/students', (req, res) => {
    res.status(200).json(students);
});


app.get('/api/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    res.status(200).json(student);
});


app.post('/api/students', (req, res) => {
    const { name, course, yearLevel } = req.body;

    if (
        typeof name !== 'string' || !name.trim() ||
        typeof course !== 'string' || !course.trim() ||
        !Number.isInteger(yearLevel) ||
        yearLevel < 1 || yearLevel > 4
    ) {
        return res.status(400).json({
            message: 'Name, course, and a yearLevel from 1 to 4 are required.'
        });
    }

    const newStudent = {
        id: nextId++,
        name: name.trim(),
        course: course.trim(),
        yearLevel
    };

    students.push(newStudent);

    res.status(201).json({
        message: 'Student created successfully',
        student: newStudent
    });
});


app.put('/api/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    const { name, course, yearLevel } = req.body;

    if (
        typeof name !== 'string' || !name.trim() ||
        typeof course !== 'string' || !course.trim() ||
        !Number.isInteger(yearLevel) ||
        yearLevel < 1 || yearLevel > 4
    ) {
        return res.status(400).json({
            message: 'Name, course, and a yearLevel from 1 to 4 are required.'
        });
    }

    student.name = name.trim();
    student.course = course.trim();
    student.yearLevel = yearLevel;

    res.status(200).json({
        message: 'Student updated successfully',
        student
    });
});


app.delete('/api/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.status(200).json({
        message: 'Student deleted successfully',
        student: deletedStudent
    });
});


app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
