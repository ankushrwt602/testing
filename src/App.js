import './App.css';
import LeftMenu from "./components/LeftMenu";
import MainComponent from "./components/MainComponent";
import RightMenu from "./components/RightMenu";
function App() {
  return (
    <div className="App">
      <LeftMenu/>
      <MainComponent/>
      <RightMenu/>
      
      <div className="background">
        
      </div>

    </div>
  );
}

export default App;
