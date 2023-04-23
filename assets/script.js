console.log("Hello World!")

const {createApp} = Vue


createApp({
    data(){
        return {
            HelloMessage : `Hello World!`

        }
    }
}).mount("#app")