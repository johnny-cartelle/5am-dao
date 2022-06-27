<div class="column-section copyright-wrapper">
  <div class="copyright light">©2022</div>
  <div class="line" />
</div>

<style lang="scss">
  @import "../../styles/mixins.scss";

  .copyright-wrapper {
    display: flex;
    align-items: center;
    padding-bottom: 200px;
    @include column-count("2") {
      gap: 20px;
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: var(--color--light-grey);
  }
</style>
