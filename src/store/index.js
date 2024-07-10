import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    registrations: []
  },
  mutations: {
    setEvents(state, events) {
      state.events = events;
    },
    addRegistration(state, registration) {
      state.registrations.push(registration);
    }
  },
  actions: {
    fetchEvents({ commit }) {
      axios.get('https://668e8b63bf9912d4c92ebb16.mockapi.io/events')
        .then(response => {
          commit('setEvents', response.data);
        });
    },
    registerForEvent({ commit }, registration) {
      axios.post('https://668e8b63bf9912d4c92ebb16.mockapi.io/registration', registration)
        .then(response => {
          commit('addRegistration', response.data);
        });
    }
  },
  getters: {
    allEvents: state => state.events,
    allRegistrations: state => state.registrations
  }
});