import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  
      songlistSongs: [
        { songTitle: "Clint Eastwood", 
        artist: "Gorillaz" },
        { songTitle: "Level of Concern", 
        artist: "Twenty One Pilots" },
        { songTitle: "It's Alright", 
        artist: "Mother Mother" },
        { songTitle: "100 Bad Days", 
        artist: "AJR" },
        { songTitle: "I'm Walking on Sunshine", 
        artist: "Katrina & The Waves" },
        ],
  
        playlistSongs:
         [ ],
         
    },

  mutations: {
  
   toplaylist: function(state,song) {
   state.playlistSongs.push(song)
   
   for(let i=0; i < state.songlistSongs.length; i++) {
     if(state.songlistSongs[i] == song) {
       state.songlistSongs.splice(i,1);

     }
   }

   },

   outplaylist: function(state,song) {
    state.songlistSongs.push(song)

    for(let i=0; i < state.playlistSongs.length; i++) {
      if(state.playlistSongs[i] == song) {
        state.playlistSongs.splice(i,1);
 
      }
    }
    
    },
 
   },


});
