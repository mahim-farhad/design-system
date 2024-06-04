'use client'

import {
  Provider
} from 'react-redux'

import {
  PersistGate
} from "redux-persist/integration/react"

import {
  store,
  persistor
} from '@contexts/store/store'

function CartProvider({
  children
}) {
  return (
    <Provider
      store={store}
    >
      <PersistGate
        persistor={persistor}
        loading={null}
      >
        {children}
      </PersistGate>
    </Provider>
  )
}

export default CartProvider
