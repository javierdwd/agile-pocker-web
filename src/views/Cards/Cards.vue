<template>
  <LayoutDefault>
    <div class="vw-cards">
      <CardsBoard>
        <Card v-for="card in cards" :key="card.value"> {{ card.label }} </Card>
      </CardsBoard>
    </div>
  </LayoutDefault>
</template>

<script>
import { mapGetters } from "vuex";

import CardsBoard from "@/components/CardsBoard";
import Card from "@/components/Card";

export default {
  name: "cards",
  components: {
    CardsBoard,
    Card
  },
  computed: {
    ...mapGetters("cardsBoard", ["cards"])
  }
};
</script>
