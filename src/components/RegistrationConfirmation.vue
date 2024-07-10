<template>
    <div class="regconfmakecent">
      <div class="mainapphead">
      <h2>Registeration Confirmation</h2>
    </div>
    <div class="mainboxregdetail">
      <p style="color:white; font-size:30px; font-weight:600;text-align: center;">Thank you for registering!</p>
      <p style="color:white; font-size:20px; font-weight:600;">Event Details:</p>
      <div style="display: flex; flex-direction: row; gap: 20px;">
        <p style="color:white; font-size: 18px; font-weight: 500;">Name:</p>
        <p style="color:#fcaf64; font-size: 18px; font-weight: 500;">{{ registration.name }}</p>
      </div>
      <div style="display: flex; flex-direction: row; gap: 20px;">
        <p style="color:white; font-size: 18px; font-weight: 500;">Email:</p>
        <p style="color:#fcaf64; font-size: 18px; font-weight: 500;">{{ registration.email }}</p>
      </div>
      <div style="display: flex; flex-direction: row; gap: 20px;" class="mb-4">
      <p style="color:white; font-size: 18px; font-weight: 500;">Phone Numb:</p>
      <p style="color:#fcaf64; font-size: 18px; font-weight: 500;">{{ registration.phone }}</p>
      </div>
      <router-link class="backtoeventbtn" to="/">Back to Events</router-link>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    computed: {
      registration() {
        return this.$store.getters.allRegistrations.slice(-1)[0];
      }
    }
  };
  </script>
  
  <style>
.regconfmakecent {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.mainboxregdetail{
  margin-top: 30px;
    background-color: #712c91;
    width: 40%;
    padding: 30px;
    border-radius: 15px;
}
.backtoeventbtn{
  border: 1px solid black;
  background-color: black;
  color: white;
  padding: 12px 23px;
  border-radius: 10px;
  text-decoration: none;
}
</style>