// import './App.css';
import '../assets/styles/styles.css';

import SideNavBar from './SideNavBar';
import Header from './Header';
import MainNavBar from './MainNavBar';
import MainBackground from './MainBackground';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <SideNavBar/>
        <MainNavBar />
        <Header />
        <MainBackground />
        <Footer>Footer</Footer>
      </div>
    </div>
  );
}

export default App;
