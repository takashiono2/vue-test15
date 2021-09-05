<template>
	<ul>
		<li v-for="product in products" v-bind:key="product.id">
			{{ product.title }} - {{ product.price }}<br>
			<button @click="addProductToCart(product)">
				Add to cart
			</button>
		</li>
	</ul>
</template>

<script>
  export default{
    computed:{
      products(){
        return this.$store.state.products;
      }
    },
    created(){
      this.$store.dispatch('getAllProducts')
    }
  }
	//import shop from '@/api/shop.js'
	// export default{
	// 	data(){
	// 		return {
	// 			products : [],
	// 		}
	// 	},
	// 	created(){
	// 		shop.getProducts( products => this.products = products);
	// 	}
	// }
</script>