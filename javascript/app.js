//our dependencies

const express = require('express');
const res = require('express/lib/response');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

//Sets up the get request and tahe server.

app.get("/", (req, res) => {
    res.render("home", { variableName: "Hello friend!"})
})

app.listen(3000, (req, res) => {
    console.log("App is running on port 3000");
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.render("home"), {
        data: notes
    }
})

app.post('/update', (req, res) => {
    var noteId = req.body.noteId;
    var noteContent = req.body.noteContent;

    notes.forEach(note => {
        if (note.noteId == noteId) {
            note.noteContent = noteContent;
        }
    })

    res.render("home", {
        data: notes
    })
})

//This is for the notes portion

const notes = [{
    noteId: 1,
    noteContent: "This is a note."
}]

//to delete note

app.post('/delete', (req, res) => {
    var noteId = req.body.noteIdl
    var i = 0;

    notes.forEach(note => {
        i = i + 1;
        if(note.noteId == noteId) {
            notes.splice((j-1), 1)
        }
    })
    res.render("home", {
        data: notes
    })
})