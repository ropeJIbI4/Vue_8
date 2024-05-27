<script setup>
import Index from './components/Index.vue';
import Blog from './components/Blog.vue';
import BlogDetails from './components/BlogDetails.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ProductDetails from './components/ProductDetails.vue';
import OurProject from './components/OurProject.vue';
import ProjectDetails from './components/ProjectDetails.vue';
import index from './store/index'
</script>

<template>
  <header>

  </header>

  <main>
    <Header />
    <router-view/>
    <!-- <Index/> -->
    <!-- <Blog/> -->
    <!-- <BlogDetails /> -->
    <!-- <ProductDetails/> -->
    <!-- <OurProject/> -->
    <!-- <ProjectDetails/> -->
    <Footer/>
  </main>
</template>


<style>

</style>


