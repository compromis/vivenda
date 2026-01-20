<template>
  <footer class="footer bg-yellow relative z-[5] pt-24">
    <div class="p-site md:mx-auto min-h-[7rem] flex flex-col md:flex-row md:items-end gap-4 text-black">
      <div class="text-balance">
        <div class="flex gap-4 items-center mb-4">
          <a href="https://compromis.net" aria-label="Compromís" class="logo compromis">
            <SiteLogo class="h-[1.25rem]" />
          </a>
        </div>
        <p>
          <strong>La vivenda no és un negoci</strong> és una campanya de <strong><a href="https://compromis.net">Compromís</a></strong>.
        </p>
      </div>
      <div class="text-nowrap flex gap-4 md:ms-auto">
        <a href="https://compromis.net/avis-legal">{{ $t('global.privacy_policy') }}</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  &-logo {
    height: 1.5rem;
  }

  p {
    margin: 0;
    margin-right: auto;
  }

  a {
    color: var(--white);

    &:hover {
      opacity: .75;
    }
  }
}

@media (max-width: 46rem) {
  .footer {
    .container {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
  }
}
</style>