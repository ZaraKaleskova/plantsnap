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
        <Post username="PlantEnthusiast" caption="hello" imageUrl="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/yucca-cane-plant-in-a-pot-on-a-white-background-royalty-free-image-1580856558.jpg"/>

        <Post username="PlantEnthusias132t" caption="hi" imageUrl="https://asset.bloomnation.com/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1605327789/vendor/449/catalog/product/2/0/20200411073705_file_5e921c61debb5_5e921cdb732b5.jpg"/>

        <Post />
    </div>
  );
}

export default App;
