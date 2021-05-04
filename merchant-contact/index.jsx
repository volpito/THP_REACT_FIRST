import React from 'react';
import ReactDOM from 'react-dom';
import clientsList from './components/Clients';


const App = () => (
  <div>
    <h1>Hello mon Loulou !</h1>
    <p>Voici la liste des clients</p>
    <clientsList />
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
