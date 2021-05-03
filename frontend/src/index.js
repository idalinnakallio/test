import React from 'react'
import ReactDOM from 'react-dom'
import './index.sass'
import BookingApp from './BookingApp'
import AddToHomeScreen from '@ideasio/add-to-homescreen-react';

ReactDOM.render(
  <React.StrictMode>
    <AddToHomeScreen/>
    <BookingApp />
  </React.StrictMode>,
  document.getElementById('root')
)