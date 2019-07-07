<template>
  <div class="c-ChosenCard" v-if="card" @click="onClick">
    <div class="c-ChosenCard__content">
      <slot>{{ card.label }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChosenCard",
  props: {
    card: {
      type: Object,
      required: false
    }
  },
  methods: {
    onClick() {
      this.$emit("choose", null);
    }
  }
};
</script>

<style lang="scss" scoped>
.c-ChosenCard {
  border-radius: 12% 12% / 8% 8%;
  box-shadow: 0 0 3.5rem 0 var(--black-shadow);
  left: 50%;
  overflow: hidden;
  position: fixed;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 60vw;

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
    font-size: 12rem;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
