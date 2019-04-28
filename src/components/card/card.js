// importing react framwork
import React from "react";

// Css for Card component
const styles = {
    imgResponsive: {
        boxShadow: "-3px 18px 20px 0px rgba(99,89,99,1)",
        background: "white",
        marginTop: 10,
        width: 100,
        height: 150
    }
}

// A component (in this case this card) is a reusable function for elements that contains props(aka parameters)
function Card(props) {

    return (
    <div onClick = {props.clickImage} className="col-md-3">
    <img src={props.imageUrl} style={styles.imgResponsive} className="img-responsive" alt="disneyprincess"/>
    </div>
    )
}
export default Card;



