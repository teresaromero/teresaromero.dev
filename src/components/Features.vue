<template>
  <!-- index.html -->

  <section class="container mx-auto px-6 p-10">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">{{ $t('features.title') }}</h2>
    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">Wordpress</h4>
        <p
          class="text-gray-600 mb-8"
        >{{ $t('features.description.wordpress') }}</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="assets/health.svg" alt="Monitoring" />
      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <img src="assets/report.svg" alt="Reporting" />
      </div>
      <div class="w-full md:w-1/2 pl-10">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">React</h4>
        <p
          class="text-gray-600 mb-8"
        > {{ $t('features.description.react') }}</p>
      </div>
    </div>

    <div class="flex items-center flex-wrap mb-20">
      <div class="w-full md:w-1/2">
        <h4 class="text-3xl text-gray-800 font-bold mb-3">NodeJS</h4>
        <p
          class="text-gray-600 mb-8"
        >{{ $t('features.description.node') }}</p>
      </div>
      <div class="w-full md:w-1/2">
        <img src="assets/sync.svg" alt="Syncing" />
      </div>
    </div>
  </section>
</template>