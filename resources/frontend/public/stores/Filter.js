import AppDispatcher from 'napishem-frontend-utils/dispatcher/AppDispatcher';
import EventEmitter from 'events';
import _  from 'lodash';

var __filter = {categories: [], free: true, not_free: true};

function setFilterFree(data) {
    __filter.free = data;
}
function setFilterNotFree(data) {
    __filter.not_free = data;
}
function setFilterDate(data) {
    __filter.date = data;
}
function changeFilterCategory(id) {
    let active = __filter.categories;
    for(let v in active) {
        if(active[v] == id){
            active.splice(v, 1);
            return __filter.categories = active;
        }
    }
    active.push(id);
    __filter.categories = active;
}


var FilterStore = _.merge({}, EventEmitter.prototype, {

    getFilters: function() {
        return __filter;
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
        case 'SET_FILTER_FREE':
            setFilterFree(payload.data);
            break;
        case 'SET_FILTER_NOT_FREE':
            setFilterNotFree(payload.data);
            break;
        case 'SET_FILTER_DATE':
            setFilterDate(payload.data);
            break;
        case 'SET_FILTER_CATEGORY':
            changeFilterCategory(payload.data);
            break;
        default:
            return true;
    }

    FilterStore.emitChange();

    return true;
});

export default FilterStore;
