<template>
    <div>
      <div class="mainapphead">
      <h2>My Registerations</h2>
    </div>
    <b-container>
      <ul>
        <li v-for="registration in registrations" :key="registration.id">
          <h3>Event: {{ getEventDetails(registration.eventId).name }}</h3>
          <p>Date: {{ getEventDetails(registration.eventId).date }}</p>
          <p>Name: {{ registration.name }}</p>
          <p>Email: {{ registration.email }}</p>
          <p>Phone: {{ registration.phone }}</p>
        </li>
      </ul>
    </b-container>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
    return {
      registrations: [],
      events: []
    };
  },
    async created() {
    try {
      const registrationsResponse = await axios.get('https://668e8b63bf9912d4c92ebb16.mockapi.io/registration');
      this.registrations = registrationsResponse.data;

      const eventsResponse = await axios.get('https://668e8b63bf9912d4c92ebb16.mockapi.io/events');
      this.events = eventsResponse.data;
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    getEventDetails(eventId) {
      const event = this.events.find(event => event.id === eventId);
      return event ? { name: event.name, date: event.date } : { name: 'Unknown Event', date: 'Unknown Date' };
    }
  }
  };
  </script>
  