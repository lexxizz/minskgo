import asyncDispatch from 'napishem-frontend-utils/modules/AsyncDispatch';
import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import Request from 'napishem-frontend-utils/modules/Request';

var CategoryActions = {

    getAll() {
        asyncDispatch('GET_CATEGORIES', '/ajax/categories/all');
    }

};

export default CategoryActions;