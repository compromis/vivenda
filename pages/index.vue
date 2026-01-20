<script setup>
/* Stats */
const config = useRuntimeConfig()

/* SEO Metatags */
const title = 'La vivenda no és un negoci - Compromís'
const ogTitle = title
const description = 'La vivenda no és un negoci, és un dret.'
const ogImage = config.public.url + '/post/og-image.jpg'
const keywords = ''
const twitterSite = 'jovespv'
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
