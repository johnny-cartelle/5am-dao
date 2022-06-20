<script>
  import { getContentfulImageUrl } from "$lib/util/helpers";

  export let entry;
  export let path;

  const title = entry.fields.title;
  const description = entry.fields.description;
  const keywords = entry.fields.keywords;
  const imageUrl = entry.fields.image;
  const url = "https://july.fund/" + path;
</script>

<title>{title}</title>
<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<meta property="og:title" content={title} />
<meta property="og:url" content={url} />
<meta property="og:image" content={imageUrl} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={imageUrl} />
