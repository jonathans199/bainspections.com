<template>
    <div>
        <Header/>
        <SlideHome/>
        <Content/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import SlideHome from '@/components/SlideHome'
import Content from '../views/Content'
import Footer from '../components/Footer'

export default {
    name: 'Home',
    components: {
        Header,
        SlideHome,
        Content,
        Footer
    }
}
</script>
