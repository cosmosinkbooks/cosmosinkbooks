<script>
    let cartCount = 0;
    const cartSection = document.querySelector('.cart p');

    document.querySelectorAll('.book button').forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cartSection.textContent = `${cartCount} item(s) in cart.`;
        });
    });
</script>
