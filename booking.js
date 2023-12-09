document.addEventListener('alpine:init', () =>{
    Alpine.store('customer', {
        details: {
            title: '',
            name: '',
            email: '',
            check_in: '',
            check_out: '',
        },

        reservations: {
            rooms: '',
            number_of_rooms: '',
            number_of_adults: '',
            number_of_children:'',
            extra_bed: '',
        },

        cost: {
            singleRoom: '',
            NumberOfSingleRooms: '',
            NumberOfDoubleRooms: '',
            NumberOfTripleRooms: '',
        }
    });
})
    