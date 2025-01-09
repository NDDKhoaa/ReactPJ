import React from "react";
import MemberInfo from './components/MemberInfo';
import Welcome from './components/Welcome';
import Header from './components/Header';
import LeftBar from './components/LeftBar';
import Content from './components/Content';
import RightBar from './components/RightBar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flex: '1' }}>
        <LeftBar />
        <Content>
          <Welcome 
            username="nddkhoa" 
            email="nddkhoaa2408@gmail.com" 
            membername={<MemberInfo membername="Khoa" />} 
          />
        </Content>
        <RightBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;