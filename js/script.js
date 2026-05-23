function nextStep(stepNumber) {
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    document.getElementById(`step-${stepNumber}`).classList.add('active');
    window.scrollTo(0, 0);
}

function startInvitation() {
    const music = document.getElementById('bgMusic');
    const playBtn = document.getElementById('mainPlayBtn');
    
    if (music.paused) {
        music.play();
        playBtn.innerHTML = "⏸";
        // Pequeño delay para que el usuario vea que inició la música antes de cambiar
        setTimeout(() => nextStep(2), 500);
    } else {
        music.pause();
        playBtn.innerHTML = "▶";
    }
}

// LOGICA DEL POP-UP DE IMAGENES
const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');

function openPopup(src) {
    popup.classList.add('open');
    popupImg.src = src;
}

function closePopup() {
    popup.classList.remove('open');
    popupImg.src = ''; // Limpia la imagen para la próxima vez
}

// CUENTA REGRESIVA PERSONALIZADA (Ajusta la fecha aquí)
// Configura aquí la fecha de la boda (Año, Mes-1, Día, Hora, Minutos, Segundos)
// Julio es mes 6 en JavaScript (Enero=0)
const weddingDate = new Date(2026, 6, 18, 15, 0, 0).getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de tiempo (Meses, Días, Horas)
    const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.44)); // Promedio mes
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Selecciona el contenedor
    const countdownEl = document.getElementById("countdown");
    if (countdownEl) {
        countdownEl.innerHTML = `${months} meses, ${days} días y ${hours} horas`;
    }

    // Si la fecha llega a cero
    if (distance < 0) {
        clearInterval(timer);
        if (countdownEl) countdownEl.innerHTML = "¡ES HOY!";
    }
}, 1000);