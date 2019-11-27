document.getElementById('btn-burger').addEventListener('click', function () {
    document.querySelector('.menu-down').classList.toggle('menu-down_active');
});

document.querySelector('.menu').addEventListener('mouseleave', function () {
    document.querySelector('.menu-down').classList.remove('menu-down_active');
});

window.addEventListener('scroll', function () {
    document.querySelector('.menu-down').classList.remove('menu-down_active');
});
