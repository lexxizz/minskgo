import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import EventEmitter from 'events';
import _  from 'lodash';

var __events = {};

function setEvents(data) {
    __events = data;
}


var EventStore = _.merge({}, EventEmitter.prototype, {

    getEvents: function() {
        return __events;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function(payload) {

    switch(payload.actionType) {
        case 'GET_EVENTS':
            setEvents(payload.data);
            break;
        default:
            return true;
    }

    EventStore.emitChange();

    return true;
});

export default EventStore;
