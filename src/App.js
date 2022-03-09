import React from 'react'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { MainRouter } from './routers'

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <MainRouter />
    </PersistGate>
  </Provider>
)

export default App

