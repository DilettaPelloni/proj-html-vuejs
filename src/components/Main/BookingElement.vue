<script>
	export default {
		name:'BookingElement',
	}
</script>

<template>
    <section>
        <div class="container">
            <form>
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

                <a href="#" class="button">
                    book a table
                </a>
            </form>
        </div>
    </section>
</template>

<style  lang="scss" scoped>
    section {
        background-image: url('../../assets/img/h3-background-img-3.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        .container {
            margin: 0 auto;
            padding: 4rem 0;
            max-width: 1000px;
            text-align: center;
            form {
                .input-box {
                    padding: 0 1rem;
                    height: 3rem;
                    min-width: 170px;
                    background-color: white;
                    border: 2px solid $dark-border;
                    font-size: 0.8rem;
                    display: inline-flex;
                    justify-content: space-between;
                    align-items: center;

                    
                    input {
                        display: block;
                        height: 100%;
                        font-family: 'Open Sans', sans-serif;
                        border: none;
                        outline: none;
                        flex-grow: 1;
                    }//input

                    svg {
                        font-size: 0.8rem;
                        color: $gold-text;
                    }

                    ::-webkit-calendar-picker-indicator {
                        display: none;
                    }//icon calendario input date
                }//input-box

                span:not(.input-box) {
                    display: inline-block;
                    margin: 0 1rem;
                    color: white;
                    text-transform: uppercase;
                }
                .button {
                    margin-left: 2.5rem;
                    min-width: 170px;
                    font-size: 0.7rem;
                }
            }
        }
    }
</style>