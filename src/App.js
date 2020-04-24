import React from 'react'
import dataService from './services/data'

const App = () => {

  const buttonStyle1 = {
    'background-color': 'white',
    'font-size': '16px'
  }



  const handleLedOn = () => {
    const status = {
      "led_status": "on"
    }
    dataService.send(status)
    console.log('ledi päälle')
  }

  const handleLedOff = () => {
    const status = {
      "led_status": "off"
    }
    dataService.send(status)
    console.log('ledi pois päältä')
  }

  return (
    <div className="App">
      <header className="App-header">
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </header>
      <button style={buttonStyle1} onClick={() => handleLedOn()}>led on</button>
      <button style={buttonStyle1} onClick={() => handleLedOff()}>led off</button>
    </div>
  )
}

export default App;
