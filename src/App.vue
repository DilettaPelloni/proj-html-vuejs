<script>
    import AppHeader from './components/AppHeader.vue';
    import AppMain from './components/AppMain.vue'
    import AppFooter from './components/AppFooter.vue'
	export default {
		name:'App',
        components: {
            AppHeader,
            AppMain,
            AppFooter,
        },//components
	};//export
</script>

<template>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>
</template>

<style lang="scss">
@import "./style/main.scss";


</style>
