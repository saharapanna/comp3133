import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Greeter from './Greeter'
import LikeButton from './Likebutton'

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();