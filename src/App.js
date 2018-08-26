import React, { Component } from 'react';

// Dependencies
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

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
          <TextBox className='FCC'>
            <Part1>NOAH</Part1>
            <Part2>
              <p>NOTICE</p>
              <p>OF</p>
              <p>ANOTHER</p>
              <p>HOPE</p>
            </Part2>
            <Part3>
              <p>A STORY TELLER</p>
              <p>DESVELOP</p>
            </Part3>
          </TextBox>
        </Container>
      </div>
    );
  }
}

const Container = styled.div`
  width: 100vw;
  heigth: 100vh;
  top: 0;
  left: 0;
`

const TextBox = styled.div`
  min-width: 690px;
  height: 100vh;
  line-height: 72px;
  font-size: 64px;
  font-weight: bold;
  & p {
    width: 690px;
    flex-shrink: 0;
  }
  @media (max-width: 700px) {
    min-width: 515px;
    overflow: hidden;
    line-height: 57px;
    font-size: 48px;
    & p {
      width: 515px;
      flex-shrink: 0;
    }
  }
`

const Part1 = styled.p`
  padding-left: 270px;
  margin-bottom: 80px;
  @media (max-width: 700px) {
    padding-left: 201px;
    margin-bottom: 50px;
  }
`
const Part2 = styled.div`
  & p {
    margin-bottom: -9px;
    &:first-child {
      padding-left: 270px;
    }
    &:nth-child(2) {
      padding-left: 319px;
    }
    &:nth-child(3) {
      padding-left: 225px;
    }
    &:nth-child(4) {
      padding-left: 270px;
    }
  }
  margin-bottom: 80px;
  @media (max-width: 700px) {
    & p {
      margin-bottom: -8px;
      &:first-child {
        padding-left: 201px;
      }
      &:nth-child(2) {
        padding-left: 238px;
      }
      &:nth-child(3) {
        padding-left: 167px;
      }
      &:nth-child(4) {
        padding-left: 201px;
      }
    }
    margin-bottom: 50px;
  }
`
const Part3 = styled.div`
  & p {
    margin-bottom: -9px;
    &:first-child {
      padding-left: 187px;
    }
    &:nth-child(2) {
      padding-left: 86px;
    }
  }
  @media (max-width: 700px) {
    & p {
      margin-bottom: -8px;
      &:first-child {
        padding-left: 139px;
      }
      &:nth-child(2) {
        padding-left: 64px;
      }
    }
  }
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
