import React from 'react'
import MainContent from './MainContent';
import ActivityFeed from './ActivityFeed';

function MainBackground(props) {
  return (
    <section className="main-bg">
        <MainContent currentTab={props.currentTab}/>
        <ActivityFeed />
    </section>
  )
}

export default MainBackground;