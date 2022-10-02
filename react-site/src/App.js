import './App.css';
import Button from './Button';
import React, { useState } from 'react';
import { Howl } from "howler";

import Image from './Image';
import jezerocrater from "./assets/images/crater.jpg"
import seitah from './assets/images/seitah.jpg'
import delta from './assets/images/delta.jpg'
import maaz from './assets/images/maaz.jpg'
import four from './assets/images/crater.jpg'

import loadingMusic from './assets/music/loading.mp3'
import craterMuisc from './assets/music/crater.mp3'
import riverMusic from './assets/music/river.mp3'
import lavaMusic from './assets/music/lava.mp3'

// sound related
const loading = new Howl({
  src: [loadingMusic],
  html5: true,
  loop: true,
});
const crater = new Howl({
  src: [craterMuisc],
  html5: true,
  loop: true,
});
const river = new Howl({
  src: [riverMusic],
  html5: true,
  loop: true,
});
const lava = new Howl({
  src: [lavaMusic],
  html5: true,
  loop: true,
});

let stopAll = () => {
  loading.stop();
  crater.stop();
  river.stop();
  lava.stop();
}

let muteToggle = (props) => {
  loading.mute(props);
  crater.mute(props);
  river.mute(props);
  lava.mute(props);
}

function App() {

  // image related
  const [ImageNum, setImagenum] = useState(0);
  const [URL, setURL] = useState(jezerocrater);
  const [alttext, setAlttext] = useState('image of jezero crater');
  const [Information, setInfo] = useState(
    <div className='Jezero'>
        <h1>Jezero Crater</h1>
        <h2>Welcome to Jezero Crater, home of the Perseverance rover.</h2>
        <p>
          This crater contains all sorts of cool rocks. Some rocks formed underwater, while others formed from volcanic activity.
        </p>
      </div>
  );
  const [muted, setMuted] = useState(false);
  const [soundStatus, setSoundStatus] = useState('Sound is On')

  const loadingCaption = '[Intergalatic music]';
  const seitahCaption = '[Mysterious synth with steady beat]';
  const deltaCaption = '[Peaceful but mysterious synth and violin]';
  const maazCaption = '[Electronic synth tune]';
  const [currentCaption, setCurrentCaption] = useState('');
  const [caption, setCaption] = useState('')
  const [captionStatus, setCaptionStatus] = useState('Captions are off');

  let updateCaption = (props) => {
    if (captionStatus === 'Captions are on'){
      setCaption(props);
    }
    setCurrentCaption(props);
  }

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
    stopAll();
    loading.play();
    updateCaption(loadingCaption);
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
          When an impact created Jezero Crater, <br/> scientists believe magma was waiting underneath the surface. <br/>  
          The impact exposed the magma, and it spread across the crater.
        </p>
      </div>
    )
    stopAll();
    crater.play();
    updateCaption(seitahCaption);
  }
  let updateImage2 = () => {
    setImagenum(2);
    setURL(delta)
    setAlttext('image of jezero crater with the river delta highlighted')
    setInfo(
      <div className='Delta'>
        <h1>River Delta</h1>
        <h2>This is the River Delta. <br/> It was formed by water.</h2>
        <p>
          The water carried small pieces of rock from up the river and brought it to Jezero Crater.
          This created the fan shape in the rock.
          The crater soon filled with water and became a lake.
        </p>
      </div>
    )
    stopAll();
    river.play();
    updateCaption(deltaCaption);
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
    stopAll();
    lava.play();
    updateCaption(maazCaption);
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
          NASA have sent Perseverance to take photos of and analyse the rocks. <br/>
          They have also asked Perseverance to collect some rocks. <br/>
          Scientists hope these rocks will be brought back to Earth in the 2030s.
        </p>
      </div>
    )
    stopAll();
    loading.play();
    updateCaption(loadingCaption);
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

  let soundOnOff = () => {
    if (muted){
      setMuted(false);
      setSoundStatus('Sound is On')
      muteToggle(false)
    }
    else{
      setMuted(true)
      setSoundStatus('Sound is Off')
      muteToggle(true)
    }
  }

  let captionsToggle = () => {
    if (captionStatus === 'Captions are on'){
      setCaptionStatus('Captions are off');
      setCaption('')
    }
    else{
      setCaptionStatus('Captions are on')
      setCaption(currentCaption)
    }
  }

  return (
    <div className="App">
      <div>
        <div className='Main'>
          <div className='buttons'>
            <div className='nav-buttons'>
              <Button title={'Jezero Crater'} action={updateImage0} />
              <Button title={'Seitah'} action={updateImage1} />
              <Button title={'Delta'} action={updateImage2} />
              <Button title={'Maaz'} action={updateImage3} />
              <Button title={'Perseverance'} action={updateImage4} />
            </div>
            <div className='toggle-buttons'>
              <Button title={soundStatus} action={soundOnOff} />
              <Button title={captionStatus} action={captionsToggle} />
            </div>
          </div>
          <div className='image'>
            <Image url={URL} alttext={alttext} action={incrementImage} information={Information}/>
            <p className='caption'>{caption}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
