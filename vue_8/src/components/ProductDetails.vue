<template>
    <div v-for="(product, index) in products" :key="index">
        <h2>{{ product.name }}</h2>
        <p>Price: {{ formattedPrice(product.price) }}</p>
        <p v-if="product.available">Available</p>
        <p v-else>Out of stock</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [
                {
                    name: 'Product 1',
                    price: 39.99,
                    available: true,
                },
                {
                    name: 'Product 2',
                    price: 19.99,
                    available: false,
                },
            ]
        }
    },
    computed: {
        formattedPrice() {
            return (price) => {
                return `$${price.toFixed(2)}`;
            };
        },
    },
};
</script>


