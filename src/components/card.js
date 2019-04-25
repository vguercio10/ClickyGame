import React from "react";


function Card(props) {

    return (
    <div onClick = {props.clickImage} className="col-md-3">
    <img src={props.imageUrl} style={{width: 80, height: 125}}className="img-responsive" alt="spongebob"/>
    </div>
    )
}
export default Card;
