<template>
  <section class="c-CardsBoard">
    <slot />
  </section>
</template>

<script>
export default {
  name: "CardsBoard"
};
</script>

<style lang="scss" scoped>
.c-CardsBoard {
  display: flex;
  flex-flow: row wrap;
  margin-top: 3rem;
  padding: 0 1rem;
}
</style>
