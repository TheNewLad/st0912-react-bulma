import React from 'react';

const Section = (props) => {
  return (
    <section className="section" id={props.sectionId}>
      <h1 className="title has-text-centered-mobile">{props.sectionTitle}</h1>
      <div className="container">
        {props.children}
      </div>
    </section>
  );
}

export default Section;