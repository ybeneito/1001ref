<template>
    <div>
          {{$store.state}}
        <SearchBar />
        <FilterProducts2 />
        <ProductsList />
      
    </div>   
</template>


<script>
import FilterProducts2 from '@/components/FilterProducts2.vue'
import SearchBar from '@/components/SearchBar.vue'
import ProductsList from '@/components/ProductsList.vue'
    export default {
      components: {
          SearchBar,
          FilterProducts2,
          ProductsList
      }
    }
</script>