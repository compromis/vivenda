<template>
  <div id="form" class="bg-white p-8 max-w-[72rem] mx-auto">
    <div id='can-form-area-vivenda' style='width: 100%'><!-- this div is the target for our HTML insertion --></div>
  </div>
</template>

<script setup>
  const scriptUrl = 'https://actionnetwork.org/widgets/v5/form/vivenda?format=js&source=widget'

  onMounted(() => {
    const script = document.createElement('script')
    script.src = scriptUrl
    document.getElementById('can-form-area-vivenda').prepend(script)
  })
</script>

<style>
  #can_embed_form {
    h4 {
      display: none;
    }

    input[type="submit"] {
      background-color: var(--color-orange);
      font-weight: 800;
      font-size: 1.75rem;
    }
  }
</style>