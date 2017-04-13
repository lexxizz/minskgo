import asyncDispatch from 'napishem-frontend-utils/modules/AsyncDispatch';
import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import Request from 'napishem-frontend-utils/modules/Request';

var EventActions = {

    getEvents(filter, page, reset) {
        var action = 'GET_EVENTS';
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
                data.append('free', filter.free);
            }

            if(filter.not_free) {
                data.append('not_free', filter.not_free);
            }
            
            page++;
            
            data.append('page', page);
        }
        
        if(reset) {
            action = 'GET_EVENTS_RESET';
        }

        var r = new Request(u, 'POST');

        r.send((response) => {
            AppDispatcher.dispatch({
                actionType: action,
                data: response
            });
        }, data);
    },
    
    resetEvents() {
        AppDispatcher.dispatch({
            actionType: 'RESET_EVENTS',
            data: data
        });
    }

};

export default EventActions;