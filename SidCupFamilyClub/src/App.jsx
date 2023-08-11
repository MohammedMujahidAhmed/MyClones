import { Navbar } from "./Components/Navbar";
import { MainPage } from "./Pages/MainPage";
// import video from './Videos.video1.mp4'

const App = () => {
  return (
    <div className="relative">
      <Navbar/>
      <video src="https://sidcupfamilygolf.com/wp-content/uploads/2023/02/hero.mp4" loop autoPlay muted 
        className="w-[100%] h-[100] object-cover fixed -z-10"
      ></video>
      <MainPage/>
    </div>
  );
};

export default App;
