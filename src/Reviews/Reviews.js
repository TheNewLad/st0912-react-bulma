import React from 'react';
import ReactStars from 'react-stars';

const Reviews = () => {

  return (
    <div className="columns is-centered">
      <Review
        reviewer="Melissa H."
        reviewerImg="https://s3-media3.fl.yelpcdn.com/photo/i-aGdKKkshOkm9yn2rfPZQ/o.jpg"
        review="I tried this place today since my stylist couldn't fit me in. I looked it up on yelp and selected this one out of the other because I really liked a style..."
        reviewUrl="https://www.yelp.com/biz/studio-0912-tresses-montclair?hrid=xOkBh7L9z8tV8k-q26i8RA&adjust_creative=J8ZjumpRAFqatUlxtX2L-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=J8ZjumpRAFqatUlxtX2L-w"
        rating={5}
      />
      <Review
        reviewer="Tarajia S."
        review="Amazing , I started coming here in the beginning of the year, I won't go anywhere else! Shamila provides great service, she brought my hair back to life and..."
        reviewUrl="https://www.yelp.com/biz/studio-0912-tresses-montclair?hrid=TUftVjmoTGCUoFR71vyazg&adjust_creative=J8ZjumpRAFqatUlxtX2L-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=J8ZjumpRAFqatUlxtX2L-w"
        rating={5}
      />
      <Review
        reviewer="SuncuziShine D."
        reviewerImg="https://s3-media2.fl.yelpcdn.com/photo/3rln0WT1EjwAR0hUoN3GVw/o.jpg"
        review="Sha provides the ultimate salon experience !! With years of experience she's perfected her craft to give her clients the highest quality of service. From..."
        reviewUrl="https://www.yelp.com/biz/studio-0912-tresses-montclair?hrid=KaSVFg-cffn9PIZYpQiHfQ&adjust_creative=J8ZjumpRAFqatUlxtX2L-w&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=J8ZjumpRAFqatUlxtX2L-w"
        rating={5}
      />
    </div>
  );
}

const Review = (props) => {
  return (
    <div className="column">
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src={props.reviewerImg ? props.reviewerImg : require('./images/avatar.svg')}
                  alt="Avatar thumbnail"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.reviewer}</p>
            </div>
          </div>
          <div className="content">
            {props.review} <a href={props.reviewUrl} target="_blank">Read Full Review</a>
            <br />
            <ReactStars
              count={5}
              value={props.rating}
              edit={false}
              size={24}
              color2={'#ffd700'}
            /> Rated: {props.rating}/5
            <br />
            <time dateTime="2016-1-1">{props.time}</time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews