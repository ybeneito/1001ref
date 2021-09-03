<template>
  <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
    
  <div class="rounded overflow-hidden shadow-lg" v-for="product in products" :key="product.name">
      <img class="w-full" v-bind:src="product.img" alt="">
      <div class="px-6 py-4">
        <div class="font-bold text-yellow-500 text-xl mb-2">{{product.name}}</div>
        <p class="text-gray-700 text-base">
          {{product.description}}
        </p> 
      </div>
      <div class="px-6 pt-2 pb-2">
         <ul>
          <li v-for="declinaison in product.declinaisons" :key="declinaison"
           class="flex justify-between mb-3">
             <span class="inline-block text-sm font-semibold text-yellow-500">{{ declinaison.quantity }}</span>
             <span class="inline-block text-sm font-bold text-yellow-500">{{ declinaison.prix }}</span>
          </li>
        </ul>
        <div class="flex justify-between items-center">
              <p class="text-xs flex flex-nowrap">Mot clés: </p>
        <ul class="flex flex-wrap justify-end">
          <li v-for="categorie in product.catégories" :key="categorie">
             <span class="text-1xl inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-yellow-600 border-yellow-600 border text-xs">{{ categorie }}</span>
          </li>
        </ul>    
        </div>
      </div>
    </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            products: [
            {
                "name": "La goudale",
                "img": "https://via.placeholder.com/100",
                "description": "Rien de tel qu'une bonne bière après une bonne journée de travail ... ",
                "catégories": ["Bière","Blonde","Bonne", "fraiche","#soleil", "#vacance"],
                "declinaisons": [
                       {
                        "quantity": "cartons 6 bouteilles",
                        "prix": "40€"
                    },
                    {
                        "quantity": "caisse 24 bouteilles",
                        "prix": "70€"
                    }
                ]
            },
            {
                "name": "Bière blanche rdm",
                "img": "https://via.placeholder.com/100",
                "description": "Un apéritif de dernière minute? Prennez donc un instant fraîcheur avec son goût citronné ... ",
                "catégories": ["Bière","Blanche"],
                "declinaisons": [
                    {
                        "quantity": "cartons 6 bouteilles",
                        "prix": "40€"
                    },
                    {
                        "quantity": "caisse 24 bouteilles",
                        "prix": "70€"
                    }
                ]
            },
            {
                "name": "Le p'tit vin rouge",
                "img": "https://via.placeholder.com/100",
                "description": "Il saura merveilleusement accompagner vos meilleures viande grillées ou en sauces ... ",
                "catégories": ["Vin","Rouge"],
                "declinaisons": [
                    {
                        "quantity": "cartons 6 bouteilles",
                        "prix": "40€"
                    },
                    {
                        "quantity": "caisse 24 bouteilles",
                        "prix": "70€"
                    } 
                ]
            }, 
            {
                "name": "Le p'tit vin blanc",
                "img": "https://via.placeholder.com/100",
                "description": "Il saura merveilleusement accompagner vos meilleurs poissons ... ",
                "catégories": ["Vin","Blanc"],
                "declinaisons": [ 
                    {
                        "quantity": "cartons 6 bouteilles",
                        "prix": "30€"
                    }, 
                    {
                        "quantity": "caisse 24 bouteilles",
                        "prix": "1€"
                    } 
                ]
            }
           
            ]
        }
    }    
}
</script>

<style>

</style>