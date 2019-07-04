import React, { Component }from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import newId from './Util/NewId';

class App extends Component {

  state = {
    ninjas: [
    ]
  }

 
  addNinja = (ninja) => {
    ninja.id = newId(); 
    
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    });

    console.log(this.state.ninjas);
    console.log(ninja.id);
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    })
    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount = () => {
    //console.log("Component did mount!");
  }

  componentDidUpdate = (prevProps, prevState) => {
    //console.log("Component updated!");
    //console.log(prevProps, prevState);

  }

  render() {
    return (
      <div className="App">
        <h1>My first react app!</h1>
        <p>Welcome!</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }

}

export default App;
