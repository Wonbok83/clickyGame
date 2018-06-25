import React, { Component } from "react";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import "./App.css";


class App extends Component {

    state = {
        friends: friends,
        clickedId: [],
        currentclick: 0,
        bestScore:0,
        // shake:<=0?true:false
    }


    componentDidMount(){
        this.setState({
            friends: this.shuffleArray(this.state.friends)
        });
    }

    click = (id) => {
        console.log("id: ", id);
        console.log("clickedId:  ",this.state.clickedId);
      
        if(this.state.clickedId.includes(id)){
           

            if(this.state.bestScore> this.state.currentclick){
                this.restartGame();

            } else {
                this.setState({
                    bestScore: this.state.currentclick,
                });
              this.restartGame();
            }
           
        
           
        } else {
            
                this.handleCorrectGuess(id)
           
        }
    }

    restartGame = () => {
        this.setState({
          
            clickedId: [],
            currentclick: 0
            
        });
        this.componentDidMount();
    }

    handleCorrectGuess = (id) => {
        // {when this function run, increase currentclick and }

        let updatedId = this.state.clickedId.slice()
        updatedId.push(id)
        this.setState({
            clickedId: updatedId,
            currentclick: this.state.currentclick+1
        });
        this.componentDidMount();
    }

 
   




    shuffleArray = (array) => {
        for (let i = array.length-1; i >0 ; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i]
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }



 






    render() {
        return (
            <Wrapper>
                <Title>Guessing Clicky Game </Title>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
                <br/>
                <hr/>
                <h3 className="scoreSummary">
                    Correct Guesses: {this.state.currentclick} 
                    <br />
                    Best Score: {this.state.bestScore} 
                </h3>


                {this.state.friends.map(friend => 
                    <FriendCard
                        click={this.click}
                        shake={this.state.bestScore && !this.state.currentclick}
                        id={friend.id}
                        key={friend.id}
                        image={friend.image}

                    />
                )}
            </Wrapper>
        );
    } //render() 








};  //class App

export default App;