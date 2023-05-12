// vorpesi ver redux-y miana reactin kam proektin apa kanchum enq react-redaxui gradaranic kanchum en 
// provaydery vori stor hatkuyany poxancum enq mer story aynuhetev patahatum mer glxavor comonety app-y
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux" //ays koponet kmiacni mer redux-y reacti naxadryalnerin
// ev chi entarki popoxutyan
import {store} from '../src/redux/store' //import enq arel sore-y  store.js-ic;

const container = document.getElementById("root")

const root =ReactDOM.createRoot(container);
// patatum enq mer daxadryalnery Provayderi mej ev poxancum enq story pahestanocy
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)
