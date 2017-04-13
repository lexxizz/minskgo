import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import EventEmitter from 'events';
import _  from 'lodash';

var __events = [];
var __settings = {};

function resetEvents() {
    __events = [];
    __settings = {};
}

function setEvents(data) {
   // __events = _.merge(__events, data.events.data);
    __events = __events.concat(data.events.data);
    delete data.events.data;
    __settings = data.events;
}


var EventStore = _.merge({}, EventEmitter.prototype, {

    getEvents: function() {
        return {events: __events, __settings};
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
        case 'GET_EVENTS_RESET':
            resetEvents(payload.data);
            setEvents(payload.data);
            break;
        default:
            return true;
    }

    EventStore.emitChange();

    return true;
});

export default EventStore;
