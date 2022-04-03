import React from 'react'
import MainContent from './MainContent';
import ActivityFeed from './ActivityFeed';

function MainBackground() {
  return (
    <section className="main-bg">
        <MainContent />
        <ActivityFeed />
    </section>
  )
}

export default MainBackground;