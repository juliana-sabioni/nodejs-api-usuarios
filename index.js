const express = require ('express');
const app = express();
const port = process.env.PORT || 3000; // Set the port to 3000 or use the PORT environment variable

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.static('public')); // Serve static files from the 'public' directory

let usuarios = [
    {id: 1, nome: "Zezim"},
    {id: 2, nome: "Rosinha"},
]

app.get('/usuarios', (req,res) =>{
    res.json(usuarios); // Send the list of users as JSON response

});

app.post('/usuarios', (req, res) => {
    const novoUsuario = req.body; 
    novoUsuario.id = Date.now(); // Use current timestamp as ID
    usuarios.push(novoUsuario);
    res.status(201).json(novoUsuario); // Send back the created user with status 201 (Created)
});

app.delete('/usuarios/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get the ID from the request parameters
    usuarios = usuarios.filter(u => u.id !== id); // Filter out the user with the given ID and update the list. The !== signifies that the id is not equal to the id of the user being deleted.
    res.status(204).send(); // Send back a 204 No Content response
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`); // Log the server URL to the console
});


