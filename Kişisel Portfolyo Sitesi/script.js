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

function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    const lbTitle = document.getElementById('lb-title');
    const lbDesc = document.getElementById('lb-desc');

    // Tıklanan kartın içindeki bilgileri çekiyoruz
    const imgSrc = element.querySelector('img').src;
    const title = element.querySelector('h3').innerText;
    const desc = element.querySelector('p').innerText;

    // Lightbox içeriğine yerleştiriyoruz
    lbImg.src = imgSrc;
    lbTitle.innerText = title;
    lbDesc.innerText = desc;

    // Görünür yapıyoruz
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Arka plan kaymasını engeller
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto'; // Kaydırmayı geri açar
}
