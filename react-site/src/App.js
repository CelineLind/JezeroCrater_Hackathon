import './App.css';
import Button from './Button';
import { useState } from 'react';

import Image from './Image';
import jezerocrater from "./assets/images/crater.jpg"
import seitah from './assets/images/seitah.jpg'
import delta from './assets/images/delta.jpg'
import maaz from './assets/images/maaz.jpg'
import four from './assets/images/crater.jpg'

function App() {

  const [ImageNum, setImagenum] = useState(0);
  const [URL, setURL] = useState(jezerocrater);
  const [alttext, setAlttext] = useState('image of jezero crater');
  const [Information, setInfo] = useState(<></>);

  let updateImage0 = () => {
    setImagenum(0);
    setURL(jezerocrater)
    setAlttext('image of jezero crater')
    setInfo(
      <div className='Jezero'>
        <h1>Jezero Crater</h1>
        <h2>Welcome to Jezero Crater, home of the Perseverance rover.</h2>
        <p>
          This crater contains all sorts of cool rocks. Some rocks formed underwater, while others formed from volcanic activity.
        </p>
      </div>
    )
  }
  let updateImage1 = () => {
    setImagenum(1);
    setURL(seitah)
    setAlttext('image of jezero crater with low-lying seitah unit highlighted')
    setInfo(
      <div className='Seitah'>
        <h1>Seitah</h1>
        <h2>This is the Seitah unit. It is the oldest rock in Jezero Crater.</h2>
        <p>
          When an impact created Jezero Crater, scientists believe magma was waiting underneath the surface. 
          The impact exposed the magma, and it spread across the crater.
        </p>
      </div>
    )
  }
  let updateImage2 = () => {
    setImagenum(2);
    setURL(delta)
    setAlttext('image of jezero crater with the river delta highlighted')
    setInfo(
      <div className='Delta'>
        <h1>River Delta</h1>
        <h2>This is the River Delta. It was formed by water.</h2>
        <p>
          The water carried small pieces of rock from up the river and brought it to Jezero Crater. 
          The crater soon filled with water and became a lake.
        </p>
      </div>
    )
  }
  let updateImage3 = () => {
    setImagenum(3);
    setURL(maaz)
    setAlttext('image of jezero crater with maaz unit highlighted')
    setInfo(
      <div className='Maaz'>
        <h1>Maaz</h1>
        <h2>This is the Maaz unit. It formed from lava.</h2>
        <p>
          Scientists are still learning about these rocks. These rocks contain a green mineral called 'Olivine' which forms from lava cooling.
        </p>
      </div>
    )
  }
  let updateImage4 = () => {
    setImagenum(4);
    setURL(four)
    setAlttext('image of jezero crater')
    setInfo(
      <div className='Perseverance'>
        <h1>Perseverance</h1>
        <h2>The Perseverance rover is currently on Mars exploring this crater.</h2>
        <p>
          NASA have sent Perseverance to take photos of and analyse the rocks. 
          They have also asked Perseverance to collect some rocks. Scientists hope these rocks will be brought back to Earth in the 2030s.
        </p>
      </div>
    )
  }

  let incrementImage = () => {
    if ((ImageNum + 1) < 5){
      if ((ImageNum + 1) === 1){
        updateImage1()
      }
      else if ((ImageNum + 1) === 2){
        updateImage2()
      }
      else if ((ImageNum + 1) === 3){
        updateImage3()
      }
      else if ((ImageNum + 1) === 4){
        updateImage4()
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
            <Image url={URL} alttext={alttext} action={incrementImage} information={Information}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
