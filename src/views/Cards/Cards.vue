<template>
  <LayoutDefault>
    <div class="vw-cards">
      <img alt="Vue logo" src="@/assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </LayoutDefault>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "cards",
  components: {
    HelloWorld
  }
};
</script>
