<script>
  import { currentCity } from "$lib/util/store";
</script>

<div class="column-section">
  <div class="column-title">Creative Service DAO</div>
  <p class="light">
    Its 5<span class="blink">:</span>AM somewhere.<br />
    {currentCity.name}<br /><br />
    {@html currentCity.htmlTime}
  </p>
</div>

<style lang="scss">
  @import "../../styles/mixins.scss";

  .column-title {
    visibility: hidden;
  }

  @include column-count("2") {
    .column-title {
      visibility: visible;
    }
  }
</style>
