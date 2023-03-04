import React from "react";
import logoLocation from "../images/location.png";
import './Card.css';


function Card(props) {
    return (
        <div className="card">
            <div>
            <img className="card-img" src={props.data.imageUrl} alt="" />
            </div>

            <div className="card-item">
                <div className="location-div">
                <img className="logo-location" src={logoLocation} alt="logo-location" />
                <p className="location">{props.data.location}</p>
                <a className="google-maps-url" href={props.data.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title">{props.data.title}</h1>
                <p className="date">{props.data.startDate} - {props.data.endDate}</p>
                <p className="description">{props.data.description}</p>             
               
            </div>
            
            <hr className="card-line"/> 
        
        </div>
        
    )
}

export default Card;