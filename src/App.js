//import logo from './logo.svg';
import './App.css';
import {Title, Subject} from './hello';
import logo from './img/mImg.png';

function App() {
  return (
    <div className = "text">
      <Title />
      <img className = "img" src={logo} alt="aa"/>
      <Subject />
    </div>
  );
}

export default App;
