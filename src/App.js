import React, { useState } from "react";
import './App.css'
import TodoList from './Components/TodoList'
// import storage from 'redux-persist/lib/storage'
// import { store, persistor } from "redux";
// import { Provider } from "react-redux";
// import {PersistGtae} from "redux-persist/integration/react"




const App = () => {
  


  return (

  // <Provider store={store}>
  //   <PersistGtae loading={null} persistor={persistor}>
  //   <router/>
  //   </PersistGtae>
  // </Provider>

  <div>
    <TodoList />
  </div>

  );
}

export default App;







