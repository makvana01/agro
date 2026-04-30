// ===== Multi-language Support =====
const translations = {
    en: {
        'hero-title': 'Growing the Future of Farming',
        'hero-subtitle': 'High-quality seeds and sustainable solutions for modern agriculture',
        'cta-explore': 'Explore Products',
        'about-title': 'About AgroVita',
        'about-subtitle': 'Empowering farmers with innovative agricultural solutions',
        'about-text': 'At AgroVita, we are committed to revolutionizing agriculture through cutting-edge research and sustainable practices. With over two decades of experience, we provide farmers with premium quality seeds, fertilizers, and crop protection solutions that maximize yield while preserving the environment.',
        'feature-innovation': 'Innovation',
        'feature-innovation-text': 'Research-driven solutions for modern farming challenges',
        'feature-quality': 'Quality',
        'feature-quality-text': 'Premium products tested for superior performance',
        'feature-trust': 'Trust',
        'feature-trust-text': 'Trusted by thousands of farmers nationwide',
        'products-title': 'Our Products',
        'products-subtitle': 'Comprehensive solutions for every farming need',
        'filter-all': 'All Products',
        'filter-seeds': 'Seeds',
        'filter-fertilizers': 'Fertilizers',
        'filter-crop': 'Crop Protection',
        'btn-learn-more': 'Learn More',
        'why-title': 'Why Choose AgroVita',
        'why-subtitle': 'Your trusted partner in agricultural excellence',
        'benefit-yield': 'High Yield',
        'benefit-yield-text': 'Our products consistently deliver 30-40% higher yields compared to conventional alternatives',
        'benefit-research': 'Research Based',
        'benefit-research-text': 'Backed by extensive R&D and field trials across diverse climatic conditions',
        'benefit-trusted': 'Trusted by Farmers',
        'benefit-trusted-text': 'Over 50,000 satisfied farmers across the country rely on our products',
        'benefit-sustainable': 'Sustainable',
        'benefit-sustainable-text': 'Environmentally responsible solutions that protect soil health and biodiversity',
        'testimonials-title': 'What Farmers Say',
        'testimonials-subtitle': 'Real stories from real farmers',
        'gallery-title': 'Our Impact',
        'gallery-subtitle': 'Witness the transformation in fields across the nation',
        'contact-title': 'Get In Touch',
        'contact-subtitle': "We're here to help you grow",
        'form-name': 'Your Name',
        'form-email': 'Email Address',
        'form-phone': 'Phone Number',
        'form-message': 'Your Message',
        'form-submit': 'Send Message',
        'info-address-title': 'Address',
        'info-address': '123 Agriculture Park, Green Valley, Mumbai - 400001',
        'info-phone-title': 'Phone',
        'info-email-title': 'Email',
        'footer-tagline': 'Growing the Future of Farming',
        'footer-quick-links': 'Quick Links',
        'footer-products-title': 'Products',
        'footer-support': 'Support',
        'footer-rights': 'All rights reserved.'
    },
    hi: {
        'hero-title': 'खेती के भविष्य को बढ़ाना',
        'hero-subtitle': 'आधुनिक कृषि के लिए उच्च गुणवत्ता वाले बीज और टिकाऊ समाधान',
        'cta-explore': 'उत्पाद देखें',
        'about-title': 'एग्रोविटा के बारे में',
        'about-subtitle': 'नवीन कृषि समाधानों के साथ किसानों को सशक्त बनाना',
        'about-text': 'एग्रोविटा में, हम अत्याधुनिक अनुसंधान और टिकाऊ प्रथाओं के माध्यम से कृषि में क्रांति लाने के लिए प्रतिबद्ध हैं। दो दशकों से अधिक के अनुभव के साथ, हम किसानों को प्रीमियम गुणवत्ता वाले बीज, उर्वरक और फसल सुरक्षा समाधान प्रदान करते हैं।',
        'feature-innovation': 'नवाचार',
        'feature-innovation-text': 'आधुनिक खेती की चुनौतियों के लिए अनुसंधान-संचालित समाधान',
        'feature-quality': 'गुणवत्ता',
        'feature-quality-text': 'बेहतर प्रदर्शन के लिए परीक्षित प्रीमियम उत्पाद',
        'feature-trust': 'विश्वास',
        'feature-trust-text': 'देश भर में हजारों किसानों द्वारा विश्वसनीय',
        'products-title': 'हमारे उत्पाद',
        'products-subtitle': 'हर खेती की जरूरत के लिए व्यापक समाधान',
        'filter-all': 'सभी उत्पाद',
        'filter-seeds': 'बीज',
        'filter-fertilizers': 'उर्वरक',
        'filter-crop': 'फसल सुरक्षा',
        'btn-learn-more': 'और जानें',
        'why-title': 'एग्रोविटा क्यों चुनें',
        'why-subtitle': 'कृषि उत्कृष्टता में आपका विश्वसनीय साथी',
        'benefit-yield': 'उच्च उपज',
        'benefit-yield-text': 'हमारे उत्पाद पारंपरिक विकल्पों की तुलना में लगातार 30-40% अधिक उपज देते हैं',
        'benefit-research': 'अनुसंधान आधारित',
        'benefit-research-text': 'विविध जलवायु परिस्थितियों में व्यापक अनुसंधान और क्षेत्र परीक्षणों द्वारा समर्थित',
        'benefit-trusted': 'किसानों द्वारा विश्वसनीय',
        'benefit-trusted-text': 'देश भर में 50,000 से अधिक संतुष्ट किसान हमारे उत्पादों पर भरोसा करते हैं',
        'benefit-sustainable': 'टिकाऊ',
        'benefit-sustainable-text': 'पर्यावरण के अनुकूल समाधान जो मिट्टी के स्वास्थ्य और जैव विविधता की रक्षा करते हैं',
        'testimonials-title': 'किसान क्या कहते हैं',
        'testimonials-subtitle': 'वास्तविक किसानों की वास्तविक कहानियां',
        'gallery-title': 'हमारा प्रभाव',
        'gallery-subtitle': 'देश भर के खेतों में परिवर्तन देखें',
        'contact-title': 'संपर्क करें',
        'contact-subtitle': 'हम आपकी मदद के लिए यहां हैं',
        'form-name': 'आपका नाम',
        'form-email': 'ईमेल पता',
        'form-phone': 'फोन नंबर',
        'form-message': 'आपका संदेश',
        'form-submit': 'संदेश भेजें',
        'info-address-title': 'पता',
        'info-address': '123 कृषि पार्क, ग्रीन वैली, मुंबई - 400001',
        'info-phone-title': 'फोन',
        'info-email-title': 'ईमेल',
        'footer-tagline': 'खेती के भविष्य को बढ़ाना',
        'footer-quick-links': 'त्वरित लिंक',
        'footer-products-title': 'उत्पाद',
        'footer-support': 'सहायता',
        'footer-rights': 'सर्वाधिकार सुरक्षित।'
    },
    gu: {
        'hero-title': 'ખેતીના ભવિષ્યને વધારવું',
        'hero-subtitle': 'આધુનિક કૃષિ માટે ઉચ્ચ ગુણવત્તાવાળા બીજ અને ટકાઉ ઉકેલો',
        'cta-explore': 'ઉત્પાદનો જુઓ',
        'about-title': 'એગ્રોવિટા વિશે',
        'about-subtitle': 'નવીન કૃષિ ઉકેલો સાથે ખેડૂતોને સશક્ત બનાવવું',
        'about-text': 'એગ્રોવિટા ખાતે, અમે અત્યાધુનિક સંશોધન અને ટકાઉ પ્રથાઓ દ્વારા કૃષિમાં ક્રાંતિ લાવવા માટે પ્રતિબદ્ધ છીએ। બે દાયકાથી વધુના અનુભવ સાથે, અમે ખેડૂતોને પ્રીમિયમ ગુણવત્તાવાળા બીજ, ખાતર અને પાક સંરક્ષણ ઉકેલો પ્રદાન કરીએ છીએ।',
        'feature-innovation': 'નવીનતા',
        'feature-innovation-text': 'આધુનિક ખેતીના પડકારો માટે સંશોધન-સંચાલિત ઉકેલો',
        'feature-quality': 'ગુણવત્તા',
        'feature-quality-text': 'શ્રેષ્ઠ પ્રદર્શન માટે પરીક્ષણ કરેલ પ્રીમિયમ ઉત્પાદનો',
        'feature-trust': 'વિશ્વાસ',
        'feature-trust-text': 'દેશભરના હજારો ખેડૂતો દ્વારા વિશ્વસનીય',
        'products-title': 'અમારા ઉત્પાદનો',
        'products-subtitle': 'દરેક ખેતીની જરૂરિયાત માટે વ્યાપક ઉકેલો',
        'filter-all': 'બધા ઉત્પાદનો',
        'filter-seeds': 'બીજ',
        'filter-fertilizers': 'ખાતર',
        'filter-crop': 'પાક સંરક્ષણ',
        'btn-learn-more': 'વધુ જાણો',
        'why-title': 'એગ્રોવિટા શા માટે પસંદ કરો',
        'why-subtitle': 'કૃષિ ઉત્કૃષ્ટતામાં તમારા વિશ્વસનીય ભાગીદાર',
        'benefit-yield': 'ઉચ્ચ ઉપજ',
        'benefit-yield-text': 'અમારા ઉત્પાદનો પરંપરાગત વિકલ્પોની તુલનામાં સતત 30-40% વધુ ઉપજ આપે છે',
        'benefit-research': 'સંશોધન આધારિત',
        'benefit-research-text': 'વિવિધ આબોહવા પરિસ્થિતિઓમાં વ્યાપક સંશોધન અને ક્ષેત્ર પરીક્ષણો દ્વારા સમર્થિત',
        'benefit-trusted': 'ખેડૂતો દ્વારા વિશ્વસનીય',
        'benefit-trusted-text': 'દેશભરમાં 50,000 થી વધુ સંતુષ્ટ ખેડૂતો અમારા ઉત્પાદનો પર વિશ્વાસ કરે છે',
        'benefit-sustainable': 'ટકાઉ',
        'benefit-sustainable-text': 'પર્યાવરણને અનુકૂળ ઉકેલો જે માટીના સ્વાસ્થ્ય અને જૈવવિવિધતાનું રક્ષણ કરે છે',
        'testimonials-title': 'ખેડૂતો શું કહે છે',
        'testimonials-subtitle': 'વાસ્તવિક ખેડૂતોની વાસ્તવિક વાર્તાઓ',
        'gallery-title': 'અમારી અસર',
        'gallery-subtitle': 'સમગ્ર દેશમાં ખેતરોમાં પરિવર્તન જુઓ',
        'contact-title': 'સંપર્ક કરો',
        'contact-subtitle': 'અમે તમને મદદ કરવા માટે અહીં છીએ',
        'form-name': 'તમારું નામ',
        'form-email': 'ઈમેલ સરનામું',
        'form-phone': 'ફોન નંબર',
        'form-message': 'તમારો સંદેશ',
        'form-submit': 'સંદેશ મોકલો',
        'info-address-title': 'સરનામું',
        'info-address': '123 કૃષિ પાર્ક, ગ્રીન વેલી, મુંબઈ - 400001',
        'info-phone-title': 'ફોન',
        'info-email-title': 'ઈમેલ',
        'footer-tagline': 'ખેતીના ભવિષ્યને વધારવું',
        'footer-quick-links': 'ઝડપી લિંક્સ',
        'footer-products-title': 'ઉત્પાદનો',
        'footer-support': 'સહાય',
        'footer-rights': 'બધા અધિકારો અનામત છે।'
    }
};

