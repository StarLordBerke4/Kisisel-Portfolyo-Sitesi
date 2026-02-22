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
 * Lightbox'ı açan fonksiyon
 * @param {HTMLElement} element - Tıklanan album-card div'i
 */
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbTitle = document.getElementById('lb-title');
    const lbDesc = document.getElementById('lb-desc');

    // Resim kaynağını (src) al
    const imgSrc = element.querySelector('img').src;
    
    // Başlığı al (h3 etiketi)
    const title = element.querySelector('h3').innerText;

    // AÇIKLAMA KONTROLÜ (Hatanın kaynağı burasıydı):
    // Eğer kartın içinde <p> etiketi varsa metni al, yoksa boş bırak veya tarihi al
    const pElement = element.querySelector('.album-info p') || element.querySelector('.album-date');
    const desc = pElement ? pElement.innerText : "";

    // Lightbox içerisine verileri aktar
    lbImg.src = imgSrc;
    lbTitle.innerText = title;
    lbDesc.innerText = desc;

    // Lightbox'ı görünür yap (CSS'deki display: none'ı flex yapar)
    lightbox.style.display = 'flex';
    
    // Sayfanın arkada kaymasını engelle
    document.body.style.overflow = 'hidden';
}

/**
 * Lightbox'ı kapatan fonksiyon
 */
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // Lightbox'ı tekrar gizle
    lightbox.style.display = 'none';
    
    // Sayfa kaydırmasını tekrar aktif et
    document.body.style.overflow = 'auto';
}

// Opsiyonel: 'ESC' tuşuna basınca kapatma özelliği
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        closeLightbox();
    }
});

