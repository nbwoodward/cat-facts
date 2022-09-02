<template>
  <div id="cat-facts">
    <h1 id="header">100% True Totally Real Cat Facts I Promise</h1>
    <div id="display">
      <div id="fact">{{ fact }}</div>
      <button @click="setFact">Another please</button>
    </div>
    <div id="share">
      <a @click="share">Share -&gt;</a>
      <div id="copied" v-if="showCopied">Link copied to clipboard!</div>
    </div>
    <div id="imgContainer" :style="`transform: rotate(${imgRotate}deg);`"></div>
  </div>
</template>
<script>
import facts from "../facts";

export default {
  name: "CatFacts",
  data() {
    return {
      imgRotate: 0,
      showCopied: false,
    };
  },
  mounted() {
    if (!this.$route.params?.encoded){
      this.setFact()
    }
  },
  computed: {
    fact() {
      const idx = this.ston(this.$route.params?.encoded)
      return facts[idx] || ""
    }
  },
  methods: {
    setFact() {
      const rando = Math.floor(Math.random() * facts.length);
      this.imgRotate = Math.floor(Math.random() * 3000);
      this.goToRoute(this.ntos(rando))
    },
    goToRoute(encoded){
      this.$router.push(`/${encoded}`)
    },
    async share() {
      await navigator.clipboard.writeText(window.location.href);

      this.showCopied = true;
      setTimeout( () => {
        this.showCopied = false;
      }, 750)
    },
    ntos(num){
      return num.toString(16)
    },
    ston(str){
      return parseInt(str,16)
    }
  },
};
</script>
<style scoped>
#header{
  margin-bottom:10px;
  font-size:1.2em;
}
#fact{
  font-size:1.4em;
  max-width:400px;
  margin:auto;

}
#display {
  padding: 40px;
  border: 1px solid #eee;
  margin: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 400px;
  border-radius: 20px;
  margin-top: 15px;
  background-color: #8ad4d0;
}
.button{
  margin:auto;
  max-width:300px;
  margin-bottom:0;
  margin-top:auto;
}
#share a {
  cursor: pointer;
  display:block;
  padding:5px 10px;
}
#imgContainer {
  height: 150px;
  opacity: .5;
  width:300px;
  background: url("../../public/cat1.jpg") no-repeat center center;
  transition: all 0.1s;
  z-index: 1;
  margin:auto;
  margin-top:75px;
  /*position:absolute;
  left: calc(50% - 150px);
  top: calc(50% - 75px);
  */
}
button {
  margin-top: 15px;
  appearance: none;
  background-color: #1565c0;
  border: 0;
  border-radius: 6px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Roboto", sans-serif, "Verdana";
  font-size: 1em;
  -webkit-font-smoothing: antialiased;
  font-weight: 600;
  line-height: 1;
  padding: 0.75em 1em;
  text-align: center;
  text-decoration: none;
  transition: background-color 150ms ease;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}
</style>
