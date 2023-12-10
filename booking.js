document.addEventListener('alpine:init', () =>{
    Alpine.store('customer', {
        
        showcontent: false,
        coupons:[
            'Promo123',
        ],

        past_bookings:[],

        favorites: [],

        loyalty_points: 0,

        tab: 1,

        booking:{
            check_in: null,
            check_out: null,
            room_cost: 0,
            number_of_rooms: 0,
            number_of_adults: 0,
            number_of_children: 0,
            extra_bed: 0,
            promo_code: null,
        
            adventure: {
                number_of_adults_local: 0,
                number_of_children_local: 0,
                number_of_adults_foreign: 0,
                number_of_children_foreign: 0,
                adult_guide: 0,
                child_guide: 0,
            },

            details: {
                title: '',
                name: '',
                email: '',
                phone: '',
                country: '',
                postal_code: '',
    
                card_number: '',
                card_holder: '',
                expiry_date: '',
            },

            total_cost: 0,
            discount_percentage: 0,
            total_discount: 0,
            final_total: 0,
            final_adventure_cost: 0,
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
    