import React from 'react';
import PoemCard from './PoemCard.js';

export default class PoemList extends React.Component{
    state={
        poems: this.props.poems
    }

    // handleDelete=(poem)=>{
    //     this.setState({
    //         poems: this.state.poems.filter(instance => instance !== poem)
    //     })
    // }

    render=()=>{return(
        <div className="ui cards" style={{ marginTop: 20 }}>
           
        {this.props.poems.map( poem => (
            <PoemCard
                poem={poem}
                name={poem.name}
                content={poem.content}
                handleDelete2={this.props.handleDelete}
            />
        ))}
        </div>
    )
    }
}
