import React from 'react';

export const Logos = (props) => {
    return (
        <div className="columns is-multiline is-centered">
            {props.children}
        </div>
    );
}

export const Logo = (props) => {
    return (
        <div className="logo column" data-aos="fade-down">
            <a href={props.productLink} target="_blank">
                <img src={require(`./images/${props.logoName}`)} alt="" />
            </a>
        </div>
    );
}