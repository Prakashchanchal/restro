// In App.js in a new project

import * as React from 'react';
import AppRouter from './src/navigation/Navigation'
import StoreRoot from './src/store/RootStore'
import {Provider} from 'mobx-react'
import RootStore from './src/store/RootStore';
const App=()=>{
  return(
    <Provider {...RootStore}>
      <AppRouter/>
      </Provider>
  )
}
export default App;