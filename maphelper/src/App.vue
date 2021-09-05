<template>
  <div id="app">
    <p><button v-on:click="increment">UP</button>
    <h1>Count:{{ count }}</h1>
    <h2>Double Count: {{ double }}</h2>
    <h2>{{ upper }}</h2>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions } from 'vuex'

export default { 
  name: 'app',
  data: function(){
    return {
      message: 'Hello Vuex',
    }
  },
  methods: {
    ...mapActions(['increment']) 
    // increment(){
    //   this.$store.dispatch('increment');
    // }
  },
  computed: {
    upper(){
      return this.message.toUpperCase();
    },
    ...mapGetters(['double']),
    // double(){
    //   return this.$store.getters.double;
    // },
    ...mapState(['count'])
  //   count(){
  //     return $store.state.count
  //   }
  // }
  }
}
</script>