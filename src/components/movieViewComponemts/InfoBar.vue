<template>
  <div class="wrapper">
    <div class="content">
      <div class="column">
        <p>Running time: {{ time }}</p>
      </div>
      <div class="column">
        <p>Budget: {{ budget }}</p>
      </div>
      <div class="column">
        <p>Revenue: {{ revenue }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {timeCalculation, moneyConverter } from "../../utils/helpers";
export default {
  name: "info-bar",
  props: { duration: Number, Budget: Number, profit: Number },
  computed: {
    time() {
      return timeCalculation(this.duration);
    },
    budget() {
      if (this.Budget === 0) {
        return "-";
      }
      return moneyConverter(this.Budget);
    },
    revenue() {
      if (this.profit === 0) {
        return "-";
      }
      return moneyConverter(this.profit);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  min-height: 100px;
  background: $gray-900;
  padding: 0 20px;
  color: white !important;
  
  .content {
    display: flex;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  
  }
  .column {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $gray-700;
    border-radius: 20px;
    margin: 0 20px;
    flex: 1;
    
    p{
      margin:0.5rem 0
    }
     
    
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
    @media screen and (max-width: 768px) {
      display: block;
      .column {
        margin: 20px 0;
      }
    }
  }
}
</style>
