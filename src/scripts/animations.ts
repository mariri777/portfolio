import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function splitChars(el: HTMLElement) {
  const text = el.textContent || '';
  const frag = document.createDocumentFragment();
  let wrap: HTMLSpanElement | null = null;
  for (const char of Array.from(text)) {
    if (char === ' ') {
      frag.appendChild(document.createTextNode(' '));
      wrap = null;
      continue;
    }
    if (!wrap) {
      wrap = document.createElement('span');
      wrap.className = 'split-wrap';
      frag.appendChild(wrap);
    }
    const span = document.createElement('span');
    span.className = 'split-char';
    span.textContent = char;
    wrap.appendChild(span);
  }
  el.textContent = '';
  el.appendChild(frag);
  return el.querySelectorAll<HTMLElement>('.split-char');
}

export function initAnimations() {
  // Preloader
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const tl = gsap.timeline({
      onComplete: () => {
        preloader.style.display = 'none';
        playHero();
      },
    });
    const paths = preloader.querySelectorAll<SVGPathElement | SVGCircleElement>('svg path, svg circle');
    paths.forEach((p) => {
      const len = 'getTotalLength' in p ? (p as any).getTotalLength() : 300;
      p.style.strokeDasharray = String(len);
      p.style.strokeDashoffset = String(len);
    });
    tl.to(paths, { strokeDashoffset: 0, duration: 1.0, ease: 'power2.inOut', stagger: 0.08 });
    tl.to('#pl-label', { opacity: 1, duration: 0.4 }, '-=0.3');
    tl.to(preloader, { opacity: 0, duration: 0.6, ease: 'power2.inOut', delay: 0.2 });
  } else {
    playHero();
  }

  function playHero() {
    // Hero reveal
    const heroInners = document.querySelectorAll<HTMLElement>('[data-hero-heading] .reveal-inner');
    gsap.set(heroInners, { yPercent: 110 });
    gsap.to(heroInners, {
      yPercent: 0,
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.08,
      delay: 0.1,
    });

    // Hero image reveal
    const heroImg = document.querySelector<HTMLImageElement>('[data-parallax]');
    if (heroImg) {
      gsap.to(heroImg, {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.3,
        ease: 'power3.out',
        delay: 0.4,
      });
    }
  }

  // Nav shrink on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    ScrollTrigger.create({
      start: 100,
      end: 99999,
      onUpdate: (self) => {
        if (self.progress > 0) {
          nav.classList.add('is-scrolled');
          nav.style.backgroundColor = 'rgba(253,246,242,0.75)';
          nav.style.backdropFilter = 'saturate(180%) blur(10px)';
          (nav.style as any).webkitBackdropFilter = 'saturate(180%) blur(10px)';
        } else {
          nav.classList.remove('is-scrolled');
          nav.style.backgroundColor = 'transparent';
          nav.style.backdropFilter = 'none';
          (nav.style as any).webkitBackdropFilter = 'none';
        }
      },
    });
  }

  // Marquee auto-scroll
  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((track) => {
    const total = track.scrollWidth / 2;
    gsap.to(track, {
      x: -total,
      duration: 28,
      ease: 'none',
      repeat: -1,
    });
  });

  // Char reveal headings
  document.querySelectorAll<HTMLElement>('[data-char-reveal]').forEach((el) => {
    const spans: HTMLElement[] = [];
    el.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const wrapSpan = document.createElement('span');
        wrapSpan.textContent = node.textContent;
        node.parentNode?.replaceChild(wrapSpan, node);
        splitChars(wrapSpan).forEach((s) => spans.push(s));
      } else if (node instanceof HTMLElement && node.tagName !== 'BR') {
        splitChars(node).forEach((s) => spans.push(s));
      }
    });
    gsap.set(spans, { yPercent: 110 });
    gsap.to(spans, {
      yPercent: 0,
      duration: 0.9,
      ease: 'power4.out',
      stagger: 0.015,
      scrollTrigger: { trigger: el, start: 'top 78%' },
    });
  });

  // Line reveal (paragraphs fade up)
  document.querySelectorAll<HTMLElement>('[data-line-reveal]').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      }
    );
  });

  // Image clip reveal
  document.querySelectorAll<HTMLElement>('.clip-img').forEach((img) => {
    if (img.closest('[data-parallax-wrap]')) return; // hero handled separately
    gsap.fromTo(
      img,
      { clipPath: 'inset(100% 0 0 0)' },
      {
        clipPath: 'inset(0% 0 0 0)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: img, start: 'top 85%' },
      }
    );
  });

  // Parallax on hero image
  const parallax = document.querySelector<HTMLElement>('[data-parallax]');
  const parallaxWrap = document.querySelector<HTMLElement>('[data-parallax-wrap]');
  if (parallax && parallaxWrap) {
    gsap.to(parallax, {
      yPercent: -12,
      ease: 'none',
      scrollTrigger: { trigger: parallaxWrap, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  }

  // Section eyebrow reveal
  document.querySelectorAll<HTMLElement>('.eyebrow').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      }
    );
  });

  // Horizontal pin for services
  const servicesPin = document.querySelector<HTMLElement>('.services-pin');
  const track = document.querySelector<HTMLElement>('[data-services-track]');
  if (servicesPin && track) {
    const getScrollAmount = () => track.scrollWidth - window.innerWidth;
    gsap.to(track, {
      x: () => -getScrollAmount(),
      ease: 'none',
      scrollTrigger: {
        trigger: servicesPin,
        start: 'top top',
        end: () => `+=${getScrollAmount()}`,
        scrub: 1,
        pin: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    // Reveal cards as they come into view horizontally
    const cards = track.querySelectorAll<HTMLElement>('.service-card');
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesPin,
          start: `top+=${i * 60} top`,
          toggleActions: 'play none none reverse',
        },
      });
    });
  }

  // Doctor card parallax
  document.querySelectorAll<HTMLElement>('.doctor-card').forEach((card, i) => {
    gsap.fromTo(
      card,
      { y: 60 },
      {
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: card, start: 'top 90%' },
      }
    );
  });

  // Refresh on load
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
