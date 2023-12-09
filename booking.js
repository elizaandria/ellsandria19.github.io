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
        }
    });

    get_total_adventure_cost(); {
        let total = 0;
        total += this.booking.adventure.number_of_adults_local * 1000;
        total += this.booking.adventure.number_of_adults_foreign * 2000;
        total += this.booking.adventure.number_of_children_local * 500;
        total += this.booking.adventure.number_of_children_foreign * 1000;
        total += this.booking.adventure.adult_guide * 1000;
        total += this.booking.adventure.child_guide * 500;
        this.booking.final_adventure_cost = total;
        return total;
    };

    get_total_cost(); {
        let total = 0;
        total += this.booking.room_cost * this.booking.number_of_rooms;
        total += this.total_adventure_cost;
        this.booking.total_cost = total;

        // calculate discount
        this.booking.total_discount = total * (this.booking.discount_percentage / 100);

        // calculate final total
        this.booking.final_total = total - this.booking.total_discount;

        return total;

    }
})
    