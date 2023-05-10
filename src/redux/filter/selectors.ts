import { RootState } from '../store';

export const selectFilter = (state: RootState) => {
    console.log('state: ', state.filter)
    return state.filter
};
export const selectSort = (state: RootState) => state.filter.sort;
