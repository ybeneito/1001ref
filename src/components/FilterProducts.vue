<template>
 <div class="container mx-auto my-5 flex flex-col w-full lg:w-2/3 justify-center">
  
    <Slider v-model="slider" />
    <div v-for="tag in tags" :key="tag">
      <button class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" :class="{'bg-yellow-500': tag.selected, 'bg-transparent': !tag.selected}" @click="btn(tag)">{{tag.name}}</button>
    </div>

  <button @click="getAsked()">test</button>
 </div>
</template>

<script>
  import Slider from '@vueform/slider'

  export default {
    components: {
      Slider,
    },
    data() {
      return {
        slider: [20,40],
        tags: [
          {
            "name": "bli",
            "selected": false
        },
        { 
          "name": "bla",
          "selected": true
        },
        { "name": "blou",
          "selected": true
        }
        ]
      
      }
    },
    methods: {
      getAsked(){
        this.sliderMin = this.slider[0]
        this.sliderMax = this.slider[1]
        this.selectedTags = this.tags.filter(tag => tag.selected == true)
        console.log(this.sliderMin, this.sliderMax, this.selectedTags)
      },
      btn(tag){
        tag.selected = !tag.selected 
      }
    }
  }
</script>

<style src="@vueform/slider/themes/default.css">

 
</style>