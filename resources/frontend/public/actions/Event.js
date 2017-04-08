import asyncDispatch from 'napishem-frontend-utils/modules/AsyncDispatch';
import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import Request from 'napishem-frontend-utils/modules/Request';

var EventActions = {

    getEvents() {
        asyncDispatch('GET_EVENTS', '/ajax/events');
    }

};

export default EventActions;