import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import EventEmitter from 'events';
import _  from 'lodash';

var __categories = {};

function setCategories(data) {
    __categories = data;
}


var CategoryStore = _.merge({}, EventEmitter.prototype, {

    getAll: function() {
        return __categories;
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
        case 'GET_CATEGORIES':
            setCategories(payload.data);
            break;
        default:
            return true;
    }

    CategoryStore.emitChange();

    return true;
});

export default CategoryStore;
