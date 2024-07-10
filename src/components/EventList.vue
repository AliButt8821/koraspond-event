<template>
  <div>
    <div class="mainapphead">
      <h2>Event List</h2>
    </div>
    <b-container>
      <b-row class="mdrow">
        <b-col md="3" v-for="event in events" :key="event.id">
          <div class="listiteml">
            <h3>{{ event.name }}</h3>
            <div class="maindatadiv mt-4">
              <div class="datediv">
                <h5>Date:</h5>
                <p class="datatext">{{ event.date }}</p>
              </div>
              <div class="datediv">
                <h5>Location:</h5>
                <p class="datatext mb-4">{{ event.location }}</p>
              </div>
            </div>
            <router-link class="registerbtn" :to="'/register/' + event.id">Register</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  computed: {
    events() {
      return this.$store.getters.allEvents;
    }
  },
  created() {
    this.$store.dispatch('fetchEvents');
  }
};
</script>
<style>
.datediv {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.registerbtn {
  border: 2px solid black;
  padding: 10px 20px;
  border-radius: 10px;
  color: black;
  text-decoration: none;
  margin-top: 20px !important;
}

.registerbtn:hover {
  border: 2px solid #712c91;
  background-color: #712c91;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
}

.listiteml {
  padding: 25px !important;
  background-color: rgb(230, 229, 229);
  border-radius: 10px;
  margin-top: 20px
}

.datatext {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px
}

.mdrow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>