import React from 'react';
import OtherScreen from './componets/OtherScreen/OtherScren'
import EditScreen from "./componets/EditScreen/EditScreen";
import StartScreen from "./componets/StartScreen/StartScreen";

import style from './App.module.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import EditScreenTest from "./componets/EditScreen/EditScreen";



const App=()=>{
  return (
      <BrowserRouter>
          <div className={style.workSpace}>
              <Switch>
                  <Route exact path='/' component={StartScreen}/>
                  <Route  path='/OtherScreen' component={OtherScreen} />
                  <Route  path='/EditScreen' component={EditScreen} />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
