document.addEventListener('alpine:init', () =>{
    Alpine.store('customer', {
        details: {
            title: '',
            name: '',
            email: '',
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

        showcontent: false,
        coupons:[
            'Promo123',
        ],

        past_bookings:[],

        favorites: [],

        loyalty_points: 0,

        booking:{
            check_in: null,
            check_out: null,
            room_cost: 0,
            number_of_rooms: 0,
            number_of_adults: 0,
            number_of_children: 0,
            extra_bed: 0,
            promo_code: null,
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
        },




        init() {
            this.details =
                JSON.parse(localStorage.getItem('customerDetails')) || this.details;
            this.reservations =
                JSON.parse(localStorage.getItem('customerReservations')) || this.reservations;
            this.cost =
                JSON.parse(localStorage.getItem('customerCost')) || this.cost;
        }






        
    });
})
    