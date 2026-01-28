<script setup>
/* Stats */
const config = useRuntimeConfig()

/* SEO Metatags */
const title = 'La vivenda no és un negoci, és un dret - Compromís'
const ogTitle = title
const description = 'Signa el manifest per una vivenda digna'
const ogImage = config.public.url + '/post/ogimage.png'
const keywords = 'vivienda, alquiler, vivenda, hipoteca, fondos vuitres, fons voltor, dret, compromis'
const twitterSite = 'compromis'
useServerSeoMeta({
  title,
  ogTitle,
  description,
  ogDescription: description,
  ogImage,
  twitterCard: 'summary_large_image',
  keywords,
  ogSiteName: title,
  twitterSite,
  ogType: 'website'
})

useHead({ title })
</script>

<template>
  <main class="p-4">
    <SectionsHeader />
    <SectionsContent />
    <SectionsForm />
  </main>
</template>
