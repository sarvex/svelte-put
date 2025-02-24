<script lang="ts">
  import ModalPortal from '@svelte-put/modal/ModalPortal.svelte';

  import { page } from '$app/stores';
  import { modalStore } from '$client/services/modal';
  import { PUBLIC_MODE } from '$env/static/public';
  import { PUBLIC_ROOT_URL } from '$env/static/public';

  import '../lib/client/styles/app.css';

  $: meta = $page.data.meta;

  $: title = meta?.title ?? '@svelte-put';
  $: description =
    meta?.description ??
    'Useful svelte actions, components, utilities battle-tested in real world projects';
  $: keywords = meta?.keywords ?? ['svelte', 'put', 'action', 'component', 'utility', 'collection'];

  $: ogTitle = meta?.og?.title ?? title;
  $: ogDescription = meta?.og?.description ?? description;
  $: ogType = meta?.og?.type ?? 'website';
  $: ogUrl = meta?.og?.url ?? `${PUBLIC_ROOT_URL}${$page.url.pathname}`;
  $: ogImage = meta?.og?.image ?? `${PUBLIC_ROOT_URL}/images/og/svelte-put.jpg`;
  $: ogImageAlt = meta?.og?.imageAlt ?? 'svelte-put';

  $: twitterTitle = meta?.twitter?.title ?? ogTitle;
  $: twitterDescription = meta?.twitter?.description ?? ogDescription;
  $: twitterCard = meta?.twitter?.card ?? 'summary_large_image';
  $: twitterImage = meta?.twitter?.img ?? ogImage;
  $: twitterImageAlt = meta?.twitter?.imageAlt ?? '@svelte-put site';
  $: twitterSite = meta?.twitter?.site ?? '@vnphanquang';
</script>

<svelte:head>
  <!-- SEO meta tags -->
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords.join(', ')} />
  <meta name="mode" content={PUBLIC_MODE} />

  <meta property="og:title" content={ogTitle} />
  <meta property="og:description" content={ogDescription} />
  <meta property="og:type" content={ogType} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:alt" content={ogImageAlt} />
  <meta property="og:url" content={ogUrl} />

  <meta name="twitter:title" content={twitterTitle} />
  <meta name="twitter:description" content={twitterDescription} />
  <meta name="twitter:card" content={twitterCard} />
  <meta name="twitter:image" content={twitterImage} />
  <meta name="twitter:image:alt" content={twitterImageAlt} />
  <meta name="twitter:site" content={twitterSite} />

  <link href={ogUrl} rel="canonical" />
  <link type="text/plain" rel="author" href="{PUBLIC_ROOT_URL}/humans.txt" />
</svelte:head>

<slot />

<ModalPortal store={modalStore} class="z-overlay" />
