import React, { Component } from 'react'
import YouTube from 'react-youtube'


class ReactYouTubeExample extends Component {
    _onReady(event) {
        event.target.pauseVideo();
    }
    render() {
        const opts = {
          height: '300',
          width: '490',
          playerVars: { 
            autoplay: 1
          }

        };
        
        
        return (
          <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={this._onReady}
          />
        );
    }
     
    
     
}

export default ReactYouTubeExample