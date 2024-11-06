// 等待 DOM 完全加載
document.addEventListener('DOMContentLoaded', function() {
    // 標題動畫效果
    const title = document.querySelector('.title h1');
    if (title) {
        title.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.02)';
            this.style.textShadow = '4px 4px 8px rgba(32, 22, 15, 0.3)';
        });

        title.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
            this.style.textShadow = '2px 2px 4px rgba(32, 22, 15, 0.2)';
        });
    }


    // BOSS卡片動畫
    const bossCard = document.querySelector('.boss');
    if (bossCard) {
        bossCard.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(32, 22, 15, 0.2)';
        });

        bossCard.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 8px rgba(32, 22, 15, 0.1)';
        });
    }

    // 報告按鈕動畫
    const reportButton = document.querySelector('.report-button');
    if (reportButton) {
        reportButton.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#362A1F';
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(32, 22, 15, 0.3)';
        });

        reportButton.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#20160F';
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });

        reportButton.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(32, 22, 15, 0.3)';
        });

        reportButton.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 8px rgba(32, 22, 15, 0.3)';
        });
    }

    /*
    // Criminal 照片動畫
    const criminalImages = document.querySelectorAll('.infoCard, .infoCardBack');
    criminalImages.forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-10px) rotate(2deg)';
            this.style.boxShadow = '0 8px 16px rgba(32, 22, 15, 0.2)';
        });

        img.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) rotate(0)';
            this.style.boxShadow = '0 4px 8px rgba(32, 22, 15, 0.1)';
        });
    });
    */

//翻轉卡片動畫
    function flipCard(event) {
        const flipCardContainer = event.currentTarget.querySelector(".flipContainer")
        flipCardContainer.classList.toggle("flipped")
    }
    const card = document.querySelectorAll(".Card")
    card.forEach(card => {
    card.addEventListener("click",event=>flipCard(event))
    });


// 頁腳連結動畫
const footerLinks = document.querySelectorAll('.section a');
footerLinks.forEach(link => {
    const underline = document.createElement('div');
    underline.style.position = 'absolute';
    underline.style.bottom = '-5px';
    underline.style.left = '0';
    underline.style.width = '0';
    underline.style.height = '3px'; // 增加線條的粗細
    underline.style.backgroundColor = '#20160F'; // 更改顏色為 #20160F
    underline.style.transition = 'width 0.3s ease';
    
    link.style.position = 'relative';
    link.appendChild(underline);

    link.addEventListener('mouseover', function() {
        underline.style.width = '100%';
    });

    link.addEventListener('mouseout', function() {
        underline.style.width = '0';
    });
});



    // 滾動顯示動畫
    function addScrollAnimation() {
        const elements = document.querySelectorAll('.boss, .infoCard, .infoCardBack');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.8s ease-out';
            observer.observe(element);
        });
    }

    addScrollAnimation();
});