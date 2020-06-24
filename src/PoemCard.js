import React from 'react';
import { EditPoemButton } from './EditPoemButton';


export default class PoemCard extends React.Component{
  
    state = {
        name: this.props.name,
        content: this.props.content
    }

    handleClick=(content2)=>{
        this.setState({
            content: content2
        })
    }

   deletePoem=()=>{
    this.props.handleDelete2(this.props.poem)
    }

    render=()=>{
        return(
        <div className="ui card">
            <div className="content">
                <div className="header">{this.state.name}</div>
            </div>
            <div className="content">
                {this.state.content}
            </div>
            <div className="content">
                <button className="ui red button" onClick={this.deletePoem}>Delete</button>
                <EditPoemButton poem={this.props} handleClick={this.handleClick}/>
            </div>
        </div>
        )
}
}
