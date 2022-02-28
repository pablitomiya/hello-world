
const { response, request } = require('express')
const express = require('express')

const app = express()
//para poder aceptar verbos posts, middleware que recibe json y lo mete en body en request
app.use(express.json())

// data

const notes = [
    {
        id:1,
        content: "HTML is easy",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
    {
        id:2,
        content: "Browser can execute only javascript",
        date: "2019-05-31T17:30:31.098Z",
        important: false
    },
    {
        id:3,
        content: "Alalalalalon",
        date: "2019-05-30T17:30:31.098Z",
        important: true
    },
]

app.disable('etag');
// rutas

app.get('/', (request, response)=> {
    response.send('<h1>Hello world</h1>')
})

//get notes/id
app.get('/api/notes/:id', (request,response) => {
    // const id = request.params.id
    const { id } = request.params
    // const note = notes.find((item, idx) => {
    //     if (item.id == id) return item
    // })
    const note = notes.find(item => item.id === Number(id))
    //si la nota no existe deberemos devolver 404
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})


//get notes
app.get('/api/notes', (request,response)=>{
    response.json(notes)
})

//delete note
app.delete('/api/notes/:id', (request,response) => {
    const { id } = request.params
    const resultNotes = notes.filter(item => item.id !== Number(id))
    console.log(resultNotes)
    response.status(204).end()
})


app.post('/api/notes/', (request,response) => {
    const newNote = request.body
    const resultNotes = notes.concat(newNote)
    console.log(resultNotes)
    response.status(201).json(newNote)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)

})

