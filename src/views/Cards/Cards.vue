<template>
  <LayoutDefault>
    <div class="vw-cards">
      <CardsBoard />
    </div>
  </LayoutDefault>
</template>

<script>
import CardsBoard from "../../components/CardsBoard";

export default {
  name: "cards",
  components: {
    CardsBoard
  }
};
</script>
