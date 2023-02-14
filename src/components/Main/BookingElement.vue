<script>
	export default {
		name:'BookingElement',
	}
</script>

<template>
    <section>
        <div class="container">
            <form @submit.prevent>
                <span class="input-box">
                    <input type="text" placeholder="1 Person">
                    <font-awesome-icon icon="fa-solid fa-user-group" />
                </span>

                <span>for</span>

                <span class="input-box">
                    <input type="date" value="2023-02-14">
                    <font-awesome-icon icon="fa-regular fa-calendar" />
                </span>

                <span>at</span>
                
                <span class="input-box">
                    <input type="text" placeholder="7:00 pm">
                    <font-awesome-icon icon="fa-regular fa-clock" />
                </span>

                <button class="button">
                    book a table
                </button>
            </form>
            <p>*Powered by OpenTable</p>
        </div>
    </section>
</template>

<style  lang="scss" scoped>
section {
    background-image: url('../../assets/img/h3-background-img-3.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .container {
        padding-block: 5rem;
        text-align: center;
        form {
            @include flex-between-center;

            .input-box {
                @include flex-between-center;
                padding: 0 1rem;
                height: 3rem;
                width: 200px;
                font-size: 0.8rem;
                border: 2px solid $dark-border;
                background-color: white;
                input {
                    height: 100%;
                    font-family: 'Open Sans', sans-serif;
                    border: none;
                    outline: none;
                    flex-grow: 1;
                }//input
                svg {
                    font-size: 0.8rem;
                    color: $gold-text;
                }//icona
                ::-webkit-calendar-picker-indicator {
                    display: none;
                }//per nascondere icona automatica calendario
            }//input-box
            span:not(.input-box) {
                color: white;
            }//testo fra gli input
            .button {
                margin-left: 2.5rem;
                height: 3rem;
                width: 200px;
                font-size: 0.7rem;
            }//button
        }//form
        p {
            margin-top: 0.5rem;
            @include paragraph;
            font-size: 0.6rem;
            text-align: start;
            color: white;
        }//powered by
    }//container
}//section
</style>