<template>
  <div class="l-layoutDefault">
    <Nav />

    <slot />
  </div>
</template>

<script>
import Nav from "../components/Nav";

export default {
  name: "layoutDefault",
  components: {
    Nav
  }
};
</script>
