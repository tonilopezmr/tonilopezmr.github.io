import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <div>
      <video style={{ display: 'block', width: '100%', height: 'auto' }} controls>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;