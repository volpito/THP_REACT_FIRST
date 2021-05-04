import React from 'react';
import ReactDOM from 'react-dom';
import MixedContent from './components/MixedContent'

const App = () => (
   <div>
    <ul>
    <li>
        <MixedContent />
      </li>
      <li>
        <MixedContent />
      </li>
      <li>
        <MixedContent />
      </li>
      <li>
        <MixedContent />
      </li>
      <li>
        <MixedContent />
      </li>
    </ul>  
   </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
