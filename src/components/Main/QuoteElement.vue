<script>
	export default {
		name:'QuoteElement',
	}
</script>

<template>
    <section>
        <div class="img-bg">
            <div class="first-block">
                <div class="img-box" v-for="n in 3"></div>
            </div>
            <div class="second-block">
                <div class="img-box" v-for="n in 3"></div>
            </div>
            <div class="third-block">
                <div class="img-box" v-for="n in 3"></div>
            </div>
        </div>
        <div class="text-overlay">
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
        </div>

    </section>
</template>

<style  lang="scss" scoped>
section {
    height: 500px;
    position: relative;

    // ------------- IMMAGINE DI SFONDO -------------
    .img-bg {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        & > * {
            overflow: hidden;
            @include flex-center;
        }//tutti i blocchi
        .first-block, .third-block {
            height: 25%;
            width: 100%;
        }//primo e ultimo blocco
        .second-block {
            height: 50%;
            width: 100%;
        }//secondo blocco
        .img-box {
            width: 85%;
            height: 100%;
            background-image: url('../../assets/img/h3-background-img.jpg');
            background-size: cover;
            flex-shrink: 0;
        }//img-box
        .first-block .img-box {
            background-position: bottom;
        }//img-box posizione primo blocco
        
        .second-block .img-box {
            background-position: top;
        }//img-box posizione secondo blocco
        
        .third-block .img-box {
            background-position: 0 65%;
        }//img-box posizione terzo blocco
    }//img-bg

    // ------------- TESTO IN OVERLAY -------------
    .text-overlay {
        @include overlay-position;
        .container {
            height: 100%;
            display: flex;
            align-items: center;
        }
        .text-box {
            padding-left: 50px;
            color: white;
            font-size: 2.6rem;
            line-height: 0.9;
        }//text-box
    }//text-overlay
}//section

</style>