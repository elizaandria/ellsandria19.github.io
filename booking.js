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
        },





        updateCustomer() {
            localStorage.setItem(
                'customerDetails',
                JSON.stringify(this.$store.customer.details)
            );
            localStorage.setItem(
                'customerReservations',
                JSON.stringify(this.$store.customer.reservations)
            );
            localStorage.setItem(
                'customerCost',
                JSON.stringify(this.$store.customer.cost)
            );








        }
    });
})
    