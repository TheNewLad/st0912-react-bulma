import React, { Component } from 'react';
import voca from 'voca';
import shave from 'shave';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            readMore: false,
            height: 75 
        };

        this.toggleBio = this.toggleBio.bind(this);
        this.shaveMember = this.shaveMember.bind(this);
    }

    componentDidMount() {
        this.shaveMember();
    }

    toggleBio() {
        this.setState(prevState =>
            ({ 
                readMore: !prevState.readMore,
                height: !prevState.readMore ? 999999 : 75
            })
        );
        this.shaveMember(!this.state.readMore); //readMore isn't updated when this is run
        
    }

    shaveMember(readMore = false) {
        const height = readMore ? 999999 : 75;
        const name = this.props.name;
        console.log(name, height);
        shave(`.${name}-bio`, height);
    }

    render() {
        return (
            <div className="column" data-aos="fade-up">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-3by4">
                            <img src={this.props.imgName && require(`./images/${this.props.imgName}`)} alt="Placeholder" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <p className="title is-4">{this.props.name}</p>
                        <p className="subtitle is-6 is-italic">{this.props.title}</p>
                        <div className="content">
                            {this.state.readMore ? this.props.children : voca.truncate(this.props.bioGist, 100)}
                            <a className="" onClick={this.toggleBio}><br/>{this.state.readMore ? 'Read Less' : 'Read More'}</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Member
