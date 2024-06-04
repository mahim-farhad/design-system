import {
  createSlice
} from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.cartItems.find((item) =>
        item.id === action.payload.id &&
        item.size === action.payload.size &&
        item.fit === action.payload.fit
      )

      if (itemExists) {
        itemExists.quantity += action.payload.quantity

        itemExists.price = itemExists.unitPrice * itemExists.quantity
      } else {
        state.cartItems.push({
          ...action.payload,
          price: action.payload.unitPrice * action.payload.quantity
        })
      }
    },
    updateCart: (state, action) => {
      state.cartItems = state.cartItems.map((item) => {
        if (
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.fit === action.payload.fit
        ) {
          if (action.payload.key === 'quantity') {
            item.price = item.unitPrice * action.payload.quantity
            item.size = action.payload.size
            item.fit = action.payload.fit
          }

          return {
            ...item,
            [action.payload.key]: action.payload.quantity
          }
        }

        return item
      })
    },
    removeFromCart: (state, action) => {
      const index = state.cartItems.findIndex((item) =>
        item.id === action.payload.id &&
        item.size === action.payload.size &&
        item.fit === action.payload.fit
      )

      state.cartItems = state.cartItems.filter((_, i) => i !== index)
    },
    resetCart: (state) => {
      state.cartItems = []
    },
  },
})

export const cartReducer = cartSlice.reducer

export const {
  addToCart,
  updateCart,
  removeFromCart,
  resetCart
} = cartSlice.actions
