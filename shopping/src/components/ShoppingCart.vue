<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!cartProducts.length">
      <i>Please add some products to cart.</i>
    </p>
    <ul>
      <li
        v-for="product in cartProducts"
        :key="product.id">
        {{ product.title }} - {{ product.price }} x {{ product.quantity }}
      </li>
    </ul>
    <p>Total: {{ cartTotalPrice }}</p>
    <p>
      <button :disabled="!cartProducts.length" @click="checkout(cartProducts)">Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters,mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartProducts','cartTotalPrice']),
    ...mapState(['checkoutStatus']),
  },
  methods: {
    checkout(cartProducts){
      this.$store.dispatch('checkout',cartProducts)
    }
  }
}
</script>