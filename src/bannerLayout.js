import React from 'react'
import PropTypes from 'prop-types';
import bannerImg from './images/banner.png'
import { colores } from './theme';
function BannerLayout(props) {
  const first = props.txt.split(' ')[0]
  const rest = props.txt.substr(props.txt.indexOf(" ") + 1);
 
  return (
    <div {...props} style={{
        background:`url(${bannerImg}) no-repeat center`,
        backgroundSize: "cover",
        height: "48vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2.5em",
       
        textTransform: "uppercase"
    }} >
      <span style={{color: colores.btnVolver, marginRight: 10}}  >{first} </span> {rest}
    </div>
  );
}


BannerLayout.defaultProps = {
  txt: ""
}

BannerLayout.propTypes = {
  txt: PropTypes.string
};

export default BannerLayout;
