<template>
  <div id="cat-facts">
    <h1> Cat Facts </h1>
    <div> {{fact}} </div>
    <button @click="setFact">Another please</button>
  </div>
</template>
<script>
import facts from '../facts'

export default {
  name: 'CatFacts',
  data(){
    return {
      fact: ''
    }
  },
  mounted(){
    this.setFact()
  },
  methods: {
    setFact(){
      const rando = Math.floor(Math.random() * facts.length)
      this.fact = facts[rando]
    }
  }
}
</script>
<style scoped>
button{
  margin-top:15px;
}
</style>
