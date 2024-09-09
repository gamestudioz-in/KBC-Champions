let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize slider
showSlide(currentIndex);

function toggleDescription() {
    const moreText = document.getElementById('moreText');
    const dots = document.getElementById('dots');
    const moreBtn = document.getElementById('moreBtn');

    if (moreText.classList.contains('show')) {
        moreText.classList.remove('show');
        dots.style.display = 'inline';
        moreBtn.textContent = 'Show More';
    } else {
        moreText.classList.add('show');
        dots.style.display = 'none';
        moreBtn.textContent = 'Show Less';
    }
}