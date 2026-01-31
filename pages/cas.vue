<script setup>
/* Stats */
const config = useRuntimeConfig()

/* SEO Metatags */
const title = 'La vivienda no es un negocio, es un drecho - Compromís'
const ogTitle = title
const description = 'Firma el manifesto por una vivienda digna'
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
    <SectionsCasHeader />
    <SectionsCasContent />
    <SectionsCasForm />
    <SectionsCasShare />
  </main>
</template>
