import React, { Component } from 'react';


export const Services = (props) => {
    return (
        <section className="accordions">
            <div className="is-divider is-divider--section-separator" data-content={props.subtitle} />
            {props.children}
        </section>
    );
}

export class Service extends Component {
    constructor(props) {
        super(props);

        this.state = { open: false }

        this.toggleDescription = this.toggleDescription.bind(this);
    }

    toggleDescription() {
        this.setState(prevState =>
            ({ open: !prevState.open })
        )
    }

    render() {
        let description;
        if (this.props.children) {
            description =
            <div className="accordion-body">
                <div className="accordion-content">
                    {this.props.children}
                </div>
            </div>;
        }

        return (
            <article className={this.state.open ? 'accordion is-active' : 'accordion'}>
                <div className="accordion-header toggle" onClick={this.toggleDescription}>
                    <div className="columns columns--accordion">
                        <div className="column column--service-title">{this.props.title}</div>
                        <div className="column column--service-price has-text-right">{this.props.price}</div>
                    </div>
                </div>
                {description}                
            </article>
        );
    };
}