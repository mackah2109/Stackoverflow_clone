import React from 'react';
import '../../App.css'
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar';

const Questions = () => {
  return (
    <div className='home-container-1'>
      <LeftSidebar/>
      <HomeMainbar/>
      <div className='home-container-2'>
        <RightSidebar/>
      </div>
      
    </div>
  )
}

export default Questions
