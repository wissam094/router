
import AddMovie from './component/addMovie'
import {MovieList} from './component/MovieList.js'
import React, { useState } from 'react'
import { Route } from 'react-router'
import { Description } from './component/Description'
import { BrowserRouter as Router } from 'react-router-dom'

const AllMovies=[{
  titre: "annihilation",
  rate: 3,
  img: "https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg",
  description:"Action d'annihiler ; anéantissement. Réaction entre une particule et son antiparticule au cours de laquelle elles disparaissent pour se transformer en un ensemble d'autres particules (généralement plus légères). [Par exemple, l'annihilation nucléon-antinucléon produit le plus souvent des mésons π.]",
  trailer: "https://www.youtube.com/embed/msJggy8xtmI"
},
{
  titre: "Game of thrones",
  rate: 9.5,
  img: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg"
  ,description:"hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",
  trailer: "https://www.youtube.com/embed/msJggy8xtmI"
},
{
  titre: "Breaking bad",
  rate: 9.5,
  img: "https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
  ,description:"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk",
  trailer: "https://www.youtube.com/embed/msJggy8xtmI"
}

]


function App() {
  const [Movies, setMovies] = useState(AllMovies)
  const addMovie = (a, b, c) => {
    setMovies([...Movies, { titre: a, rate: b, img: c }])
  }
  
  return (
      <div className="App">
         <header className="App-header">
        <div>
      <MovieList Movies={Movies} />
      <AddMovie addMovie={addMovie} />
    </div>
    </header>
    </div>
  );
}
function AppRouter() {
  return(
    <Router>
      <Route path = "/" exact component={App}/>
      <Route path = "/movie/:titre" exact render = {(props) => <Description movies={AllMovies}  {...props}/>}/>
    </Router>
  )
}

export default AppRouter;