// Language Switcher
const languageSwitch = document.getElementById('languageSwitch');
languageSwitch.addEventListener('change', (e) => {
    const lang = e.target.value;
    changeLanguage(lang);
});

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// ===== Sticky Navigation =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Product Filter =====
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        productCards.forEach(card => {
            if (filterValue === 'all') {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                const category = card.getAttribute('data-category');
                if (category === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    });
});

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe elements for scroll animation
const animateElements = document.querySelectorAll('.feature-card, .product-card, .benefit-card, .testimonial-card, .gallery-item');
animateElements.forEach(el => {
    el.classList.add('scroll-animate');
    observer.observe(el);
});

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, phone, message });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Gallery Lightbox Effect =====
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        
        // Add styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.95);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            .lightbox-content img {
                max-width: 100%;
                max-height: 90vh;
                object-fit: contain;
            }
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                font-size: 40px;
                color: white;
                cursor: pointer;
                transition: transform 0.3s ease;
            }
            .lightbox-close:hover {
                transform: scale(1.2);
            }
        `;
        document.head.appendChild(style);
        
        // Close lightbox
        const closeBtn = lightbox.querySelector('.lightbox-close');
        closeBtn.addEventListener('click', () => {
            lightbox.remove();
            style.remove();
            document.body.style.overflow = 'auto';
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.remove();
                style.remove();
                document.body.style.overflow = 'auto';
            }
        });
    });
});

// ===== Counter Animation for Stats (Optional Enhancement) =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== Initialize =====
console.log('AgroVita Website Loaded Successfully! 🌱');
