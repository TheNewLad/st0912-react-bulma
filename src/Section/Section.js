import React from 'react';

const Section = (props) => {
  return (
    <section className="section section--custom" id={props.sectionId}>
      <h1 className="title title--custom has-text-centered-mobile is-cursive is-secondary">{props.sectionTitle}</h1>
      <h2 className="subtitle subtitle--custom has-text-centered-mobile is-secondary">{props.sectionSubtitle}</h2>
      <div className="container">
        {props.children}
      </div>
    </section>
  );
}

export default Section;