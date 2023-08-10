"use client";

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "@/types";

const initialState: InitialState = {
  isSearchModalOpen: false,
  isDrawerOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSearchModal: (state) => {
      state.isSearchModalOpen = true;
      console.log("open search");
    },
    closeSearchModal: (state) => {
      state.isSearchModalOpen = false;
      console.log("close search");
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true;
      console.log("open menu");
    },
    closeDrawer: (state) => {
      state.isDrawerOpen = false;
      console.log("close menu");
    },
    // number is the type of payload
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  // extraReducers: (builder) => {
  //   builder
  //     // GET EVENT DATA
  //     .addCase(getEventData.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(getEventData.fulfilled, (state, { payload }) => {
  //       state.isLoading = false;
  //       state.eventInfo = payload.event_info;
  //       state.zones = payload.event_info.hall.zones_arrangement;
  //       state.eventPricings = payload.pricings;
  //     })
  //     .addCase(getEventData.rejected, (state) => {
  //       state.isLoading = false;
  //     })

  // },
});

export const { openSearchModal, closeSearchModal, openDrawer, closeDrawer } = modalSlice.actions;
export default modalSlice.reducer;
