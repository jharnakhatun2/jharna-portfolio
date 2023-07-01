import React, { useEffect } from 'react'

const Try = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'twitter-wjs';
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      document.getElementById('twitter-wjs').remove();
    };
  }, []);

  return (
    <div className="trapdoor">
      <div className="top door"></div>
      <div className="bottom door"></div>
      <a
        href="https://twitter.com/twholman"
        className="twitter-follow-button"
        data-show-count="false"
        data-size="large"
        data-dnt="false"
      >
        Follow @twholman
      </a>
    </div>
  )
}

export default Try