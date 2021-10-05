import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent';
import ClassComponent from './Components/ClassComponent';
import HomeComponent from './Components/BaiTapComponent/HomeComponent';
import DataBiding from './Components/DataBinding/DataBiding';
import StyleComponent from './StyleComponent/StyleComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import ChangeFontSize from './StateDemo/ChangeFontSize';
import BaiTapChonXe from './BaiTapChonXe/BaiTapChonXe';
import RenderWithArray from './RenderWithArray/RenderWithArray';
import HomePage from './Props/HomePage';
import Homecomponents from './BaiTapVeNha/Homecomponents';
// import StyleComponent from './StyleComponent/StyleComponent';
// JSX 
function App() {
  return (
   <div className="App">
     {/* <h1>Hello React</h1>
     <FunctionComponent/>
     <ClassComponent/> */}
     {/* <HomeComponent/> */}
     {/* <DataBiding/>  */}
     {/* <StyleComponent/> */}
     {/* <p className="text">  App Component</p> */}
     {/* <HandleEvent/> */}
     {/* <StateDemo/> */}
     {/* <ChangeFontSize/> */}
     {/* <BaiTapChonXe/>  */}
     {/* <RenderWithArray/> */}
     {/* <HomePage/>  */}
     <Homecomponents/>
     

   </div>

  );
}

export default App;
