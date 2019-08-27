import React, { Component } from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class Twitter extends Component {
   
    render() {

      
        
        
        return (

        <div className="centerContent">
        <div className="selfCenter standardWidth">
        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="saurabhnemade"
        options={{height: 400}}
        />
        </div>
        </div>
       
        );
    }
     
    
     
}

export default Twitter
