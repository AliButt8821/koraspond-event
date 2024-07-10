import Vue from 'vue';
import VueRouter from 'vue-router';
import EventList from '../../src/components/EventList.vue';
import EventRegistration from "../../src/components/EventRegistration.vue";
import MyRegistrations from "../../src/components/MyRegistrations.vue";
import RegistrationConfirmation from "../../src/components/RegistrationConfirmation.vue"  

Vue.use(VueRouter);

const routes = [
  { path: '/', component: EventList },
  { path: '/register/:id', component: EventRegistration },
  { path: '/confirmation', component: RegistrationConfirmation },
  { path: '/my-registrations', component: MyRegistrations }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
