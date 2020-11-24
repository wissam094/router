import React,{useState} from 'react';
import './App.css';
import {MovieList} from './component/MovieList';
import AddMovie from './component/addMovie';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import {Ha} from './component/Ha.js'
import { render } from '@testing-library/react';

function App(props) {

  const  [Movie,setMovie]=useState([
    {titre:"annihilation",
    rate:3,
      img:"https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg",
      description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
      trailer: "https://www.youtube.com/embed/oVzVdvGIC7U"
    },
{titre:"Game of thrones",
  rate:5,
  img:"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
  trailer: "https://www.youtube.com/embed/oVzVdvGIC7U"
/*},
{titre:"Breaking bad",
  rate:5,
  img:"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "peaky blinders",
  img: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
        rate: 8,
        description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    },
    {
      titre: "Game of thrones",
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
        rate: 9.3,
        description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    },
    {
      titre: "The good doctor",
      img: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
        rate: 8.6,
        description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
    },
    {
      titre: "Breakin bad",
      img: "https://image.tmdb.org/t/p/original/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
      rate: 9.5,
      description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
  },
{
    titre: "Prison Break",
    img: "https://upload.wikimedia.org/wikipedia/en/5/54/Prison-break-season-4-dvd.jpg",
    rate: 9,
    description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "Gangs of London",
  img: "https://m.media-amazon.com/images/M/MV5BOGJlZTE0MTQtZDdmMS00YWViLThlMDktYzk1N2RhMjY0NGEyXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_.jpg",
  rate: 8.2,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "Taboo",
  img: "https://images-na.ssl-images-amazon.com/images/I/81BbPS82fnL._AC_SL1500_.jpg",
  rate: 8.2,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "Lethal Weapon",
  img: "https://vignette.wikia.nocookie.net/lethalweapon/images/2/2e/Lethal_Weapon_TV_series_poster.jpg/revision/latest/scale-to-width-down/340?cb=20160819024657",
  rate: 7.5,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "Dexter",
  img: "https://images-na.ssl-images-amazon.com/images/I/81JKXT1j0OL._SL1500_.jpg",
  rate: 8.1,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "Black Sails",
  img: "https://m.media-amazon.com/images/M/MV5BZmExNzU1M2YtNGUzOC00MmM0LWEwYzYtZWJiYjYxNDcwY2E0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
  rate: 7.8,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "Black List",
  img: "https://i2.wp.com/www.nerdsandbeyond.com/wp-content/uploads/2018/11/203AD589-D9BC-4842-BE7A-3FAC786F49EA.jpeg?fit=750%2C947&ssl=1",
  rate: 7.6,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "The Walking deads",
  img: "https://fr.web.img2.acsta.net/c_216_288/medias/nmedia/18/78/35/82/20303823.jpg",
  rate: 8.1,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "Vis A Vis",
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1DBIEAneCfzyHa1-xYPa2oMCulo6mken_9Q&usqp=CAU",
  rate: 7.5,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "Cukur",
  img: "https://imgr.cineserie.com/2018/10/1129749.jpg?imgeng=/f_jpg/cmpr_0/w_744/h_1200/m_cropbox&ver=1",
  rate: 8.1,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "See",
  img: "https://fr.web.img6.acsta.net/pictures/19/09/10/20/30/1507616.jpg",
  rate: 7.9,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
},
{
  titre: "SHERLOCK",
  img: "https://images-na.ssl-images-amazon.com/images/I/51j90UOkX-L.jpg",
  rate: 9.1,
  description: "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
*/

}  ])

  const addMovie=(a,b,c)=>{
   
    setMovie([...Movie,{titre:a,rate:b,img:c}])
  }

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div>
          <AddMovie addMovie={addMovie}/>
         <MovieList Movie={Movie}/>
         <Route path="/" exact component={App} />
          <Route path="/movie/:name" render = {(props) => <Ha movies={Movie} {...props}/>} />


         </div>

         
    
      </header>
    </div>
    </Router>
  );
}

export default App;


