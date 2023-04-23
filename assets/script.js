const {createApp} = Vue

createApp ({

    data(){
        return {
            mailList : [],
            counter : 10,
            loading : true

        }
    },

    methods: { 

        getApi(){
            setTimeout(() => {
                
                for(let i = 0; i < this.counter; i++){
                    
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").
                    then(result => {
                        
                        console.log("result.data.response ->",result.data.response)
                        
                        this.mailList.push(result.data.response);
                        this.loading = false
                    })
                }
            }, 2000);
            console.log(this.mailList);
        },

    },
    mounted(){
        this.getApi()
    }

}).mount("#app")
