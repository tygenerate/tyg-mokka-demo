
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Coffee,
  CupSoda,
  Heart,
  MapPin,
  Menu,
  ShoppingBag,
  Sparkles,
  UtensilsCrossed,
  Wheat,
  X,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const menuCategories = [
  { id: "hepsi", label: "Tüm Menü" },
  { id: "kahve", label: "Kahveler" },
  { id: "kahvalti", label: "Kahvaltı" },
  { id: "yemek", label: "Yemekler" },
  { id: "tatli", label: "Tatlılar" },
];

const menuItems = [
  {
    name: "Caramel Latte",
    category: "kahve",
    categoryLabel: "ÖZEL KAHVELER",
    description: "Espresso, süt ve karamelin yumuşak uyumu.",
    price: "₺165",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mokka Signature",
    category: "kahve",
    categoryLabel: "ÖZEL KAHVELER",
    description: "Çikolata notalarıyla hazırlanan özel kahve.",
    price: "₺185",
    image:
      "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Güne Başlangıç",
    category: "kahvalti",
    categoryLabel: "KAHVALTI",
    description: "Taze ekmek, yumurta ve kahvaltılık lezzetler.",
    price: "₺340",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Avokadolu Toast",
    category: "kahvalti",
    categoryLabel: "KAHVALTI",
    description: "Kızarmış ekmek üzerinde avokado ve taze yeşillikler.",
    price: "₺265",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Mokka Burger",
    category: "yemek",
    categoryLabel: "MUTFAKTAN",
    description: "Özel sos, köfte ve çıtır patates eşliğinde.",
    price: "₺395",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Creamy Pasta",
    category: "yemek",
    categoryLabel: "MUTFAKTAN",
    description: "Kremalı sos ve parmesanla hazırlanan makarna.",
    price: "₺325",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "San Sebastian",
    category: "tatli",
    categoryLabel: "TATLI MOLASI",
    description: "Yoğun kıvamlı cheesecake, çikolata sosuyla.",
    price: "₺245",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Çikolatalı Brownie",
    category: "tatli",
    categoryLabel: "TATLI MOLASI",
    description: "Yoğun çikolatalı brownie ve dondurma.",
    price: "₺225",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
  },
];

