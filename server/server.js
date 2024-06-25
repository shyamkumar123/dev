const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.static('uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = 'uploads/';
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        res.json({ filename: req.file.filename });
    } else {
        res.status(400).send('Error uploading file.');
    }
});

app.get('/photos', (req, res) => {
    fs.readdir('uploads/', (err, files) => {
        if (err) {
            res.status(500).send('Error reading files.');
        } else {
            res.json(files);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});