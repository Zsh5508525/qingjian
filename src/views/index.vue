<template>

<div>
	<router-view/>
	<div style="height:50px"></div>
	<index-footer></index-footer>
</div>
</template>

<script>
    import indexFooter from '../components/indexFooter.vue';
	
	export default {
  	components: { indexFooter, },
	  data() {
	    return {
	      
	    };
	  },
	};

</script>

<style>
	
</style>
