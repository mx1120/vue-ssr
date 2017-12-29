<template>
    <div>
        catalog_sub_index
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
    	asyncData(context) {
    		return {
    			a: context.params.catalog,
                b: context.params.sub
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>