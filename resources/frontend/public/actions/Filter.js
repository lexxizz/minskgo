import asyncDispatch from 'napishem-frontend-utils/modules/AsyncDispatch';
import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import Request from 'napishem-frontend-utils/modules/Request';

var FilterActions = {

    setFilterFree(data) {
        AppDispatcher.dispatch({
            actionType: 'SET_FILTER_FREE',
            data: data
        });
    },

    setFilterNotFree(data) {
        AppDispatcher.dispatch({
            actionType: 'SET_FILTER_NOT_FREE',
            data: data
        });
    },

    setFilterDate(data) {
        AppDispatcher.dispatch({
            actionType: 'SET_FILTER_DATE',
            data: data
        });
    },

    setFilterCategory(id) {
        AppDispatcher.dispatch({
            actionType: 'SET_FILTER_CATEGORY',
            data: id
        });
    }
    
};

export default FilterActions;