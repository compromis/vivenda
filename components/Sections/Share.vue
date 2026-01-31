<script setup>
const share_title = 'La vivenda no és un negoci, és un dret'
const share_text = 'La vivenda no és un negoci, és un dret. Signa el manifest per una vivenda digna i fes-lo córrer!'
const share_image = 'https://vivenda.compromis.net/post/ogimage.png'

/* Url and text */
const url = computed(() => {
  return 'https://compromis.net/vivenda'
})

const text = computed(() => {
  return encodeURIComponent(share_text)
})

const urlAndText = computed(() => {
  return `${text.value} ${url.value}`
})

/* Share dialog */
const payload = {
  title: share_title,
  text: text.value,
  url: url.value,
  image: share_image
}

const canShare = computed(() => window && window.navigator.share)
const share = async () => {
  if (canShare.value) {
    await navigator.share(payload)
  }
}
</script>

<template>
  <section class="pt-28 pb-0 lg:py-24 max-w-[800px] mx-auto">
    <div class="text-black">
      <div class="border-2 border-black overflow-clip">
        <div class="py-site px-8 border-b-2 border-black">
          <h2 class="font-extrabold text-lg">Fes difusió</h2>
          <p class="text-base">Comparteix aquesta pàgina amb les teues amistats.</p>
        </div>
        <div class="buttons grid md:grid-cols-2">
          <a :href="`https://wa.me/?text=${urlAndText}`" class="md:border-r-2 border-b-2 border-black">
            <span>-&gt;</span> WhatsApp
          </a>
          <a :href="`https://t.me/share/url?url=${urlAndText}`" class="border-b-2 border-black">
            <span>-&gt;</span> Telegram
          </a>
          <a :href="`https://x.com/intent/post/?text=${text}&url=${url}.com&hashtags=`" class="md:border-r-2 border-b-2 md:border-b-0 border-black">
            <span>-&gt;</span> X / Twitter
          </a>
          <a v-if="canShare" href="#" @click.prevent="share">
            <span>-&gt;</span> Altres
          </a>
          <a v-else :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`">
            <span>-&gt;</span> Facebook
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.buttons a {
  padding: 1.5rem;
  font-size: var(--text-lg);
  color: var(--color-black);
  display: flex;
  gap: .5em;
  transition: .5s ease;

  span {
    max-width: 0;
    overflow: clip;
    transition: .5s ease;
    white-space: nowrap;
    color: var(--color-black);
  }

  &:hover {
    background: var(--color-white);
    color: var(--color-black);
    text-decoration: none;

    span {
      max-width: 2em;
    }
  }
}
</style>