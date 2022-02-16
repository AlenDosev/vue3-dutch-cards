<script setup lang="ts"></script>

<script lang="ts">
export default {
  data: () => ({
    rows: [],
    currentIteration: 0,
    fliped: false,
  }),
  async mounted() {
    document.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        this.flipCard();
      } else if (event.code === "ArrowLeft") {
        this.switchCard(false);
      } else if (event.code === "ArrowRight") {
        this.switchCard(true);
      }
    });

    document.addEventListener("swiped-left", () => {
      alert("left");
    });

    document.addEventListener("swiped-right", () => {
      alert("right");
    });

    const { data } = await this.axios.get(
      "https://sheets.googleapis.com/v4/spreadsheets/1EHBijDmk5nIANiYF4aiUViKKNPfKfgdw-Ws4B8Xt5mA/values/H1!A2:B200?key=AIzaSyDXokXhuuI6PRqUDAMw1dDhOKXlFHcWDh0"
    );
    this.rows = data.values;
  },
  computed: {
    front() {
      if (this.rows.length) {
        return this.rows[this.currentIteration][0];
      }
      return "";
    },
    back() {
      if (this.rows.length) {
        return this.rows[this.currentIteration][1];
      }
      return "";
    },
  },
  methods: {
    flipCard() {
      if (this.fliped) {
        this.fliped = false;
      } else {
        this.fliped = true;
      }
    },
    switchCard(foreward = true) {
      let speed = 0;
      let count = 0;
      if (this.fliped) {
        this.fliped = false;
        speed = 600;
      }

      if (foreward) {
        if (this.currentIteration + 1 < this.rows.length) {
          count = 1;
        }
      } else {
        if (this.currentIteration > 1) {
          count = -1;
        }
      }

      setTimeout(() => {
        this.currentIteration = this.currentIteration + count;
      }, speed);
    },
  },
};
</script>

<template>
  <main class="main">
    <div class="card" @click="flipCard">
      <div
        class="content"
        :class="{
          fliped: fliped,
        }"
      >
        <div class="front">{{ front }}</div>
        <div class="back">{{ back }}</div>
      </div>
    </div>

    <div class="actions">
      <button class="flip-btn" @click="switchCard(false)">Previous Card</button>
      <button class="flip-btn" @click="flipCard">Flip</button>
      <button class="flip-btn" @click="switchCard(true)">Next Card</button>
    </div>
  </main>
</template>

<style lang="scss">
.main {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .card {
    width: 400px;
    height: 400px;
    cursor: pointer;
    perspective: 600px;

    .content {
      position: absolute;
      width: 100%;
      height: 100%;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      transition: transform 1s;
      transform-style: preserve-3d;

      &.fliped {
        transform: rotateY(180deg);
        transition: transform 0.5s;
      }

      .front,
      .back {
        position: absolute;
        height: 100%;
        width: 100%;
        background: white;
        line-height: 400px;
        color: #03446a;
        text-align: center;
        font-size: 55px;
        border-radius: 5px;
        backface-visibility: hidden;
      }

      .back {
        background: #03446a;
        color: white;
        transform: rotateY(180deg);
      }
    }
  }

  .actions {
    width: 400px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .flip-btn {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    border-radius: 4px;
    padding: 0 16px;
    min-width: 64px;
    height: 36px;
    vertical-align: middle;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    color: rgb(var(--pure-material-onprimary-rgb, 255, 255, 255));
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
      0 1px 5px 0 rgb(0 0 0 / 12%);
    font-family: var(
      --pure-material-font,
      "Roboto",
      "Segoe UI",
      BlinkMacSystemFont,
      system-ui,
      -apple-system
    );
    font-size: 14px;
    font-weight: 500;
    line-height: 36px;
    overflow: hidden;
    outline: none;
    cursor: pointer;
    transition: box-shadow 0.2s;
  }
}
</style>
