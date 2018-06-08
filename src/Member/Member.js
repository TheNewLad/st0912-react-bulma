import React, { Component } from 'react';
import voca from 'voca';

class Member extends Component {
    constructor (props) {
        super(props);
        this.state = {readMore: false};

        this.toggleBio = this.toggleBio.bind(this);
    }

    toggleBio() {
        this.setState(prevState => 
            ({readMore: !prevState.readMore})
        )
    }
    
    render() {
       return (
        <div className="column">
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={this.props.imgName && require(`../images/members/${this.props.imgName}`)} alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <p className="title is-4">{this.props.name}</p>
                    <p className="subtitle is-6 is-italic">{this.props.title}</p>
                    <div className="content">
                        <p className="bio">{this.state.readMore ? this.props.bio : voca.truncate(this.props.bio, 200)}</p>
                        <a className="" onClick={this.toggleBio}>{this.state.readMore ? 'Read Less' : 'Read More'}</a>
                    </div>
                </div>
            </div>
        </div>

    ); 
    }
    
}

export default Member