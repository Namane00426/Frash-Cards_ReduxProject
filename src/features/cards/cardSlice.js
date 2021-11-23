import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cards",
  initialState: {
    cards:{},
  },
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        cardId: id,
        front: front,
        back: back,
      }
    }
  }
});

export const { addCard } = cardSlice.actions;
export const selectCards = state => state.cards.cards;
export default cardSlice.reducer
