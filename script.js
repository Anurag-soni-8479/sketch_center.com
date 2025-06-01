// const container = document.querySelector('.detail-container')

const btns = document.querySelectorAll('.btns');


// btns.addEventListener('click', ()=>{
//     container.style.display='block'
//     container.style.color = "red"
// })

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


console.log('hello')
