import React from 'react';
import poems from './poems.json'
import { PoemForm } from './PoemForm';
import  PoemList  from './PoemList.js';

class App extends React.Component {
  
  state = {
    poems: poems
  }

  addPoem=(poem)=>{
    this.setState({
      poems: [...this.state.poems, poem]
    })
  }

  handleDelete=(poem)=>{
    console.log(this.state.poems.filter(instance => instance !== poem))
      this.setState({
      poems: this.state.poems.filter(instance => instance !== poem)
      })
    }
  
  render(){
    return (
      <div className="ui container">
        <PoemForm addPoem={this.addPoem} />
        <PoemList poems={this.state.poems} handleDelete={this.handleDelete}/>
      </div>
    );
  }

}

export default App;
