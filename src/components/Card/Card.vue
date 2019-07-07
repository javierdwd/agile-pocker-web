<template>
  <div class="c-Card" @click="onClick">
    <div class="c-Card__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick() {
      this.$emit("choose", {
        ...this.card
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.c-Card {
  background-color: #777;
  flex-basis: 21%;
  margin: 2% 2%;
  position: relative;

  &::before {
    content: "";
    display: block;
    padding-top: 142.85%;
  }

  &__content {
    align-items: center;
    background-color: var(--brand-color);
    bottom: 0;
    color: white;
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
