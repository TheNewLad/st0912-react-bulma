import React from 'react';
import API_KEYS from '../api_keys';

const GoogleMap = () => {
    return (
        <iframe 
        className="GoogleMap"
src={`https://www.google.com/maps/embed/v1/search?key=${API_KEYS.google.maps_embed}&q=Studio+0912+Tresses+Mountclair,NJ&zoom=16`} frameborder="0"
title="Google Map"
width="100%"
height="100%"
allowfullscreen />
    );
};

export default GoogleMap