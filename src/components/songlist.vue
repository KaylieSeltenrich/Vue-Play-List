<template>
<div>
<h1> Song List </h1>
<div class="song-list" v-for="song in songs" v-bind:key="song.songTitle">
<h3>{{song.songTitle}} </h3>
<h3>{{song.artist}} </h3>
<button @click="addToPlaylist(song)"> Add to Playlist </button>
</div>
 </div>
 
</template>

<script>

export default {

name: "song-list",


methods: {
 addToPlaylist: function(song) {
   this.$store.commit('toplaylist', song)
 }
},


data : function() {

return {
songs: this.$store.state.songlistSongs
}
},


}

</script>

<style>
.song-list {
  border: 1px solid black;
  margin: 5%;
}
</style>