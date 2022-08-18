<template>
  <div>
    <Headline :title="movieData.movie.original_title" />
    <Info
        :imageLink="movieData.movie.backdrop_path"
        :title="movieData.movie.title"
        :overview="movieData.movie.overview"
        :vote_average="movieData.movie.vote_average"
        :directorsList="movieData.directors"
      />
     <InfoBar
        :duration="movieData.movie.runtime"
        :Budget="movieData.movie.budget"
        :profit="movieData.movie.revenue"
      />
      <ActorGrid :actors="movieData.actors"/>
  </div>
</template>

<script>

import API from "../utils/api"
import Headline from "../components/movieViewComponemts/Headline.vue"
import Info from "../components/movieViewComponemts/Info.vue"
import InfoBar from "../components/movieViewComponemts/InfoBar.vue"
import ActorGrid from "../components/movieViewComponemts/ActorGrid.vue"

export default {
    components:{
        Headline,
        Info,
        InfoBar,
        ActorGrid
    },
    data:()=>{
        return {
            movieData:{}
        }
    },
    props:{
        movieId:String
    },
    async created() {
        const movie = await API.fetchMovie(this.movieId)
        const credits = await API.fetchCredits(this.movieId)
        const directors = credits.crew.filter(
            (member) => member.job === "Director"
        )
        if (!movie || !credits || !directors){
             this.movieData ={
                movie:{},
                actors: {},
                directors:[]
            }
        }
        this.movieData ={
            movie,
            actors: credits.cast,
            directors
        }
    },
}
</script>
