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

document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("fileInput");
    const file = input.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
        alert("File too large! Maximum size is 5MB.");
        return;
    }
    // For demonstration, just show the image preview
    const reader = new FileReader();
    reader.onload = function (event) {
        document.getElementById("preview").innerHTML = `<img src="${event.target.result}" alt="Preview">`;
    };
    reader.readAsDataURL(file);

    // For actual upload:
    // You'd send 'file' to your server via AJAX/fetch here
    // e.g., using fetch or XMLHttpRequest
});

