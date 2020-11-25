import React from 'react'
import {Link} from 'react-router-dom'

export const Description = (props) => {
    let movie = props.movies.find(el => el.titre === props.match.params.titre)
    
    return (
        <div className="description">
        <div >
            
            <h1>Description</h1>
            {
                movie ? (
                    <div>
                      <p>{movie.description}</p>
                        <iframe width="731" height="411" src={movie.trailer} title ={movie.title} />
                        <Link to ="/" exact><button >Go back</button> </Link>
                    </div>
                ):null
            }
         


        </div></div>
    )
}