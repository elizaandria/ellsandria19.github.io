document.addEventListener('alpine:init', () =>{
    Alpine.store('customer', {
        details:{
            title: '',
            name: '',
            email: '',

        }
    })
})
    