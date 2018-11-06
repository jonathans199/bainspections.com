<template>
    <div>
        <Header/>
        <Quote/>
        <SlideHome/>
        <SectionAHome/>
        <SectionBHome/>
        <Inspections/>
        <Content/>
        <SectionFHome/>
        <SectionContactHome/>
        <Footer/>
        
    </div>
</template>

<script>
import Header from '@/components/Header'
import SlideHome from '@/components/SlideHome'
import Content from '../components/Content'
import Inspections from '../components/Inspections'
import SectionAHome from '@/components/SectionAHome'
import SectionBHome from '@/components/SectionBHome'
import SectionFHome from '@/components/SectionFHome'
import SectionContactHome from '@/components/SectionContactHome'
import Footer from '../components/Footer'
import Quote from '../components/Quote'


export default {
    name: 'Home',
    components: {
        Header,
        SlideHome,
        Content,
        Inspections,
        SectionAHome,
        SectionBHome,
        SectionFHome,
        SectionContactHome,
        Footer,
        Quote
    }
}
</script>
