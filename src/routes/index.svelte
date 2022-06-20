<script>
  import Copyright from "./../lib/modules/Copyright.svelte";
  import Hello from "./../lib/modules/Hello.svelte";
  import MainInfo from "./../lib/modules/MainInfo.svelte";
  import CreativeService from "./../lib/modules/CreativeService.svelte";
  import SEOModule from "./../lib/modules/SEOModule.svelte";
  import { onMount } from "svelte";
  import MainTitle from "$lib/modules/MainTitle.svelte";
  import InfiniteScroller from "$lib/modules/InfiniteScroller.svelte";
  import { columns } from "$lib/util/store";
  import gsap from "gsap";

  const breakpoints = [
    { width: 0, columns: 1 },
    { width: 800, columns: 2 },
    { width: 1240, columns: 3 },
  ];

  const seoEntry = {
    fields: {
      title: "",
      description: "",
      keywords: "",
      image: "",
    },
  };

  function onResize() {
    let cols = 1;
    breakpoints.forEach((breakpoint) => {
      if (window.innerWidth >= breakpoint.width) {
        cols = breakpoint.columns;
      }
    });
    $columns = cols;
  }

  function init() {
    console.log("index init");
    gsap.to(document.body, {
      duration: 1,
      opacity: 1,
      delay: 0.5,
      y: 0,
      ease: "Power1.easeInOut",
    });
    onResize();
    window.scrollTo(0, 0);
  }

  onMount(() => {
    document.fonts.ready
      .then(() => {
        console.log("fonts are ready");
        init();
      })
      .catch(() => {
        console.log("Font load Error");
      });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
</script>

<svelte:head>
  <SEOModule entry={seoEntry} path="" />
</svelte:head>

<div class="page">
  {#if $columns == 3}
    <MainTitle />
    <div class="columns three">
      <div class="column left">
        <div class="content-fixed">
          <CreativeService />
        </div>
      </div>
      <div class="column center">
        <InfiniteScroller>
          <MainInfo />
          <Copyright />
        </InfiniteScroller>
      </div>
      <div class="column right">
        <div class="content-fixed">
          <Hello />
        </div>
      </div>
    </div>
  {:else if $columns == 2}
    <MainTitle />
    <div class="columns two">
      <div class="column left">
        <CreativeService />
        <Hello />
      </div>
      <div class="column right">
        <InfiniteScroller>
          <MainInfo />
          <Copyright />
        </InfiniteScroller>
      </div>
    </div>
  {:else}
    <!-- 1 column -->
    <div class="columns one">
      <div class="column">
        <InfiniteScroller>
          <div class="title-tag">Creative Service DAO</div>
          <MainTitle />
          <MainInfo />
          <Hello />
          <CreativeService />
          <Copyright />
        </InfiniteScroller>
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  @import "../styles/mixins.scss";

  .page {
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;
  }

  .content-fixed {
    position: fixed;
  }

  .columns {
    display: flex;
  }

  .columns.three {
    justify-content: space-between;
    margin-top: 340px;

    .column.left {
      width: 208px;
    }

    .column.center {
      width: 380px;
    }

    .column.right {
      width: 180px;
    }
  }

  .columns.two {
    margin-top: 260px;

    .column {
      flex: 1;
    }
  }

  @include column-count("1") {
    .page {
      padding-top: 140px;
      padding-bottom: 160px;
    }
  }

  @include column-count("2") {
    .page {
      max-width: 800px;
      padding-top: 160px;
      padding-bottom: 160px;
    }
  }

  @include column-count("3") {
    .page {
      max-width: 1240px;
      padding-top: 160px;
    }
  }
</style>
