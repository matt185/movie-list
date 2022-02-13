import Vue from 'vue'
import Vuex from 'vuex'
import apiSettings from '../utils/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: "",
    newPageData:"",
    searched:""
  },
  mutations: {
    setMovies(state ,data){
      state.movies=data
    },
    saveNewMovie(state,data){
      state.newPageData= data
    },
    addMovies(state) {
      state.movies.page++
      state.movies.results = [...state.movies.results, ...state.newPageData]
    } ,
    setSearched(state,searched){
      state.searched=searched
    },
    resetNewPageData(state){
      state.newPageData=""
    }
  },
  actions: {
    async movies({ commit }, movie, page) {
      let data = await apiSettings.fetchMovies(movie, page)
      commit("setMovies", data)
    },
    async loadMoreMovies({commit}, searchMovie) {
      let page= this.state.movies.page+1
      let data = await apiSettings.fetchMovies(searchMovie,page)
      commit("saveNewMovie",data.results)
    }
  },
  getters: {
    movies(state) {
      return state.movies
    },
    searched(state) {
      return state.searched
    },
 }
})
