<script>
  import Copyright from "./../lib/modules/Copyright.svelte";
  import Hello from "./../lib/modules/Hello.svelte";
  import MainInfo from "./../lib/modules/MainInfo.svelte";
  import CreativeService from "./../lib/modules/CreativeService.svelte";
  import SEOModule from "./../lib/modules/SEOModule.svelte";
  import { onMount } from "svelte";
  import MainTitle from "$lib/modules/MainTitle.svelte";

  const seoEntry = {
    fields: {
      title: "",
      description: "",
      keywords: "",
      image: "",
    },
  };

  onMount(() => {
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });
</script>

<svelte:head>
  <SEOModule entry={seoEntry} path="" />
</svelte:head>

<div class="page">
  <div class="title-tag">Creative Service DAO</div>
  <MainTitle />

  <!-- 3 columns -->
  <div class="columns three">
    <div class="column left">
      <div class="content-fixed">
        <CreativeService />
      </div>
    </div>
    <div class="column center">
      <MainInfo />
      <Copyright />
    </div>
    <div class="column right">
      <div class="content-fixed">
        <Hello />
      </div>
    </div>
  </div>

  <!-- 2 columns -->
  <div class="columns two">
    <div class="column left">
      <CreativeService />
      <Hello />
    </div>
    <div class="column right">
      <MainInfo />
      <Copyright />
    </div>
  </div>

  <!-- 1 column -->
  <div class="columns one">
    <div class="column">
      <MainInfo />
      <Hello />
      <CreativeService />
      <Copyright />
    </div>
  </div>
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

  .columns.three {
    justify-content: space-between;

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
    .column {
      flex: 1;
    }
  }

  @include column-count("1") {
    .page {
      padding-top: 160px;
      padding-bottom: 160px;
    }
    .columns.one {
      display: flex;
    }
    .columns.two {
      display: none;
    }
    .columns.three {
      display: none;
    }
  }

  @include column-count("2") {
    .page {
      max-width: 800px;
      padding-top: 160px;
      padding-bottom: 160px;
    }
    .columns.one {
      display: none;
    }
    .columns.two {
      display: flex;
    }
    .columns.three {
      display: none;
    }
  }

  @include column-count("3") {
    .page {
      max-width: 1240px;
      padding-top: 160px;
    }
    .columns.one {
      display: none;
    }
    .columns.two {
      display: none;
    }
    .columns.three {
      display: flex;
    }
  }
</style>
