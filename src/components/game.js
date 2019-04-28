import React from "react";
import Characters from "./../characters.json";
import Card from "./card/card";


// The class is a component (components in react can be defined as classes or functions. Classes in react give you more features)
class ClickyGame extends React.Component {
state = {
    characters: Characters,
    clickedId: [],
    userGuess: "Click an Image To Begin",
    score: 0,
    topScore: 0
}
// Function to shuffle images and then return new shuffled images
shuffleArray = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
return a
}
// Logic for on click of images.
  imageClicked = id => {
  // This takes variable holds the new shuffled images evertime picture is clicked and them sets them to display
    var newArray = this.shuffleArray (this.state.characters)
    this.setState({characters: newArray})
    // This variable keeps track of each image clicked by their id and then updates the state of the score and top score.
    // It also compares the ids in order to check wether the image has already been selected.
    var trackedClicks = this.state.clickedId  
    if (trackedClicks.indexOf(id) === -1) {
          trackedClicks.push(id)
          this.setState({
              clickedId: trackedClicks,
              userGuess: "You guessed correctly",
              score: this.state.score + 1,
              topScore: this.state.topScore + 1
            });
      } else { 
        // If the image has been clicked twice the score goes back to 0 and user is informed their guess is incorrect. Also, topscore is displayed
        this.setState({
            userGuess: "You guessed incorrectly",
            score: 0,
            topScore: this.state.topScore,

        }) 
      }
    // console.log(id);
  };
  // Displaying the above logic to the page
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-info text-white">
          <a className="navbar-brand text-white" href="/">
            Princess Memory Game
          </a>
          <span className="navbar-center">{this.state.userGuess} </span>
          <span className="navbar-right">Score: {this.state.score} | Top Score: {this.state.topScore} </span>
        </nav>
        <br></br>
    <div>
        <header className="header bg-secondary text-center text-white">
        <h4>Princess Memory Game</h4>
        <h4>Click on a picture to earn 1 point! Do not click a picture more than once!</h4>
        </header>
    </div>
    <br></br>
        <div className="container">
        <br></br>
          <div className="row">
            {this.state.characters.map(element => {
              return (
                // Card component, see card.js
                <Card
                  key={element.id}
                  imageUrl={element.image}
                  clickImage={() => this.imageClicked(element.id)}
                />
              );
            })}
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}
// exporting the class ClickyGame
export default ClickyGame;
