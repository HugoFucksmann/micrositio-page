import React from 'react'
import bannerImg from './images/banner.png'
function BannerLayout(props) {
  return (
    <div style={{
        background:`url(${bannerImg}) no-repeat center`,
        backgroundSize: "cover",
        height: "48vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2.5em",
       
        textTransform: "uppercase"
    }} >
 {props.children}
    </div>
  );
}

export default BannerLayout;
