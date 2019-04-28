import React from "react";
// import "./stylecard.css";

const styles = {
    imgResponsive: {
        boxShadow: "-3px 18px 20px 0px rgba(99,89,99,1)",
        background: "white",
        marginTop: 10,
        width: 100,
        height: 150
    }
}

function Card(props) {

    return (
    <div onClick = {props.clickImage} className="col-md-3">
    <img src={props.imageUrl} style={styles.imgResponsive} className="img-responsive" alt="disneyprincess"/>
    </div>
    )
}
export default Card;



