document.addEventListener('DOMContentLoaded', function() {
    const flowerContainer = document.createElement('div');
    flowerContainer.classList.add('flower-animation');
    document.body.appendChild(flowerContainer);

    let petals = 10;

    for (let i = 0; i < petals; i++) {
        let petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.transform = `rotate(${(i * 360 / petals)}deg) translate(50px)`;
        flowerContainer.appendChild(petal);
    }

    window.addEventListener('scroll', () => {
        let scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        let bloom = Math.min(scrolled * petals, petals);
        document.querySelectorAll('.petal').forEach((petal, index) => {
            if (index < bloom) {
                petal.style.opacity = '1';
                petal.style.transform = `rotate(${(index * 360 / petals)}deg) translate(50px) scale(1)`;
            }
        });
    });
});
