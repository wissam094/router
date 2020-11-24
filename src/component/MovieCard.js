import React from 'react';
import StarRatingComponent from "react-rating-stars-component";
import {Card} from 'react-bootstrap';
import '../App.css'
import { Link } from 'react-router-dom';


export  const MovieCard =(props)=>{
    return <div className="cardt"> 

<Card style={{ width: '18rem' }}>
    
                    <Card.Img width="200px" heigh="200px" variant="top" src={props.img} />
                    <Card.Body>
                      
                    {/* <Route path={`${props.match.path}`} */}
                 <Card.Title>{props.titre}</Card.Title>
                        
                 <div className="starss">  <StarRatingComponent
                            count={5}
                            value={props.rate}
                            size={20}
                            activeColor="#ffd700"
                            edit={false}
                            
                        /></div> 
                          
                       
                    </Card.Body>
                </Card>


    </div>

}
