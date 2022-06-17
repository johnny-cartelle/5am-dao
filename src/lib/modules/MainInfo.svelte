<div class="column-section">
  <div class="column-title">Info</div>
  <p>
    5:AM has set out to become the creative powerhouse of the 21st century. We
    are convinced that by creating a decentralized platform & community for
    creatives of all kinds to come together to work on the projects that will
    power the future of web3, we can bring out the maximum creativity in all of
    us
    <br /><br />
    Our vision is to build this into a genre and borders-defying creativity engine.
    We are a cohort of the best architects, best motion designers, NFT artists, movie
    directors and other creative spirits, all working together to design how we interact
    with content and each other, both virtually and physically.
    <br /><br />
    <strong
      >In its first iteration, 5:AM will focus on projects in the context of
      graphic, web, and product design.</strong
    > We will use this vertical as a testing ground to develop the methodologies
    that are most supportive of creative collaboration in a decentralized fashion.
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
