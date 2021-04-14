import './App.css';
import Post from './Post';
import logo from './logo.png';
function App() {
  return (
    <div className="App">

     <div className="appHeader">
      <img 
        className="appHeaderImage"
        alt="header image"
        src={logo}
        />
     </div>
        <h1>Hey there </h1>
        <Post />
    </div>
  );
}

export default App;
