<template>
  <div id="cat-facts">
    <h1 id="header">Best Cat Fact Only</h1>
    <div id="imgContainer" :style="`transform: rotate(${imgRotate}deg);`"></div>
    <div>{{ fact }}</div>
    <button @click="setFact">Another please</button>
  </div>
</template>
<script>
import facts from "../facts";

export default {
  name: "CatFacts",
  data() {
    return {
      imgRotate: 0,
      fact: "",
    };
  },
  mounted() {
    this.setFact();
  },
  methods: {
    setFact() {
      const rando = Math.floor(Math.random() * facts.length);
      this.fact = facts[rando];
      this.imgRotate = Math.floor(Math.random() * 3000);
    },
  },
};
</script>
<style scoped>
#header{
  margin-bottom:110px;
}
#imgContainer {
  height: 150px;
  width:300px;
  background: url("../../public/cat1.jpg") no-repeat center center;
  transition: all 0.1s;
  z-index: -1;
  position:absolute;
  top:50px;
  left: calc(50% - 150px);
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
