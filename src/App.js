import React, { Component } from 'react';

// Dependencies
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

import MainDoor from './resources/svg-components/MainDoor'
// i18n
// import T from 'i18n-react'
// import EN from './i18n/en.json'
// import KO from './i18n/ko.json'

// CSS
import './App.css';

//-----*-----*-----*-----*-----//

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className='FCC'>
          <CenterLine />
          <MainDoor w='596px' h='617px' ml='83px' />
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`

const CenterLine = styled.div`
  width: 1px;
  height: 100vh;
  position: absolute;
  left: calc(50vw - 0.5px);
  background-color: red;
  z-index: -1;
`

export default App;
