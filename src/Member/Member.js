import React, { Component } from 'react';
import voca from 'voca';

class Member extends Component {
    constructor(props) {
        super(props);
        this.state = { readMore: false };

        this.toggleBio = this.toggleBio.bind(this);
    }

    toggleBio() {
        this.setState(prevState =>
            ({ readMore: !prevState.readMore })
        )
    }

    render() {
        return (
            <div className="column" data-aos="fade-up">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-3by4">
                            <img src={this.props.imgName && require(`../images/members/${this.props.imgName}`)} alt="Placeholder" />
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
