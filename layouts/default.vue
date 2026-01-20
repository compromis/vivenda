<script setup>
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  htmlAttrs: { lang: head.value.htmlAttrs.lang, dir: head.value.htmlAttrs.dir, class: 'bg-yellow text-black' },
  meta: [
    { name: 'theme-color', content: '#f0b43c' },
    { name: 'msapplication-TileColor', content: '#f0b43c' },
    ...head.value.meta
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'https://compromis.net/sub/icons/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: 'https://compromis.net/sub/icons/favicon32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: 'https://compromis.net/sub/icons/favicon192.png' },
    { rel: 'stylesheet', href: 'https://compromis.net/sub/fonts/manrope.css?variable' },
    { rel: 'stylesheet', href: 'https://actionnetwork.org/css/style-embed-whitelabel-v3.css' },
    ...head.value.link
  ],
  script: [
    { src: 'https://cloud.umami.is/script.js', 'data-website-id': '7f5934c2-aa57-4174-8d35-e8bc8064c2ab', defer: true },
    { src: 'https://actionnetwork.org/widgets/v5/form/vivenda?format=js&source=widget' }
  ]
})
</script>

<template>
  <div class="bg-yellow font-medium">
    <SiteNav />
    <slot />
    <SiteFooter />
  </div>
</template>
