<template>
  <div id="form" class="bg-white p-8 max-w-[72rem] mx-auto">
    <h2 class="font-extrabold text-xl">Signa perquè la vivenda siga un dret!</h2>
    <div class="my-8 text-base manifesto">
      <p>Tindre una casa on viure no hauria de ser un luxe, és un dret, i, així i tot, hui massa gent viu amb la incertesa de no saber si podrà pagar el lloguer el mes que ve, si haurà de marxar del seu barri o si el seu poble acabarà quedant-se buit. Mentrestant, uns pocs fan negoci amb un dret bàsic. Açò no és just, i no és inevitable. És el resultat d’un sistema que protegeix l’especulació abans que les persones. I això és el que volem canviar.</p>
      <p>Volem posar límits clars: que els lloguers no s’emporten mig sou, que els preus deixen de pujar sense control i que els pisos turístics no expulsen el veïnat dels seus barris. Les ciutats són per a viure, no per a fer caixa. Però al mateix temps cal protegir i incentivar els xicotets propietaris que lloguen a preus justos, que donen exemple i que frenen l’especulació.</p>
      <p>Som conscients que la realitat del nostre territori és diversa i desigual. Mentre hi ha barris i ciutats amb zones tensionades, preus desbocats i veïnat expulsat, també hi ha municipis que es buiden, amb cases tancades i oportunitats que es perden. No totes les realitats són iguals, i per això les solucions tampoc poden ser-ho. Calen propostes concretes per a cada cas: regular i protegir on hi ha pressió, i incentivar, rehabilitar i donar vida on hi ha abandonament. Només així garantirem el dret a l’habitatge a tot arreu i un territori cohesionat i just.</p>
      <p>Cal parar les garres als fons voltor i als especuladors que acumulen vivendes buides o especulen i les usen com un bé de mercat i no com un dret a protegir. L’habitatge no pot ser un monopoli per enriquir-se ràpidament. Cal molta més vivenda pública, més lloguer assequible i menys negoci amb la necessitat de la gent. I la vivenda protegida ha de ser protegida per sempre.</p>
      <p>Als pobles, el missatge és clar: volem vida, no abandonament. Cases buides poden tornar a ser llars. Joves que volen quedar-se o tornar han de tindre opcions reals. Rehabilitar, ajudar, donar serveis i facilitar el lloguer és apostar pel futur del territori i per un país més equilibrat.</p>
      <p>Signar és plantar cara. És dir que ja n’hi ha prou de fer negoci amb el dret a viure dignament. Cada signatura és un pas més perquè l’habitatge deixe de ser un problema i torne a ser el que hauria d’haver sigut sempre: un dret per a totes i tots.</p>
      <p>Volem tindre molta força per a dur endavant totes les nostres propostes, per fer front als grans interessos, per això necessitem la teua signatura, la teua ajuda i el teu compromís.</p>
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
