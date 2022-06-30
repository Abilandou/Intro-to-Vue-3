app.component('product-details', {
    props: {
        details : {
            required: true
        }
    },
    template: 
    `
       <ul> <li v-for="detail in details">{{ detail }}</li></ul>
    `
})