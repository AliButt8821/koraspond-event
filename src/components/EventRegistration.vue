<template>
  <b-container>
    <div>
      <div class="mainapphead">
      <h2>Register For Event</h2>
    </div>
      <form class="mt-5" @submit.prevent="register">
        <div>
          <input type="text" v-model="name" required placeholder="User Name"/>
        </div>
        <div>
          <input type="email" v-model="email" required placeholder="Email" />
        </div>
        <div>
          <input type="tel" v-model="phone" required  placeholder="Phone Number" @keypress="onlyNumberKey"/>
        </div>
        <button class="formsubmitbtn" type="submit">Submit</button>
      </form>
    </div>
  </b-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: ''
      };
    },
    methods: {
      register() {
        const registration = {
          eventId: this.$route.params.id,
          name: this.name,
          email: this.email,
          phone: this.phone
        };
       
        this.$store.dispatch('registerForEvent', registration)
          .then(() => {
            this.$router.push('/confirmation');
          });
      },
      onlyNumberKey(event) {
      // Only allow number keys
      if (!event.key.match(/[0-9]/)) {
        event.preventDefault();
      }
    },
    }
    
  };
  </script>
  <style>
input{
  border: none;
  border-bottom: 2px solid black;
  line-height: 40px;
  margin-top: 15px !important;
}
.formsubmitbtn{
  background-color: #712c91;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
  }
  .formsubmitbtn:hover{
  background-color: #fcaf64;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  border-radius: 10px;
  }
</style>