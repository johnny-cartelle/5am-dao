<script>
  import { isTouch } from "$lib/util/helpers";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { animateMainTitleOut } from "./MainTitle.svelte";

  let easeAmount = 10;
  let element;
  let sourceBlock;
  let blockHeight = 0;
  let targetScrollPosition = 0;
  let currentScrollPosition = 0;
  let lastTouchY = 0;
  let lastTouchDeltaY = 0;
  let allBlocksFadedIn = false;
  let rafId = null;

  function onWheel(e) {
    targetScrollPosition += e.deltaY;
    animateMainTitleOut();
  }

  function onTouchStart(e) {
    easeAmount = 1;
    lastTouchY = e.touches[0].clientY;
    targetScrollPosition = currentScrollPosition;
  }

  function onTouchMove(e) {
    e.preventDefault();
    const clientY = e.changedTouches[0].clientY;
    const deltaY = lastTouchY - clientY;
    targetScrollPosition += deltaY;
    lastTouchY = clientY;
    lastTouchDeltaY = deltaY;
    animateMainTitleOut();
  }

  function onTouchEnd(e) {
    easeAmount = 10;
    targetScrollPosition += lastTouchDeltaY * 10;
  }

  function fadeInAllBlocks(direction) {
    if (allBlocksFadedIn) {
      return;
    }

    if (direction == 1) {
      gsap.set(element.childNodes, { opacity: 1 });
    } else if (direction == -1) {
      gsap.set(element.childNodes[0], { opacity: 1 });
      gsap.from(element.childNodes[1], { opacity: 0, duration: 1 });
    }

    allBlocksFadedIn = true;
  }

  function render() {
    currentScrollPosition +=
      (targetScrollPosition - currentScrollPosition) / easeAmount;
    checkLoop();
    gsap.set(element, { y: -currentScrollPosition });
    rafId = window.requestAnimationFrame(render);
  }

  function checkLoop() {
    if (currentScrollPosition > blockHeight * 2) {
      const difYT = targetScrollPosition - blockHeight * 2;
      targetScrollPosition = blockHeight + difYT;
      const difYC = currentScrollPosition - blockHeight * 2;
      currentScrollPosition = blockHeight + difYC;
      fadeInAllBlocks(1);
    } else if (currentScrollPosition < blockHeight) {
      const difYC = currentScrollPosition - blockHeight;
      currentScrollPosition = blockHeight * 2 + difYC;
      const difYT = targetScrollPosition - blockHeight;
      targetScrollPosition = blockHeight * 2 + difYT;
      fadeInAllBlocks(-1);
    }
  }

  function onResize() {
    blockHeight = sourceBlock.clientHeight;
    currentScrollPosition = targetScrollPosition = blockHeight;
  }

  onMount(() => {
    element.append(sourceBlock.cloneNode(true));
    element.append(sourceBlock.cloneNode(true));

    onResize();
    gsap.set([element.childNodes[0]], { opacity: 0 });
    render();

    window.addEventListener("resize", onResize);
    window.addEventListener("wheel", onWheel);
    document.body.addEventListener("touchstart", onTouchStart);
    document.body.addEventListener("touchmove", onTouchMove);
    document.body.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("wheel", onWheel);
      document.body.removeEventListener("touchstart", onTouchStart);
      document.body.removeEventListener("touchmove", onTouchMove);
      document.body.removeEventListener("touchend", onTouchEnd);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  });
</script>

<div class="scroll-container" bind:this={element}>
  <div class="block" bind:this={sourceBlock}><slot /></div>
</div>

<style lang="scss">
  .scroll-container {
    // will-change: transform;
  }
</style>
