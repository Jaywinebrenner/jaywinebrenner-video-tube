import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


function YoutubeEmbed ({ youTubeUrl }) {

const [theCode, setTheCode] = useState(null)

  useEffect(() => {
    function getCode(url){
    var ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

    if(url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
      handleGetCode(ID)

    }
    else {
      ID = url;
      handleGetCode(ID)
    }
      return handleGetCode(ID)
  }
  getCode(youTubeUrl)

  function handleGetCode (code) {
    setTheCode(code)
  }
  }, [])



return (
  
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${theCode}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)}

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;