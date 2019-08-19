const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const movies = require('../ejemplo.json');

//Mostrar datos
router.get('/', (req, res) => {
    res.json(movies);
});

//Guardar datos metodo POST
router.post('/', (req, res) => {
    const { title, director, año, rating }= req.body;
    ik(title && director && año && rating){
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        res.json(movies);
    }else{
        res.json({error: 'Hubo un error'});
    }
    res.send('recivido');
});

//Actualizar datos
router.put('/:id', (req, res)=> {
    const {id} = req.params;
    const { title, director, año, rating }= req.body;
    if(title && director && año && rating) {
        _.each(movies, (movie, i) =>{
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.año = año;
                movie.rating = rating;
            }
        });
        res.json(movies);
    }else {
        res.status(500).json({error: 'hubo un problema'});
    }
});


//Eliminar datos
router.delete('/:id', (req, res) =>{
    const { id } = req.param;
    _.each(movies, (movie, i) => {
        if(movie.id == id){
            movies.splice(i, 1);
        }
    });
    res.send(movies);
})

module.exports = router;