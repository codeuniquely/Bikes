// app style
import 'style/app.scss';

import React from 'react';
import ReactDOM from 'react-dom';

// load the application
import App from 'code/index.js';

// render the application
ReactDOM.render( React.createElement(App, null), document.getElementById('app'));
