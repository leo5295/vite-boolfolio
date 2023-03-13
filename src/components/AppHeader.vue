
<template lang="">
    <header class="d-flex align-items-center">
        <div class="container-fluid">
            <div class="row">
                <div class="col d-flex justify-content-center">
                    <h2 class="nav-item"><router-link to="/" class="nav-link">Home</router-link></h2>
                </div>
                <div class="col d-flex justify-content-center">
                    <h2 class="nav-item"><router-link to="/portfolio" class="nav-link">portfolio</router-link></h2>
                </div>
                <div class="col d-flex justify-content-center">
                    <h2 class="nav-item"><router-link to="/contact" class="nav-link">contact</router-link></h2>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
    background-color: aquamarine;
    height: 80px;
}
</style>