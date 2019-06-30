<template>
  <div class="l-Container">
    <nav class="c-Nav">
      <ul class="c-Nav__menu">
        <li class="c-Nav__item">
          <router-link class="c-Nav__link" to="/">Cards</router-link>
        </li>
        <li class="c-Nav__item">
          <router-link class="c-Nav__link" to="/settings">Settings</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
.c-Nav {

  &__menu {
    display: flex;
    list-style: none;
    margin: 0;
  }
  &__item + &__item {
    margin-left: 1rem;
  }
  &__link {
    color: var(--black);
    display: block;
    font-size: 1.3rem;
    font-weight: 500;
    padding: 1rem 0;
    text-decoration: none;
  }
}
</style>
