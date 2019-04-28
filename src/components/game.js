import React from "react";
import Characters from "./../characters.json";
import Card from "./card/card";
import "./card/stylecard.css"


class ClickyGame extends React.Component {
state = {
    characters: Characters,
    clickedId: [],
    userGuess: "Click an Image To Begin",
    score: 0,
    topScore: 0
}

shuffleArray = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
return a
}

  imageClicked = id => {
    var newArray = this.shuffleArray (this.state.characters)
    this.setState({characters: newArray})
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
        this.setState({
            userGuess: "You guessed incorrectly",
            score: 0,
            topScore: this.state.topScore,

        }) 
      }
    // console.log(id);
  };
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

export default ClickyGame;
