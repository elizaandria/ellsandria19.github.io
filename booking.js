document.addEventListener('alpine:init', () =>{
    Alpine.store('customer', {
        details:{
            title: '',
            name: '',
            email: '',
            check_in: '',
            check_out: '',
            number_of_rooms: '',
            rooms: '',


        }
    })
})
    