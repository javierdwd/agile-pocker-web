<template>
  <LayoutDefault>
    <div class="vw-cards">
      <CardsBoard>
        <Card v-for="cardNum in 12" :key="cardNum"> Card {{ cardNum }} </Card>
      </CardsBoard>
    </div>
  </LayoutDefault>
</template>

<script>
import CardsBoard from "@/components/CardsBoard";
import Card from "@/components/Card";

export default {
  name: "cards",
  components: {
    CardsBoard,
    Card
  }
};
</script>
