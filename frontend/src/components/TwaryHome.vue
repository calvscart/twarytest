<template>
  <div class="app">
    <header>
      <h1>TwaryAPI</h1>
      <p>Your source for random images and jokes!</p>
    </header>

    <main>
      <section class="endpoints">
        <h2>Available Endpoints</h2>
        <div class="endpoint-card">
          <a href="/fun/paptsunee" target="_blank">
            <h3>/fun/paptsunee</h3>
            <p>Get a free photo of Kitsu</p>
          </a>
        </div>
        <div class="endpoint-card">
          <a href="/fun/randomjoke" target="_blank">
            <h3>/fun/randomjoke</h3>
            <p>Get a random joke</p>
          </a>
        </div>
      </section>

      <section class="random-word">
        <h2>Custom Random Word</h2>
        <button @click="getRandomWord" class="random-btn">Get Word</button>
        <p v-if="word" class="word-output">{{ word }}</p>
      </section>

      <section class="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:support@twaryapi.com">support@twaryapi.com</a></p>
        <p>Twitter: <a href="#" target="_blank">@TwaryAPI</a></p>
      </section>
    </main>

    <footer>
      <p>Made by Kalrex</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const word = ref('');

const getRandomWord = async () => {
  const response = await fetch('https://your-vercel-project.vercel.app/api/random-word');
  const data = await response.json();
  word.value = data.word;
};
</script>

<style scoped>
/* Same styles as before... (kept unchanged for brevity) */
</style>
