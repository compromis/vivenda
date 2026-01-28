<template>
  <header class="flex flex-col items-center p-8 max-w-[72rem] mx-auto gap-8 md:gap-10">
    <h1 class="font-headline text-2xl md:text-5xl text-white">
      LA VIVENDA <strong class="text-black underline">NO</strong> ÉS UN NEGOCI
    </h1>
    <div ref="illustrations" class="w-full h-[125vh] bg-red">
      <div class="sticky top-[5vh]">
        <div class="relative text-center">
          <img ref="vulture" src="../../assets/images/vivenda-1.svg" alt="" aria-hidden="true" class="vulture h-[90vh] w-full object-fit" />
          <img ref="house" src="../../assets/images/vivenda-2.svg" alt="" aria-hidden="true" class="house h-[90vh] w-full objet-fit absolute top-0 bg-yellow opacity-0" />
        </div>
      </div>
    </div>
    <h1 class="font-headline text-2xl md:text-5xl text-white">
      LA VIVENDA ÉS <strong class="text-black underline">UN DRET</strong>
    </h1>
    <a href="#form" class="bg-orange text-white font-extrabold text-lg py-2 px-5">
      Signa
    </a>
  </header>
</template>

<script setup>
const { $gsap } = useNuxtApp()

const house = ref()
const illustrations = ref()

onMounted(() => {
  $gsap.to(house.value, {
    opacity: 1,
    scrollTrigger: {
      trigger: illustrations.value,
      start: 'top top',
      end: '+=500',
      scrub: true
    }
  })
})
</script>