const gallery = [
  {
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85",
    title: "KAHVE TUTKUSU",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=85",
    title: "MOKKA ATMOSFERİ",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
    title: "GÜNÜN KEYFİ",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("hepsi");

  const filteredItems =
    activeCategory === "hepsi"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const openDemo = () => {
    setMenuOpen(false);
    setDemoOpen(true);
  };

  useEffect(() => {
    if (!demoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDemoOpen(false);
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [demoOpen]);

  return (
    <main>
      {/* DUYURU */}
      <div className="announcement">
        <Coffee size={14} />
        GÜZEL ANLAR, İYİ KAHVEYLE BAŞLAR.
        <Coffee size={14} />
      </div>

      {/* NAVBAR */}
      <header className="site-header">
        <div className="container nav-inner">
          <a
            href="#anasayfa"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-icon">
              <Coffee size={26} strokeWidth={1.7} />
            </span>
            <span className="brand-text">
              MOKKA<span>.</span>
              <small>COFFEE & KITCHEN</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#anasayfa" onClick={() => setMenuOpen(false)}>
              Ana Sayfa
            </a>
            <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>
              Hikâyemiz
            </a>
            <a href="#menu" onClick={() => setMenuOpen(false)}>
              Menü
            </a>
            <a href="#galeri" onClick={() => setMenuOpen(false)}>
              Galeri
            </a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>
              İletişim
            </a>
          </nav>

          <button className="nav-cta" type="button" onClick={openDemo}>
            MASA AYIRT
            <ArrowUpRight size={17} />
          </button>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section" id="anasayfa">
        <div className="hero-background">
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=90"
            alt="Taze hazırlanmış kahve"
          />
          <div className="hero-overlay" />
        </div>

        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-eyebrow">
              <span />
              COFFEE · FOOD · GOOD MOMENTS
            </span>

            <h1>
              BİR FİNCAN
              <br />
              KAHVE,
              <br />
              <em>BİN GÜZEL AN.</em>
            </h1>

            <p>
              Özenle hazırlanan kahveler, taze lezzetler
              ve kendinizi iyi hissedeceğiniz bir atmosfer.
              Mokka'da her mola, günün en güzel anına dönüşür.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="button button-primary">
                MENÜYÜ KEŞFET
                <ArrowUpRight size={19} />
              </a>

              <a href="#hakkimizda" className="button button-outline">
                HİKÂYEMİZ
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="container hero-bottom">
          <a href="#hakkimizda">
            AŞAĞI KAYDIR
            <ArrowDown size={17} />
          </a>
          <span>EST. 2026 — MOKKA COFFEE & KITCHEN (DEMO)</span>
        </div>
      </section>

      {/* ÖZELLİK ŞERİDİ */}
      <section className="feature-strip">
        <div className="container feature-grid">
          <div>
            <Coffee size={25} strokeWidth={1.5} />
            <span>ÖZENLE HAZIRLANAN KAHVELER</span>
          </div>
          <div>
            <Wheat size={25} strokeWidth={1.5} />
            <span>TAZE LEZZETLER</span>
          </div>
          <div>
            <Heart size={25} strokeWidth={1.5} />
            <span>SICAK ATMOSFER</span>
          </div>
          <div>
            <UtensilsCrossed size={25} strokeWidth={1.5} />
            <span>KEYİFLİ SOFRALAR</span>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section className="about-section section-padding" id="hakkimizda">
        <div className="container about-grid">
          <motion.div
            className="about-images"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              className="about-main-image"
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1100&q=85"
              alt="Sıcak ve modern kafe ortamı"
            />
            <div className="about-badge">
              <Coffee size={27} />
              <span>
                KAHVEYLE
                <br />
                GÜZELLEŞEN
                <br />
                ANLAR
              </span>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">MOKKA'NIN HİKÂYESİ</span>

            <h2>
              SADECE KAHVE
              <br />
              DEĞİL,
              <br />
              <em>BİR YAŞAM MOLASI.</em>
            </h2>

            <p>
              Mokka Coffee & Kitchen, günün temposuna kısa
              bir ara vermek, sevdiklerinizle bir araya gelmek
              ve iyi hazırlanmış lezzetlerin tadını çıkarmak
              için tasarlanmış bir buluşma noktasıdır.
            </p>

            <p>
              Kahvenin kokusundan mutfağın sıcaklığına,
              mekânın her köşesinde samimi ve özenli bir
              deneyim sunmayı hedefliyoruz. Bizim için
              önemli olan yalnızca ne sunduğumuz değil,
              burada nasıl hissettiğiniz.
            </p>

            <p>
              İster güne güzel bir kahvaltıyla başlayın,
              ister arkadaşlarınızla kahve molası verin.
              Mokka'da her anın kendine ait bir tadı var.
            </p>

            <a href="#menu" className="text-link">
              LEZZETLERİMİZİ KEŞFEDİN
              <ArrowUpRight size={19} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* MENÜ */}
      <section className="menu-section section-padding" id="menu">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">MOKKA MENÜ</span>
              <h2>
                HER DAMAKTA
                <br />
                <em>GÜZEL BİR İZ.</em>
              </h2>
            </div>

            <p>
              Günün her saatine eşlik eden kahveler
              ve mutfağımızdan seçme lezzetler.
            </p>
          </div>

          <div className="menu-filters">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={
                  activeCategory === category.id
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <motion.div layout className="menu-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.article
                  layout
                  key={item.name}
                  className="menu-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="menu-card-image">
                    <img src={item.image} alt={item.name} />
                    <span>ÖRNEK MENÜ</span>
                  </div>

                  <div className="menu-card-content">
                    <span className="menu-category">
                      {item.categoryLabel}
                    </span>

                    <h3>{item.name}</h3>
                    <p>{item.description}</p>

                    <div className="menu-card-bottom">
                      <strong>{item.price}</strong>
                      <button
                        type="button"
                        onClick={openDemo}
                        aria-label={`${item.name} hakkında bilgi`}
                      >
                        <ArrowUpRight size={20} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <p className="menu-disclaimer">
            * Menüdeki ürünler, fiyatlar ve görseller örnek amaçlıdır.
            Gerçek sipariş veya ödeme işlemi yapılmamaktadır.
          </p>
        </div>
      </section>

      {/* ARA BANNER */}
      <section className="statement-section">
        <div className="statement-background">
          <img
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1800&q=85"
            alt="Kafe atmosferi"
          />
        </div>
        <div className="container statement-content">
          <span className="section-eyebrow">MOKKA COFFEE & KITCHEN</span>
          <h2>
            EN GÜZEL
            <br />
            SOHBETLER,
            <br />
            <em>BİR KAHVEYLE BAŞLAR.</em>
          </h2>
          <a href="#galeri">
            ATMOSFERİ KEŞFET
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* GALERİ */}
      <section className="gallery-section section-padding" id="galeri">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">MOKKA'DAN KARELER</span>
              <h2>
                HER KÖŞEDE
                <br />
                <em>AYRI BİR HİKÂYE.</em>
              </h2>
            </div>
            <p>
              Kahvenin, lezzetin ve keyifli anların
              bir araya geldiği atmosfer.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <motion.div
                className="gallery-item"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="gallery-disclaimer">
            * Görseller örnek bir kafe atmosferini temsil eder;
            gerçek bir Mokka işletmesine ait değildir.
          </p>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section className="contact-section section-padding" id="iletisim">
        <div className="container contact-grid">
          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">BİZE UĞRAYIN</span>
            <h2>
              GÜZEL BİR
              <br />
              KAHVE İÇİN
              <br />
              <em>YERİNİZ HAZIR.</em>
            </h2>

            <p>
              Kahvenizi yudumlamak, lezzetli bir yemek
              yemek veya sevdiklerinizle keyifli zaman
              geçirmek için Mokka atmosferini keşfedin.
              Bu bölüm örnek işletme deneyimini göstermektedir.
            </p>

            <button
              className="button button-primary"
              type="button"
              onClick={openDemo}
            >
              MASA AYIRT
              <CalendarDays size={18} />
            </button>
          </motion.div>

          <div className="contact-card">
            <div className="contact-card-heading">
              <Clock3 size={24} strokeWidth={1.5} />
              <h3>ÇALIŞMA SAATLERİ</h3>
            </div>

            <div className="hours-row">
              <span>Pazartesi – Cuma</span>
              <strong>08.30 – 23.00</strong>
            </div>

            <div className="hours-row">
              <span>Cumartesi</span>
              <strong>09.00 – 00.00</strong>
            </div>

            <div className="hours-row">
              <span>Pazar</span>
              <strong>09.00 – 23.00</strong>
            </div>

            <div className="contact-location">
              <MapPin size={19} />
              <span>Örnek Konum, Türkiye</span>
            </div>

            <small>
              * Çalışma saatleri ve konum bilgileri örnektir.
              Bu demo üzerinden gerçek rezervasyon yapılamaz.
            </small>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-about">
            <a href="#anasayfa" className="brand footer-brand">
              <span className="brand-icon">
                <Coffee size={26} strokeWidth={1.7} />
              </span>
              <span className="brand-text">
                MOKKA<span>.</span>
                <small>COFFEE & KITCHEN</small>
              </span>
            </a>

            <p>
              Bir fincan kahve, güzel bir sohbet
              ve unutulmaz anlar. Mokka'da hayatın
              küçük mutluluklarına yer var.
            </p>

            <small>
              TYGenerate tarafından hazırlanmış
              örnek kafe ve restoran web sitesi.
            </small>
          </div>

          <div className="footer-links">
            <h4>KEŞFEDİN</h4>
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#hakkimizda">Hikâyemiz</a>
            <a href="#menu">Menü</a>
            <a href="#galeri">Galeri</a>
            <a href="#iletisim">İletişim</a>
          </div>

          <div className="footer-links">
            <h4>İLETİŞİM</h4>
            <span><MapPin size={16} /> Örnek Konum, Türkiye</span>
            <span><Clock3 size={16} /> Örnek çalışma saatleri</span>
            <a
              href="https://instagram.com/tygenerate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={16} />
              TYGenerate Instagram
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2026 Mokka Coffee & Kitchen — Demo Web Sitesi</span>
          <span>DESIGNED BY <strong>TYGENERATE</strong></span>
        </div>
      </footer>

      {/* DEMO BİLGİLENDİRME MODALI */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDemoOpen(false)}
          >
            <motion.div
              className="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-modal-title"
              initial={{ opacity: 0, y: 25, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 25, scale: 0.96 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                aria-label="Pencereyi kapat"
                onClick={() => setDemoOpen(false)}
              >
                <X size={22} />
              </button>

              <div className="modal-icon">
                <Coffee size={35} strokeWidth={1.5} />
              </div>

              <span className="section-eyebrow">
                TYGENERATE DEMO PROJESİ
              </span>

              <h2 id="demo-modal-title">
                BU BİR <em>DEMO</em> SİTEDİR.
              </h2>

              <p>
                Mokka Coffee & Kitchen, TYGenerate tarafından
                hazırlanmış örnek bir kafe ve restoran
                web sitesi tasarımıdır.
              </p>

              <p>
                Menü, fiyatlar, rezervasyon ve iletişim
                özellikleri tanıtım amaçlıdır. Gerçek
                bir işletme için bu özellikler ihtiyaca
                göre geliştirilebilir.
              </p>

              <button
                className="button button-primary"
                type="button"
                onClick={() => setDemoOpen(false)}
              >
                ANLADIM
                <ArrowRight size={18} />
              </button>

              <small>
                DESIGNED BY <strong>TYGENERATE</strong>
              </small>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
