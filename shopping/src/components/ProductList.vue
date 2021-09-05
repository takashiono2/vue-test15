<template>
	<ul>
		<li v-for="product in products" v-bind:key="product.id">
			{{ product.title }} - {{ product.price }}<br>
			<button @click="addProductToCart(product)" :disabled="!product.inventory">
				Add to cart
			</button>
		</li>
	</ul>
</template>

<script>
import { mapState } from 'vuex'

	export default{
		computed: mapState(['products']),
    created(){
      this.$store.dispatch('getAllProducts')
    },
		methods: {
			addProductToCart({state,commit},product){
				const cartItem = state.items.find(item => item.id === product.id)
				if(!cartItem){
					commit('pushProductToCart',product)
				}else{
					commit('incrementItemQuantity',cartItem);
				}
				commit('decrementProductIventory',product);
			}
		}
  }
</script>