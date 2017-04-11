import asyncDispatch from 'napishem-frontend-utils/modules/AsyncDispatch';
import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import Request from 'napishem-frontend-utils/modules/Request';

var EventActions = {

    getEvents(filter) {
        var u = '/ajax/events';
        var data = new FormData();
        if(filter) {
            if(filter.date) {
                data.append('date', filter.date);
            }
            if(filter.categories) {
                data.append('categories', JSON.stringify(filter.categories));
            }

            if(filter.free) {
                data.append('free', 1);
            }
            if(filter.not_free) {
                data.append('not_free', 1);
            }
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