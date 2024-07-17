document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quantity-control').forEach(control => {
        control.querySelector('.decrease').onclick = () => {
            let qty = control.querySelector('.quantity');
            if (qty.value > 1) qty.value--;
        };
        control.querySelector('.increase').onclick = () => {
            let qty = control.querySelector('.quantity');
            qty.value++;
        };
    });
});
