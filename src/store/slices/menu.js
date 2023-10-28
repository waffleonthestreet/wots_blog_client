import {createSlice} from '@reduxjs/toolkit';

// initial state
const initialState = {
  selectedItem: [{
    id: 'customer-list',
    title: "customer-list",
    type: 'item',
    url: '/articles',
    breadcrumbs: false
  }],
  drawerOpen: false
};

// ==============================|| SLICE - MENU ||============================== //

const menu = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    activeItem(state, action) {
      state.selectedItem = action.payload;
    },

    openDrawer(state, action) {
      state.drawerOpen = action.payload;
    }
  }
});

export default menu.reducer;

export const {activeItem, openDrawer} = menu.actions;
