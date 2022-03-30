// import './App.css';
import '../assets/styles/styles.css';

import SideNavBar from './SideNavBar';
import Header from './Header';
import MainNavBar from './MainNavBar';
import MainContent from './MainContent';
import ActivityFeed from './ActivityFeed';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <SideNavBar>SideNavBar</SideNavBar>
        <Header>Header</Header>
        <MainNavBar>MainNavBar</MainNavBar>
        <MainContent>MainContent</MainContent>
        <ActivityFeed>ActivityFeed</ActivityFeed>
        <Footer>Footer</Footer>
      </div>
    </div>
  );
}

export default App;
