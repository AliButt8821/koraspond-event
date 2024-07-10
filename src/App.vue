<template>

  <div id="app">
    <b-Container>
      <header class="mainheaderalign">
        <div>
          <h1 class="makemainheadcolor">Event Registration</h1>
        </div>
        <nav class="addspacebetnavitem">
          <router-link class="navitemname" to="/">Events</router-link>
          <router-link class="navitemname" to="/my-registrations">My Registrations</router-link>
        </nav>
      </header>
    </b-Container>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

h2 {
  color: #2c3e50;
}

form {
  max-width: 400px;
  margin: auto;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f9f9f9;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
}

.mainapphead {
  text-align: center;
  margin-top: 20px;
}
.makemainheadcolor{
  color:#fcaf64;
  margin-top:5px;
}
.mainheaderalign {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.navitemname{
  text-decoration: none;
  color: #712C91;
  font-size: 20px;
  font-weight: 600;
}
.navitemname:hover{
  text-decoration: none;
  color: #FCAF64;
  font-size: 20px;
  font-weight: 600;
}
.addspacebetnavitem{
display: flex;
gap: 20px;
align-items: center;
}
@media only screen and (max-width: 480px) {
  .makemainheadcolor{
  font-size:16px;
}
.navitemname, .navitemname:active{
  text-decoration: none;
  color: #712C91;
  font-size: 14px;
  font-weight: 400;
}
.navitemname:hover{
  text-decoration: none;
  color: #FCAF64;
  font-size: 14px;
  font-weight: 400;
}
ul{padding-left: 0px !important;}
}
</style>
