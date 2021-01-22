<template>
  <div>
    <div class="min-h-screen bg-gray-100">
      <main class="py-10">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
          <a href="https://cleavr.io" target="_blank" class="flex items-center space-x-3">
            <div class="flex-shrink-0">
              <div class="relative">
                <img class="h-16 w-16 rounded-full" src="https://cleavr.io/images/cleavr-logo.png" alt="cleavr.io logo">
              </div>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-gray-900 uppercase">Cleavr</h1>
            </div>
          </a>
          <a href="https://twitter.com/thecleavr" target="_blank" class="text-blue-500 hover:text-blue-700">
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
            </svg>
          </a>
        </div>

        <div class="mt-8 max-w-4xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
          <div class="space-y-6 lg:col-start-1 lg:col-span-2">
            <!-- Description list-->
            <section aria-labelledby="applicant-information-title">
              <div class="bg-white shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                  <h2 id="applicant-information-title" class="text-lg leading-6 font-medium text-gray-900">
                    You've successfully added your {{ this.app.name }} site! 🎉
                  </h2>
                  <p class="mt-1 max-w-2xl text-sm text-gray-700">
                    Let's now work on deploying your app.
                  </p>
                </div>

                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Deployment guides
                  </h3>
                  <div class="mt-2 max-w-xl text-sm text-gray-700">
                    <p>
                      We have several resources to help guide you through deploying various popular apps and frameworks.
                    </p>
                  </div>
                  <div class="mt-3 text-sm">
                    <a href="https://docs.cleavr.io/guides" target="_blank" class="font-medium text-blue-600 hover:text-blue-500"> View the deployment guides <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>

                <NuxtDynamic :name="this.app.troubleshoot" />

                <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                  <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Cleavr community forum
                  </h3>
                  <div class="mt-2 max-w-xl text-sm text-gray-700">
                    <p>
                      Come hang out with us on the community forum and join in on the conversations or let us know if you're stuck and need help.
                    </p>
                  </div>
                  <div class="mt-3 text-sm">
                    <a href="https://forum.cleavr.io/" target="_blank" class="font-medium text-blue-600 hover:text-blue-500"> Join in on the discussions <span aria-hidden="true">&rarr;</span></a>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <!-- Progress Section -->
          <section class="lg:col-start-3 lg:col-span-1">
            <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
              <h2 id="timeline-title" class="text-lg font-medium text-gray-900">Progress</h2>
              <div class="mt-6 flow-root">
                <ul class="-mb-8">
                  <li>
                    <div class="relative pb-8">
                      <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div class="relative flex space-x-3 items-center">
                        <div>
                      <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                        <!-- Heroicon name: user -->
                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-700 font-bold">Provision server</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="relative pb-8">
                      <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div class="relative flex space-x-3 items-center">
                        <div>
                      <span class="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
                        <!-- Heroicon name: user -->
                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-700 font-bold">Add site</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="relative pb-8">
                      <span class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div class="relative flex space-x-3 items-center">
                        <div>
                      <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white">
                        <!-- Heroicon name: user -->
                        <svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                      </span>
                        </div>
                        <div class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                          <div>
                            <p class="text-sm text-gray-700 font-bold">Deploy web app</p>
                            <p ></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="mt-6 flex flex-col justify-stretch">
                <a href="https://docs.cleavr.io/deployments" target="_blank"
                   class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  View deployment docs
                </a>
              </div>
            </div>
            <!-- App Type Resources -->
            <NuxtDynamic :name="this.app.resource" />
          </section>
        </div>
      </main>
    </div>
  </div>

</template>

<script>

export default {
  async asyncData({ params }) {
    const slug = await params.slug
    let app = {}
    switch (slug) {
      case 'adonis':
         app = {id: slug, name: 'Adonis', resource: 'AdonisResources', troubleshoot: 'AdonisTroubleshoot'}
         break;
      case 'laravel':
        app = {id: slug, name: 'Laravel', resource: 'LaravelResources', troubleshoot: 'LaravelTroubleshoot'}
        break;
      case 'nuxt-static':
        app = {id: slug, name: 'Nuxt Static', resource: 'NuxtStaticResources', troubleshoot: 'NuxtStaticTroubleshoot'}
        break;
      case 'nuxt-ssr':
        app = {id: slug, name: 'Nuxt SSR', resource: 'NuxtSsrResources', troubleshoot: 'NuxtSsrTroubleshoot'}
        break;
      case 'node-ssr':
        app = {id: slug, name: 'Node SSR', resource: 'NodeSsrResources', troubleshoot: 'NodeSsrTroubleshoot'}
        break;
      case 'alpas':
        app = {id: slug, name: 'Alpas', resource: 'AlpasResources', troubleshoot: 'AlpasTroubleshoot'}
        break;
      case 'node-static':
        app = {id: slug, name: 'Node Static', resource: 'NodeStaticResources', troubleshoot: 'NodeStaticTroubleshoot'}
        break;
      case 'php':
        app = {id: slug, name: 'PHP', resource: 'PhpResources', troubleshoot: 'PhpTroubleshoot'}
        break;
      case 'static':
        app = {id: slug, name: 'Static', resource: 'StaticResources', troubleshoot: 'StaticTroubleshoot'}
        break;
    }
    return { app }
  },
  head() {
    return {
      title: 'Cleavr - Your New Site',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://cleavr.io/favicon.ico' }
      ]
    }
  }
}
</script>

<style>
</style>
