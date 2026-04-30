# AgroVita - Modern Agro Seed & Fertilizer Website

A modern, responsive website for an agricultural seed and fertilizer company, featuring a clean Apple/Tesla-inspired design with green earthy tones.

## 🌟 Features

### Design
- **Modern UI/UX**: Clean, minimal, premium design inspired by Apple/Tesla
- **Color Palette**: Green and earthy tones perfect for agriculture
- **Responsive**: Fully responsive for mobile, tablet, and desktop
- **Mobile-First**: Optimized for mobile devices first

### Sections
1. **Hero Section**: Full-screen with agriculture imagery and CTA
2. **About Section**: Company introduction with feature icons
3. **Products Section**: Card-based grid with filtering functionality
4. **Why Choose Us**: Benefits showcase with icons
5. **Testimonials**: Farmer feedback cards
6. **Gallery**: Image grid with lightbox effect
7. **Contact Section**: Form with Google Maps integration
8. **Footer**: Quick links and social media

### Interactive Features
- ✅ Sticky navigation bar
- ✅ Smooth scroll animations
- ✅ Product filtering (Seeds, Fertilizers, Crop Protection)
- ✅ Hover effects on cards
- ✅ WhatsApp contact button
- ✅ Scroll to top button
- ✅ Mobile hamburger menu
- ✅ Gallery lightbox
- ✅ Multi-language support (English, Hindi, Gujarati)
- ✅ Fade-in animations on scroll
- ✅ Parallax hero effect

## 🚀 Quick Start

1. **Download the files**:
   - `index.html`
   - `styles.css`
   - `script.js`

2. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - No server or build process required!

3. **Customize**:
   - Edit colors in CSS variables (`:root` section in `styles.css`)
   - Replace images with your own
   - Update text content in `index.html`
   - Modify translations in `script.js`

## 🎨 Color Palette

```css
--primary-green: #2d5016
--secondary-green: #4a7c2c
--light-green: #7fb069
--accent-green: #a7c957
--earth-brown: #6c584c
--light-beige: #f4f1de
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🌐 Multi-Language Support

The website supports three languages:
- **English** (Default)
- **Hindi** (हिंदी)
- **Gujarati** (ગુજરાતી)

Use the language selector in the top-right corner to switch languages.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS for interactivity
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family
- **Unsplash**: Placeholder images

## 📦 Product Categories

1. **Seeds**
   - Hybrid Seeds
   - Vegetable Seeds
   - Cereal Seeds

2. **Fertilizers**
   - Organic Fertilizers
   - NPK Fertilizers
   - Micronutrients

3. **Crop Protection**
   - Bio Pesticides
   - Fungicides
   - Herbicides

## 🔧 Customization Guide

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-green: #your-color;
    --secondary-green: #your-color;
}
```

### Add Products
In `index.html`, duplicate a product card and modify:
```html
<div class="product-card" data-category="seeds">
    <div class="product-image">
        <img src="your-image.jpg" alt="Product Name">
        <div class="product-overlay">
            <button class="product-btn">Learn More</button>
        </div>
    </div>
    <div class="product-info">
        <h3>Product Name</h3>
        <p>Product description</p>
    </div>
</div>
```

### Update Contact Information
Edit the contact section in `index.html`:
- Address
- Phone number
- Email
- Google Maps embed URL

### Add Translations
In `script.js`, add new language in the `translations` object:
```javascript
const translations = {
    en: { ... },
    hi: { ... },
    gu: { ... },
    yourLang: { ... }
};
```

## 📞 Contact Features

- **Contact Form**: Collects name, email, phone, and message
- **WhatsApp Button**: Fixed button for instant messaging
- **Google Maps**: Embedded location map
- **Contact Cards**: Address, phone, and email display

## ⚡ Performance

- Optimized images from Unsplash CDN
- Minimal JavaScript dependencies
- CSS animations using GPU acceleration
- Lazy loading for images (can be added)

## 🌍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is free to use for personal and commercial purposes.

## 🤝 Credits

- **Design Inspiration**: Apple, Tesla
- **Images**: Unsplash
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## 📝 Notes

- Replace placeholder images with actual product photos
- Update Google Maps embed with your actual location
- Configure contact form to send emails (requires backend)
- Add SSL certificate for production deployment
- Optimize images for faster loading
- Consider adding a blog section for SEO

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch
5. Your site will be live!

### Netlify
1. Drag and drop the folder to Netlify
2. Site will be deployed instantly

### Traditional Hosting
1. Upload files via FTP
2. Ensure index.html is in root directory
3. Site is ready!

---

**Made with 🌱 for modern agriculture**
