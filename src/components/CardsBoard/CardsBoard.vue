<template>
  <section class="c-CardsBoard">
    <Card
      v-for="card in cards"
      :key="card.value"
      :card="card"
      @choose="onChoose"
      >{{ card.label }}</Card
    >

    <ChosenCard :card="chosenCard" @choose="onChoose" />
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import { CHOSEN_CARD } from "../../store/modules/cardsBoardStore/mutation-types";

import Card from "../Card";
import ChosenCard from "../ChosenCard";

export default {
  name: "CardsBoard",
  components: {
    Card,
    ChosenCard
  },
  computed: {
    ...mapGetters("cardsBoard", ["cards"]),
    ...mapState("cardsBoard", ["chosenCard"])
  },
  methods: {
    ...mapMutations("cardsBoard", [CHOSEN_CARD]),
    onChoose(card) {
      this[CHOSEN_CARD](card);
    }
  }
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
