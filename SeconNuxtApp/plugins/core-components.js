import Vue from 'vue'


import PostList from "~/components/Posts/PostList.vue";
import AppControlInput from "~/components/UI/AppControlInput.vue";
import AppButton from "~/components/UI/AppButton.vue";


Vue.component('AppButton', AppButton);
Vue.component('AppControlInput', AppControlInput);
Vue.component('PostList', PostList);
