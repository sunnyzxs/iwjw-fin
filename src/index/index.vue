<template>
    <div class='watermark'>
        <iwjw-fin-watermark :names='names'></iwjw-fin-watermark>
    </div>
</template>

<script>
    export default{
        data() {
            return {
                names: 'mycanvas'
            }
        }
    }
</script>

<style lang='scss'>
    .watermark{
        width: 100px;
        height: 100px;
    }
</style>