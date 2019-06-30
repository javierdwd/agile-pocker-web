<template>
  <LayoutDefault>
    <div class="vw-home">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </LayoutDefault>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
