<div class="column-section">
  <div class="column-title">Info</div>
  <p>
    We’re rethinking creative collaboration, one creative field at a time,
    starting with graphic, web, and product design.
    <br /><br />
    We have set out to become the creative powerhouse of the 21st century. We are
    convinced that by creating a decentralized platform & community for creatives
    of all kinds to come together to work on the projects that will power the future
    of web3, we can deliver world-class outcomes.
    <br /><br />
    We are genre and borders-defying. We are a cohort of world-class product designers,
    motion designers, investors, digital artists, strategists, and other creative
    spirits, all driven to redesign how we interact with content and each other,
    virtually and physically.
  </p>
</div>
<div class="column-section">
  <div class="column-title short">Work</div>
  <div class="column-title long">Working On</div>
  <ul class="project-list">
    <li>
      <div class="project-title">Flamingo DAO</div>
      <p class="light">Branding and Webdesign</p>
    </li>
    <li>
      <div class="project-title">Tribute DAO</div>
      <p class="light">Redesign and Dapp Dev</p>
    </li>
  </ul>
</div>
<div class="column-section">
  <div class="column-title">Values</div>
  <p>
    Collaboration helps us tackle complex and large problems
    <br /><br />
    We care deeply about the impact our projects have on the world
    <br /><br />
    We strive to maintain the highest level of quality when it comes to our output
    <br /><br />
    We welcome people of all backgrounds  and training; our social currency is creative
    output
  </p>
</div>

<style lang="scss">
  @import "../../styles/mixins.scss";

  .column-title.short {
    display: block;
    @include column-count("2") {
      display: none;
    }
  }

  .column-title.long {
    display: none;
    @include column-count("2") {
      display: block;
    }
  }

  .project-list {
    li {
      margin-bottom: 30px;
    }
  }

  .project-title {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 5px;
  }
</style>
