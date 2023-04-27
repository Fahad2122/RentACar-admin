import React from 'react'
import { Link } from 'react-router-dom'

function CarItem(props) {
  const imageName = require('./RentImages'+props.image)
  return (
    <div>
      <Link to="/find" style={{textDecoration: 'none'}}><div className="card bg-warning" >
        <img src={imageName} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title" style={{color: 'red'}} id={props.title} value={props.Name}>{props.Name}</h5>
            <p id={props.model} style={{display: 'none'}}>{props.model}</p>
            {/* <p className="card-text">{props.overview}</p> */}
            {/* <a href={`https://image.tmdb.org/t/p/w500/${props.path}`} className="btn btn-danger" target='_blank' rel="noreferrer">Watch Online</a> */}
        </div>
    </div></Link>
    </div>
  )
}

export default CarItem