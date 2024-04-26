
document.querySelector('.btnghost-3').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; 
    document.getElementById('modal').classList.remove('fadeOut');
    document.getElementById('modal').classList.add('fadeIn');
});


document.querySelectorAll('.close').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', closeModal);
});


window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    var successModal = document.getElementById('success-modal');
    if (event.target == modal || event.target == successModal) {
        closeModal();
    }
});

document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var form = this;
    if (form.checkValidity()) {
        document.getElementById('modal').style.display = 'none'; 
        var successModal = document.getElementById('success-modal');
        successModal.style.display = 'block'; 
        successModal.classList.remove('fadeOut');
        successModal.classList.add('fadeIn');
        document.body.style.overflow = 'hidden'; 
    } else {
        form.reportValidity();
    }
});


function closeModal() {
    var modal = document.getElementById('modal');
    var successModal = document.getElementById('success-modal');
    modal.classList.remove('fadeIn');
    modal.classList.add('fadeOut');
    successModal.classList.remove('fadeIn');
    successModal.classList.add('fadeOut');
    setTimeout(function() {
        modal.style.display = 'none';
        successModal.style.display = 'none';
        document.body.style.overflow = ''; 
    }, 300); 
}

document.getElementById('phone').addEventListener('input', function() {
    var phoneRegex = /^\+?[1-9]\d{1,14}$/;
    if (!phoneRegex.test(this.value)) {
        this.setCustomValidity('Некорректный номер телефона');
    } else {
        this.setCustomValidity('');
    }
});

document.getElementById('surname').addEventListener('input', validateNameInput);
document.getElementById('name').addEventListener('input', validateNameInput);
document.getElementById('patronymic').addEventListener('input', validateNameInput);

function validateNameInput() {
    var nameRegex = /^[А-ЯЁ][а-яё]*$/;
    if (!nameRegex.test(this.value)) {
        this.setCustomValidity('Фамилия, имя и отчество должны начинаться с заглавной буквы и содержать только буквы русского алфавита');
    } else {
        this.setCustomValidity('');
    }
}

document.getElementById('date').addEventListener('input', function() {
    var selectedYear = new Date(this.value).getFullYear();
    if (selectedYear < 2024 || selectedYear > 2077) {
        this.setCustomValidity('Год должен быть от 2024 до 2077');
    } else {
        this.setCustomValidity('');
    }
});


