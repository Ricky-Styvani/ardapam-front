<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none !important; 
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>