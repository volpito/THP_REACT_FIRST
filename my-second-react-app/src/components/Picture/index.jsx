import React from 'react';
import catImage1 from '../../assets/1.jpeg';
import catImage2 from '../../assets/2.jpeg';
import catImage3 from '../../assets/3.jpeg';
import catImage4 from '../../assets/4.jpeg';
import catImage5 from '../../assets/5.jpeg';

const Picture = (props) => (
  <div className="Picture">
    <img src={`catImage${props.nbr}`} alt="image de chat" />

  </div>
);

export default Picture;