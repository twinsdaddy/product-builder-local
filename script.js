function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (currentTheme === 'dark') {
        body.removeAttribute('data-theme');
        themeIcon.innerText = '☀️';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeIcon.innerText = '🌙';
        localStorage.setItem('theme', 'dark');
    }
}

// 초기 테마 설정
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        const themeIcon = document.getElementById('themeIcon');
        if (themeIcon) themeIcon.innerText = '🌙';
    }
    
    // 로또 결과 창이 있는 경우에만 번호 생성
    if (document.getElementById('result')) {
        generateLotto();
    }
});

function generateLotto() {
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.sort((a, b) => a - b);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    numbers.forEach((num, index) => {
        setTimeout(() => {
            const ball = document.createElement('div');
            ball.className = `lotto-ball ${getBallColorClass(num)}`;
            ball.innerText = num;
            resultDiv.appendChild(ball);
        }, index * 100);
    });
}

function getBallColorClass(num) {
    if (num <= 10) return 'ball-1';
    if (num <= 20) return 'ball-11';
    if (num <= 30) return 'ball-21';
    if (num <= 40) return 'ball-31';
    return 'ball-41';
}
