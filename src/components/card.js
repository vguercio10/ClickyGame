import React from "react";


function Card(props) {

    return (
    <div onClick = {props.clickImage} className="col-md-3">
    <img src={props.imageUrl} style={{width: 100, height:150}}className="img-responsive" alt="spongebob"/>
    </div>
    )
}
export default Card;
