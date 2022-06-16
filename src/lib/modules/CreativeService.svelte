<div class="column-section">
  <div class="column-title">Creative Service DAO</div>
  <p class="light">
    Its 5:AM somewhere.<br />
    Hamburg, Germany<br /><br />
    5:02AM
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
