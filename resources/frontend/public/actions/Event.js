import asyncDispatch from 'napishem-frontend-utils/modules/AsyncDispatch';
import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import Request from 'napishem-frontend-utils/modules/Request';

var EventActions = {

    getEvents(date, categories, free, not_free) {
        //asyncDispatch('GET_EVENTS', '/ajax/events');
        var u = '/ajax/events';
        var data = new FormData();
        if(date) {
            data.append('date', date);
        }
        if(categories) {
            data.append('categories', JSON.stringify(categories));
        }
        
        if(free) {
            data.append('free', 1);
        }
        if(not_free) {
            data.append('not_free', 1);
        }

        var r = new Request(u, 'POST');

        r.send((response) => {
            AppDispatcher.dispatch({
                actionType: 'GET_EVENTS',
                data: response
            });
        }, data);
    }

};

export default EventActions;