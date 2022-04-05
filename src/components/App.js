import React, {useState}  from "react";
import SideNavBar from './SideNavBar';
import Header from './Header';
import MainNavBar from './MainNavBar';
import MainBackground from './MainBackground';
import Footer from './Footer';

function App() {

  const [currentTab, setCurrentTab] = useState(0);

  const changeTab = (newTab) => {
      setCurrentTab(newTab);
  }

  return (
  <div className="App">
      <div className="wrapper">
        <SideNavBar/>
        <MainNavBar />
        <Header 
          currentTab={currentTab}
          changeTab={changeTab}
           />
        <MainBackground currentTab={currentTab}/>
      </div>
    </div>
  );
}

export default App;
