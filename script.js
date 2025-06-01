const btns = document.querySelectorAll('.btns');





btns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const container = document.querySelector('.detail-container');
        // console.log(container)
        container.style.display='block'

        const details = document.querySelectorAll('.details');

        details.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        details.forEach(detail => {
            detail.classList.remove('active');
        });
        details[idx].classList.add('active');
    });
});

// Splash screen hide after 3 seconds
window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        setTimeout(() => {
            splash.style.display = 'none';
        }, 3000);
    }
});

