import React, { Component } from 'react'
import Navbar from './Navbar'
import '../components/components.css/profile.css'
import ReactYouTubeExample from '../pages/youtube'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <>
      <Navbar/>
      <section class="grid-1">
        <div class="item-1">1</div>
        <div class="item-2"></div>
        <div class="item-3">
          <div class="item-4">
            <ReactYouTubeExample/>
          </div>
          <div class="item-5">5</div>
        </div>
      </section>
      
     
      </>
    )
  }
}

export default Profile
