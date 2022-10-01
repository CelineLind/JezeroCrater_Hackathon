import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { useState } from 'react';

import Image from './Image';
import image from "./assets/images/jezerocrater.jpeg"

function App() {
  // const [count, setCount] = useState(0);

  // let incrementCount = () => {
  //   setCount(count + 1);
  // }

  // let decrementCount = () => {
  //   if(count > 0){
  //     setCount(count - 1);
  //   }
  // }

  const [currentImage, setCurrentImage] = useState(0);

  let updateImage0 = () => {
    setCurrentImage(0);
  }
  let updateImage1 = () => {
    setCurrentImage(1);
  }
  let updateImage2 = () => {
    setCurrentImage(2);
  }
  let updateImage3 = () => {
    setCurrentImage(3);
  }
  let updateImage4 = () => {
    setCurrentImage(4);
  }

  return (
    <div className="App">
      <div>
        <div className='current image'>
          <h1>{currentImage}</h1>
        </div>
        <div className='buttons'>
          <Button title={'0'} action={updateImage0} />
          <Button title={'1'} action={updateImage1} />
          <Button title={'2'} action={updateImage2} />
          <Button title={'3'} action={updateImage3} />
          <Button title={'4'} action={updateImage4} />
        </div>
      </div>
    </div>
  );
}

export default App;
