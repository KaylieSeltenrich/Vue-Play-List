<template>
<div id="body-container">
<play-list />
<song-list />
  </div>
</template>

<script>
import PlayList from "./playlist.vue";
import SongList from "./songlist.vue";

export default {

  name: "page-body",

  components: {
    PlayList,
    SongList,
  }
 
};
</script>

<style>

#body-container {
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;
align-content: center;
}

</style>
