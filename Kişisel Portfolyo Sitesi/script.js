// Sayfadaki menü ikonunu (hamburger menü) seçip 'menuIcon' değişkenine atadım.
let menuIcon = document.querySelector('#menu-icon');

// Menü tıklandığında açılacak olan navigasyon panelini seçip 'navbar' değişkenine koydum.
let navbar = document.querySelector('.navbar');

// Menü ikonuna her tıklandığında çalışacak bir fonksiyon başlattım.
menuIcon.onclick = () => {
    
    // Menü ikonuna 'bx-x' sınıfını ekleyip çıkarıyorum; 
    // Yani üç çizgi halindeki ikonun 'X' işaretine dönüşmesini veya tam tersini sağlıyorum.
    menuIcon.classList.toggle('bx-x');
    
    // Menü panelimize 'active' sınıfını ekleyip çıkarıyorum;
    // CSS'de yazdığım 'active' kuralları sayesinde menünün sağdan/soldan kayarak gelmesini sağlıyorum.
    navbar.classList.toggle('active');

};



/**
 * Fotoğraf Lightbox'ı açan fonksiyon
 * @param {HTMLElement} element - Tıklanan album-card div'i
 */
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbTitle = document.getElementById('lb-title');
    const lbDesc = document.getElementById('lb-desc');

    // HTML yapından verileri çekiyoruz
    const imgSrc = element.querySelector('img').src;
    const title = element.querySelector('h3').innerText;
    
    // Açıklama olarak tarihi (album-date) kullanıyoruz
    const date = element.querySelector('.album-date').innerText;

    // Verileri aktar
    lbImg.src = imgSrc;
    lbTitle.innerText = title;
    lbDesc.innerText = "Çekim Tarihi: " + date;

    // Görünür yap
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ESC ile kapatma
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});




/**
 * Sertifika Lightbox'ı açan fonksiyon
 * @param {HTMLElement} element - Tıklanan cert-item div'i
 */
function openCertLightbox(element) {
    const lightbox = document.getElementById('cert-lightbox');
    const lbImg = document.getElementById('cert-lightbox-img');
    const lbTitle = document.getElementById('cert-lb-title');
    const lbDesc = document.getElementById('cert-lb-desc');

    // Resim kaynağını al
    const imgSrc = element.querySelector('img').src;
    
    // Başlığı al (h4 etiketi)
    const title = element.querySelector('.cert-details h4').innerText;

    // Alt bilgiyi al (span etiketi)
    const spanElement = element.querySelector('.cert-details span');
    const desc = spanElement ? spanElement.innerText : "";

    // Verileri Lightbox içerisine aktar
    lbImg.src = imgSrc;
    lbTitle.innerText = title;
    lbDesc.innerText = desc;

    // Lightbox'ı görünür yap
    lightbox.style.display = 'flex';
    
    // Sayfanın arkada kaymasını engelle
    document.body.style.overflow = 'hidden';
}

/**
 * Sertifika Lightbox'ı kapatan fonksiyon
 */
function closeCertLightbox() {
    const lightbox = document.getElementById('cert-lightbox');
    lightbox.style.display = 'none';
    
    // Sayfa kaydırmasını tekrar aktif et
    document.body.style.overflow = 'auto';
}

// ESC tuşuna basınca kapatma özelliği
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        closeCertLightbox();
    }
});




