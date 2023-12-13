document.addEventListener('alpine:init', () => {
    Alpine.data('bookingForm', () => ({
        tab: 1,
        showcontent: false,
        loyalty_points: 100, // Update this with actual loyalty points

        booking: {
            room_cost: 0,
            checkin: '',
            checkout: '',
            number_of_rooms: 0,
            number_of_adults: 0,
            number_of_children: 0,
            extra_bed: 0,
            adventure: {
                number_of_adults_local: 0,
                number_of_children_local: 0,
                number_of_adults_foreign: 0,
                number_of_children_foreign: 0,
                adult_guide: 0,
                child_guide: 0,
            },
            promo_code: '',
            total_discount: 0,
            final_total: 0,
            name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            country: '',
            postal_code: '',
            card_number: '',
            card_holder: '',
            expiry_date: '',
        },

        total_adventure_cost: 0,

        get total_cost() {
            return (
                this.booking.room_cost * this.booking.number_of_rooms +
                this.total_adventure_cost
            );
        },

        goToCheckout() {
            this.tab = 2;
        },

        completeBooking() {
            // Implement your booking logic here
            console.log('Booking Completed:', this.booking);
        },

        addToFavorites() {
            // Implement logic to add booking to favorites
            console.log('Added to Favorites:', this.booking);
        },

        bookFavorite(index) {
            // Implement logic to book a favorite
            console.log('Book Now:', this.favorites[index]);
        },
    }));
});
