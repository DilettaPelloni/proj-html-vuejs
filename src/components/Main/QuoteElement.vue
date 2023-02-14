<script>
	export default {
		name:'QuoteElement',
	}
</script>

<template>
    <section>
        <div class="container">
            <div class="text-box">
                <h2>
                    go ahead and
                    <br>
                    build your
                    <br>
                    own pizza
                    <br>
                    we won't
                    <br>
                    judge!
                </h2>
            </div>
        </div>
    </section>
</template>

<style  lang="scss" scoped>
section {
    padding-block: 5rem;

    background-image: url('../../assets/img/h3-background-img.jpg');
    background-size: cover;
    background-position: center;

    .text-box {
        padding-left: 50px;
        color: white;
        font-size: 2rem;
        line-height: 0.9;
    }//text-box
}//section

</style>