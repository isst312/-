document.addEventListener('DOMContentLoaded', () => {
    // 텍스트 타이핑 효과
    const typingText = document.querySelector('.typing');
    const cursor = document.querySelector('.cursor');
    const texts = [
        "✨ 바이브에 맞춰 생성 중...",
        "🚀 우주 테마 디자인 적용 중...",
        "✨ 반짝이는 버튼 로직 구현 중...",
        "✅ 완벽한 코드가 작성되었습니다!"
    ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 1500; // 텍스트 완성 후 대기
            if (textIndex === texts.length - 1) {
                isDeleting = false; // 마지막 텍스트는 지우지 않음
                cursor.style.display = 'none'; // 마지막엔 커서 깜빡임 제거 가능 (선택사항)
                return;
            }
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typingSpeed = 500; // 다음 텍스트 시작 전 대기
        }

        setTimeout(typeEffect, typingSpeed);
    }

    setTimeout(typeEffect, 1000);

    // 스무스 스크롤링
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
