import { RootState } from '../../store';
import { PartialProduct } from './types';
import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  products: PartialProduct[]
}

const initialState:State = {
  products: [],
};

const fetchProductsCaseReducer: CaseReducer<State, PayloadAction<PartialProduct[]>> = (state, action) => {
  state.products = action.payload
}

export const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProducts: fetchProductsCaseReducer
  }
});

export const {
  fetchProducts
} = slice.actions;

export const selectProducts = (state:RootState) => {
  return state[slice.name].products;
};

export default slice.reducer;
