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
    //...mapActions(['increment'])を元の形に
  },
  computed: {
    upper(){
      return this.message.toUpperCase();
    },
    //...mapGetters(['double']),を元の形に
    
    //...mapState(['count'])を元の形に

  }
}
</script>