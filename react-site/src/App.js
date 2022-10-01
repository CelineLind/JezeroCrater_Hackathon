import './App.css';
import Button from './Button';
import { useState } from 'react';

import Image from './Image';
import jezerocrater from "./assets/images/jezerocrater.jpeg"
import one from './assets/images/one.jpeg'
import two from './assets/images/two.jpeg'
import three from './assets/images/three.jpeg'
import four from './assets/images/four.jpeg'

function App() {

  const [ImageNum, setImagenum] = useState(0);
  const [URL, setURL] = useState(jezerocrater);
  const [alttext, setAlttext] = useState('image of jezero crater');
  const [Information, setInfo] = useState('');

  let updateImage0 = () => {
    setImagenum(0);
    setURL(jezerocrater)
  }
  let updateImage1 = () => {
    setImagenum(1);
    setURL(one)
  }
  let updateImage2 = () => {
    setImagenum(2);
    setURL(two)
  }
  let updateImage3 = () => {
    setImagenum(3);
    setURL(three)
  }
  let updateImage4 = () => {
    setImagenum(4);
    setURL(four)
  }

  let incrementImage = () => {
    if ((ImageNum + 1) < 5){
      setImagenum(ImageNum + 1);
      if ((ImageNum + 1) == 1){
        setURL(one)
      }
      else if ((ImageNum + 1) == 2){
        setURL(two)
      }
      else if ((ImageNum + 1) == 3){
        setURL(three)
      }
      else if ((ImageNum + 1) == 4){
        setURL(four)
      }
    } // when it reaches 4, that is the end
  }

  return (
    <div className="App">
      <div>
        <div className='Main'>
          <div className='current'>
            <h1>{ImageNum}</h1>
          </div>
          <div className='buttons'>
            <Button title={'0'} action={updateImage0} />
            <Button title={'1'} action={updateImage1} />
            <Button title={'2'} action={updateImage2} />
            <Button title={'3'} action={updateImage3} />
            <Button title={'4'} action={updateImage4} />
          </div>
          <div className='image'>
            <Image url={URL} alttext={alttext} action={incrementImage}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
