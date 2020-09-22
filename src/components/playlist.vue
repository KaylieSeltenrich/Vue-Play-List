<template>
  <div>
 <h1> Play List </h1>
<div class="play-list" v-for="song in songs" v-bind:key="song.songTitle">
<h3>{{song.songTitle}} </h3>
<h3>{{song.artist}} </h3>
<button @click="removeFromPlaylist(song)"> Remove from Playlist </button>
</div>
  </div>
</template>

<script>
export default {

  name: "play-list",


methods: {
 removeFromPlaylist: function(song) {
   this.$store.commit('outplaylist', song)
 }
},

data : function() {

return {

songs: this.$store.state.playlistSongs
}
},

};

</script>

<style>
.play-list {
  border: 1px solid black;
  margin: 5%;
}
</style>
