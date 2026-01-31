<template>
  <div id="form" class="bg-white p-8 max-w-[72rem] mx-auto">
    <h2 class="font-extrabold text-xl">¡Firma para que la vivienda sea un derecho!</h2>
    <div class="my-8 text-base manifesto">
      <p>Tener una casa donde vivir no debería ser un lujo, es un derecho, y, aun así, hoy demasiada gente vive con la incertidumbre de no saber si podrá pagar el alquiler el próximo mes, si tendrá que marcharse de su barrio o si su pueblo terminará quedándose vacío. Mientras tanto, unos pocos hacen negocio con un derecho básico. Esto no es justo, y no es inevitable. Es el resultado de un sistema que protege la especulación antes que a las personas. Y eso es lo que queremos cambiar.</p>
      <p>Queremos poner límites claros: que los alquileres no se lleven medio sueldo, que los precios dejen de subir sin control y que los pisos turísticos no expulsen a la vecindad de sus barrios. Las ciudades son para vivir, no para hacer caja. Pero al mismo tiempo es necesario proteger e incentivar a los pequeños propietarios que alquilan a precios justos, que dan ejemplo y que frenan la especulación.</p>
      <p>Somos conscientes de que la realidad de nuestro territorio es diversa y desigual. Mientras hay barrios y ciudades con zonas tensionadas, precios desbocados y vecindario expulsado, también hay municipios que se vacían, con casas cerradas y oportunidades que se pierden. No todas las realidades son iguales, y por eso las soluciones tampoco pueden serlo. Hacen falta propuestas concretas para cada caso: regular y proteger donde hay presión, e incentivar, rehabilitar y dar vida donde hay abandono. Solo así garantizaremos el derecho a la vivienda en todas partes y un territorio cohesionado y justo.</p>
      <p>Hay que frenar las garras de los fondos buitre y de los especuladores que acumulan viviendas vacías o especulan y las usan como un bien de mercado y no como un derecho a proteger. La vivienda no puede ser un monopolio para enriquecerse rápidamente. Hace falta mucha más vivienda pública, más alquiler asequible y menos negocio con la necesidad de la gente. Y la vivienda protegida debe estar protegida para siempre.</p>
      <p>En los pueblos, el mensaje es claro: queremos vida, no abandono. Casas vacías pueden volver a ser hogares. Los jóvenes que quieren quedarse o volver deben tener opciones reales. Rehabilitar, ayudar, dotar de servicios y facilitar el alquiler es apostar por el futuro del territorio y por un país más equilibrado.</p>
      <p>Firmar es plantar cara. Es decir que ya basta de hacer negocio con el derecho a vivir dignamente. Cada firma es un paso más para que la vivienda deje de ser un problema y vuelva a ser lo que siempre debió ser: un derecho para todas y todos.</p>
      <p>Queremos tener mucha fuerza para llevar adelante todas nuestras propuestas, para hacer frente a los grandes intereses; por eso necesitamos tu firma, tu ayuda y tu compromiso.</p>
    </div>
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
