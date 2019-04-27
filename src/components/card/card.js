import React from "react";
import "./stylecard.css";


function Card(props) {

    return (
    <div onClick = {props.clickImage} className="col-md-3">
    <img src={props.imageUrl} style={{width: 100, height:150}} className="img-responsive" alt="disneyprincess"/>
    </div>
    )
}
export default Card;



