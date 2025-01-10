// import React from "react";
// import MemberInfo from './components/MemberInfo';
// import Welcome from './components/Welcome';
// import Header from './components/Header';
// import LeftBar from './components/LeftBar';
// import Content from './components/Content';
// import RightBar from './components/RightBar';
// import Footer from './components/Footer';
// import './App.css';

// function App() {
//   return (
//     <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Header></Header>
//       <div style={{ display: 'flex', flex: '1' }}>
//         <LeftBar></LeftBar>
//         <Content>
//           <Welcome 
//             username="nddkhoa" 
//             email="nddkhoaa2408@gmail.com" 
//             membername={<MemberInfo membername="Khoa" />} 
//           />
//         </Content>
//         <RightBar></RightBar>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import MemberAccount from './components/MemberAccount';
import './App.css';

function App() {
  return (
    <div className="App">
      <MemberAccount />
    </div>
  );
}

export default App;