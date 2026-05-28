'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const TICKER_ITEMS = [
	'Hair Oil', 'Hair Butter', 'Growth & Moisture', 'Length & Retention',
	'100% Natural', 'Brixton Pop-Up', 'Black Owned', 'Organic Herbs',
]

const PRODUCTS = [
	{
		name: ['Hair', 'Oil'],
		sub: 'Growth & Moisture',
		vol: '120ml',
		price: '£12',
		img: '/images/hair-oil.jpg',
		alt: 'Hair Oil – Growth & Moisture',
		benefits: ['Soothes dry, itchy scalp', 'Reduces breakage', 'Boosts hair growth', 'Lightweight, non-greasy'],
	},
	{
		name: ['Hair', 'Butter'],
		sub: 'Length & Retention',
		vol: '250ml',
		price: '£14',
		img: '/images/hair-butter.jpg',
		alt: 'Hair Butter – Length & Retention',
		benefits: ['Softens & smooths', 'No greasy feeling', 'Organic herbs & butters', 'Seals in moisture'],
	},
]

const GALLERY_IMGS = [
	{ src: '/images/stall-wide.jpg',     alt: 'Brixton stall',  wide: true  },
	{ src: '/images/stall-products.jpg', alt: 'Products',       wide: false },
	{ src: '/images/butter-close.jpg',   alt: 'Hair butter',    wide: false },
	{ src: '/images/hair-close.jpg',     alt: 'Natural hair',   wide: true  },
]

const INSTA_POSTS = [
	{
		img: '/images/insta-1.jpg', likes: 284, handle: 'lovemynatural.selfcare', initial: 'L',
		avatarStyle: undefined as React.CSSProperties | undefined, time: '2d',
		caption: 'My hair has never felt this moisturised 😭✨ the #hairbutter is something else fr',
	},
	{
		img: '/images/insta-2.jpg', likes: 412, handle: 'lovemynatural.selfcare', initial: 'L',
		avatarStyle: undefined as React.CSSProperties | undefined, time: '4d',
		caption: 'New batch just dropped 🌿 Hair Oil restocked — get yours before it sells out again #lovemynatural',
	},
	{
		img: '/images/insta-3.jpg', likes: 197, handle: 'knatural_hair', initial: 'K',
		avatarStyle: { background: 'linear-gradient(135deg,#C27B1A,#E8A020)' } as React.CSSProperties, time: '1w',
		caption: 'Obsessed with @lovemynatural.selfcare 🙌 length retention is actually real this time',
	},
	{
		img: '/images/insta-4.jpg', likes: 339, handle: 'lovemynatural.selfcare', initial: 'L',
		avatarStyle: undefined as React.CSSProperties | undefined, time: '1w',
		caption: 'Catch us at Brixton this weekend 📍 come smell test everything in person 😍 #brixton',
	},
	{
		img: '/images/insta-5.jpg', likes: 521, handle: 'afro.anika', initial: 'A',
		avatarStyle: { background: 'linear-gradient(135deg,#8B4513,#C27B1A)' } as React.CSSProperties, time: '2w',
		caption: "Can't believe the difference after 3 weeks using the oil. No more breakage!! @lovemynatural.selfcare 🙏🏾",
	},
]

export default function LoveMyNatural() {
	const navRef = useRef<HTMLElement>(null)

	useEffect(() => {
		const onScroll = () =>
			navRef.current?.classList.toggle('lmn-nav--scrolled', window.scrollY > 60)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		const els = document.querySelectorAll<HTMLElement>('.lmn-rev')
		const io = new IntersectionObserver(
			(entries) => entries.forEach((e) => {
				if (e.isIntersecting) { e.target.classList.add('lmn-rev--on'); io.unobserve(e.target) }
			}),
			{ threshold: 0.1 }
		)
		els.forEach((el) => io.observe(el))
		return () => io.disconnect()
	}, [])

	return (
		<>
			<style>{`
				.lmn-root {
					--y:#E8A020;--yb:#F0B030;--yp:#F7CE72;--t:#C27B1A;
					--w:#FFFDF5;--ow:#FBF4DC;--cr:#F5E8BE;
					--tx:#2A1800;--tm:#6B4010;--tl:#A06828;
					font-family:'Syne',sans-serif;background:var(--w);color:var(--tx);
					overflow-x:hidden;max-width:430px;margin:0 auto;position:relative;
				}
				.lmn-root::after {
					content:'';position:fixed;inset:0;pointer-events:none;z-index:999;opacity:0.025;
					background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
					background-size:180px;
				}
				.lmn-nav {
					position:fixed;top:0;left:50%;transform:translateX(-50%);
					width:100%;max-width:430px;z-index:200;
					display:flex;justify-content:space-between;align-items:center;
					padding:14px 20px;transition:background 0.3s,box-shadow 0.3s;
				}
				.lmn-nav--scrolled {
					background:rgba(255,253,245,0.94);backdrop-filter:blur(12px);
					box-shadow:0 1px 0 rgba(200,120,26,0.12);
				}
				.lmn-nav__logo {
					font-family:'Fraunces',serif;font-weight:900;font-size:13px;
					color:var(--tx);letter-spacing:0.04em;text-transform:uppercase;line-height:1.15;
				}
				.lmn-nav__logo small {
					display:block;font-family:'Syne',sans-serif;font-size:8px;
					font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:var(--t);
				}
				.lmn-nav__btn {
					background:var(--y);color:#fff;font-family:'Syne',sans-serif;
					font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;
					border:none;padding:9px 16px;border-radius:100px;text-decoration:none;cursor:pointer;
				}
				.lmn-hero {
					min-height:100svh;background:var(--y);position:relative;overflow:hidden;
					display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:52px;
				}
				.lmn-hero__bg {
					position:absolute;inset:0;
					background:radial-gradient(ellipse 100% 60% at 70% 0%,#F7CE72 0%,transparent 55%),
						radial-gradient(ellipse 80% 80% at 0% 100%,#C27B1A 0%,transparent 60%),var(--y);
				}
				.lmn-hero__ring {position:absolute;border-radius:50%;border:1px solid rgba(255,255,255,0.18);pointer-events:none;}
				.lmn-hero__ring--1 {width:420px;height:420px;top:-180px;right:-130px;}
				.lmn-hero__ring--2 {width:280px;height:280px;top:-90px;right:-60px;background:rgba(255,255,255,0.06);}
				.lmn-hero__product {
					position:absolute;right:-18px;top:50px;width:270px;
					filter:drop-shadow(0 30px 60px rgba(150,80,0,0.3));
					animation:lmnRise 1.1s 0.2s cubic-bezier(0.16,1,0.3,1) both;
				}
				.lmn-hero__content {position:relative;z-index:2;padding:0 24px;}
				.lmn-hero__kicker {
					font-size:9px;letter-spacing:0.35em;text-transform:uppercase;
					color:rgba(255,255,255,0.75);font-weight:700;margin-bottom:14px;
					opacity:0;animation:lmnFx 0.6s 0.7s ease both;
				}
				.lmn-hero__h1 {
					font-family:'Fraunces',serif;font-weight:900;font-size:52px;line-height:0.92;
					color:#fff;margin-bottom:18px;opacity:0;animation:lmnFx 0.6s 0.9s ease both;
				}
				.lmn-hero__h1-italic {font-style:italic;color:var(--w);font-size:64px;display:block;}
				.lmn-hero__body {
					font-size:13px;color:rgba(255,255,255,0.7);line-height:1.75;
					max-width:200px;margin-bottom:28px;font-weight:400;
					opacity:0;animation:lmnFx 0.6s 1.1s ease both;
				}
				.lmn-hero__ctas {display:flex;gap:10px;opacity:0;animation:lmnFx 0.6s 1.3s ease both;}
				.lmn-btn-white {
					flex:1;background:#fff;color:var(--t);font-size:11px;font-weight:700;
					letter-spacing:0.1em;text-transform:uppercase;border:none;padding:14px 0;
					border-radius:100px;text-align:center;text-decoration:none;cursor:pointer;display:block;
				}
				.lmn-btn-outline-w {
					flex:1;background:transparent;color:#fff;font-size:11px;font-weight:700;
					letter-spacing:0.1em;text-transform:uppercase;border:2px solid rgba(255,255,255,0.35);
					padding:14px 0;border-radius:100px;text-align:center;text-decoration:none;cursor:pointer;display:block;
				}
				.lmn-btn-tan {
					display:block;width:100%;background:var(--t);color:#fff;font-size:10px;font-weight:700;
					letter-spacing:0.12em;text-transform:uppercase;border:none;padding:13px 0;
					border-radius:100px;text-align:center;text-decoration:none;cursor:pointer;
				}
				.lmn-ticker {background:var(--t);overflow:hidden;padding:11px 0;}
				.lmn-ticker__track {display:flex;width:max-content;animation:lmnTick 22s linear infinite;}
				.lmn-ticker__item {
					font-size:10px;font-weight:800;letter-spacing:0.2em;text-transform:uppercase;
					color:rgba(255,255,255,0.9);white-space:nowrap;padding:0 18px;
				}
				.lmn-ticker__item::after {content:'◆';margin-left:18px;opacity:0.4;font-size:7px;}
				.lmn-label {font-size:9px;letter-spacing:0.35em;text-transform:uppercase;font-weight:700;margin-bottom:16px;}
				.lmn-label--amber {color:var(--t);}
				.lmn-label--white {color:rgba(255,255,255,0.7);}
				.lmn-about {background:var(--ow);padding:68px 24px 60px;position:relative;overflow:hidden;}
				.lmn-about__watermark {
					position:absolute;bottom:-30px;right:-10px;
					font-family:'Fraunces',serif;font-size:120px;font-weight:900;font-style:italic;
					color:rgba(200,120,26,0.06);line-height:1;pointer-events:none;white-space:nowrap;
				}
				.lmn-about__h2 {
					font-family:'Fraunces',serif;font-size:38px;font-weight:900;
					color:var(--tx);line-height:1.05;margin-bottom:20px;
				}
				.lmn-about__h2 em {font-style:italic;color:var(--y);}
				.lmn-about__p {font-size:14px;color:var(--tm);line-height:1.85;font-weight:400;margin-bottom:30px;}
				.lmn-tags {display:flex;flex-wrap:wrap;gap:8px;}
				.lmn-tag {
					background:rgba(232,160,32,0.1);border:1px solid rgba(194,123,26,0.2);color:var(--t);
					font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;
					padding:7px 14px;border-radius:100px;
				}
				.lmn-products {background:var(--w);padding:68px 0 76px;overflow:hidden;}
				.lmn-products__head {padding:0 24px 44px;}
				.lmn-products__h2 {font-family:'Fraunces',serif;font-size:36px;font-weight:900;color:var(--tx);line-height:1.05;}
				.lmn-products__h2 em {font-style:italic;color:var(--y);}
				.lmn-product {margin-bottom:56px;position:relative;}
				.lmn-product__banner {
					background:var(--y);margin-left:24px;border-radius:8px 0 0 8px;
					padding:28px 24px;position:relative;overflow:hidden;min-height:220px;
				}
				.lmn-product__banner::before {
					content:'';position:absolute;top:-60px;right:-60px;width:200px;height:200px;
					border-radius:50%;background:rgba(255,255,255,0.12);pointer-events:none;
				}
				.lmn-product__banner::after {
					content:'';position:absolute;bottom:-40px;left:-40px;width:140px;height:140px;
					border-radius:50%;background:rgba(194,123,26,0.15);pointer-events:none;
				}
				.lmn-product__name {
					font-family:'Fraunces',serif;font-size:48px;font-weight:900;font-style:italic;
					color:#fff;line-height:0.9;margin-bottom:6px;position:relative;z-index:1;
				}
				.lmn-product__sub {
					font-size:9px;letter-spacing:0.28em;text-transform:uppercase;
					color:rgba(255,255,255,0.65);font-weight:700;margin-bottom:16px;position:relative;z-index:1;
				}
				.lmn-product__vol {
					display:inline-block;background:rgba(255,255,255,0.2);color:#fff;
					font-size:9px;font-weight:700;letter-spacing:0.1em;padding:5px 12px;
					border-radius:100px;position:relative;z-index:1;
				}
				.lmn-product__lower {padding:20px 24px 0;display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start;}
				.lmn-product__photo {
					margin-top:-68px;position:relative;z-index:2;aspect-ratio:3/4;
					border-radius:6px;overflow:hidden;box-shadow:0 16px 48px rgba(180,100,0,0.18);
				}
				.lmn-product__photo img {width:100%;height:100%;object-fit:cover;}
				.lmn-product__price {font-family:'Fraunces',serif;font-size:34px;font-weight:900;color:var(--tx);line-height:1;margin-bottom:12px;}
				.lmn-product__list {list-style:none;margin-bottom:16px;}
				.lmn-product__list li {
					font-size:12px;color:var(--tm);line-height:1.55;font-weight:400;
					padding:5px 0;border-bottom:1px solid var(--cr);display:flex;gap:6px;align-items:flex-start;
				}
				.lmn-product__list li::before {content:'→';color:var(--y);font-size:10px;margin-top:2px;flex-shrink:0;}
				.lmn-gallery {background:var(--cr);padding:64px 0 72px;overflow:hidden;}
				.lmn-gallery__head {padding:0 24px 26px;}
				.lmn-gallery__h2 {font-family:'Fraunces',serif;font-size:34px;font-weight:900;color:var(--tx);line-height:1.05;}
				.lmn-gallery__h2 em {font-style:italic;color:var(--y);}
				.lmn-gallery__grid {
					display:grid;grid-template-columns:1fr 1fr;
					grid-template-rows:180px 250px 180px;gap:5px;padding:0 24px;
				}
				.lmn-gallery__item {overflow:hidden;border-radius:5px;}
				.lmn-gallery__item img {width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;}
				.lmn-gallery__item:active img {transform:scale(1.05);}
				.lmn-gallery__item--wide {grid-column:1/3;}
				.lmn-findus {background:var(--y);padding:68px 24px;position:relative;overflow:hidden;}
				.lmn-findus::before {
					content:'';position:absolute;top:-100px;right:-100px;width:350px;height:350px;
					border-radius:50%;background:rgba(255,255,255,0.08);pointer-events:none;
				}
				.lmn-findus::after {
					content:'';position:absolute;bottom:-80px;left:-80px;width:250px;height:250px;
					border-radius:50%;background:rgba(194,123,26,0.15);pointer-events:none;
				}
				.lmn-findus__h2 {
					font-family:'Fraunces',serif;font-size:36px;font-weight:900;
					color:#fff;line-height:1.05;margin-bottom:32px;position:relative;z-index:1;
				}
				.lmn-findus__h2 em {font-style:italic;}
				.lmn-methods {border-top:1px solid rgba(255,255,255,0.2);position:relative;z-index:1;}
				.lmn-method {
					display:flex;align-items:center;gap:14px;padding:18px 0;
					border-bottom:1px solid rgba(255,255,255,0.2);text-decoration:none;
				}
				.lmn-method__num {font-family:'Fraunces',serif;font-size:12px;font-style:italic;color:rgba(255,255,255,0.35);width:22px;flex-shrink:0;}
				.lmn-method__icon {width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,0.18);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
				.lmn-method__title {font-size:15px;font-weight:700;color:#fff;margin-bottom:3px;}
				.lmn-method__sub {font-size:11px;color:rgba(255,255,255,0.6);line-height:1.45;}
				.lmn-method__arr {margin-left:auto;color:rgba(255,255,255,0.5);font-size:18px;}
				.lmn-stall-box {
					margin-top:28px;background:rgba(255,255,255,0.15);border:1px solid rgba(255,255,255,0.25);
					border-radius:10px;padding:22px;position:relative;overflow:hidden;z-index:1;
				}
				.lmn-stall-box::before {
					content:'BRIXTON';position:absolute;bottom:-12px;right:-6px;
					font-family:'Fraunces',serif;font-size:56px;font-weight:900;font-style:italic;
					color:rgba(255,255,255,0.07);line-height:1;pointer-events:none;
				}
				.lmn-stall-box__label {font-size:9px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(255,255,255,0.6);font-weight:700;margin-bottom:8px;}
				.lmn-stall-box__title {font-family:'Fraunces',serif;font-size:22px;font-weight:700;color:#fff;margin-bottom:14px;}
				.lmn-stall-row {display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;}
				.lmn-stall-row__icon {font-size:13px;margin-top:1px;}
				.lmn-stall-row__text {font-size:12px;color:rgba(255,255,255,0.65);line-height:1.5;}
				.lmn-insta {background:var(--w);padding:64px 0 72px;overflow:hidden;}
				.lmn-insta__head {padding:0 24px 28px;display:flex;align-items:flex-end;justify-content:space-between;}
				.lmn-insta__follow {
					display:flex;align-items:center;gap:6px;background:var(--y);color:#fff;
					font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;
					padding:8px 14px;border-radius:100px;text-decoration:none;flex-shrink:0;
				}
				.lmn-insta__follow svg {width:14px;height:14px;fill:#fff;}
				.lmn-insta__scroll {
					display:flex;gap:10px;padding:0 24px;overflow-x:auto;
					scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;
				}
				.lmn-insta__scroll::-webkit-scrollbar {display:none;}
				.lmn-insta__post {
					flex-shrink:0;width:200px;scroll-snap-align:start;border-radius:8px;overflow:hidden;
					background:var(--cr);border:1px solid rgba(194,123,26,0.12);
					text-decoration:none;display:block;transition:transform 0.2s;
				}
				.lmn-insta__post:active {transform:scale(0.97);}
				.lmn-insta__post-img {width:200px;height:200px;overflow:hidden;position:relative;}
				.lmn-insta__post-img img {width:100%;height:100%;object-fit:cover;}
				.lmn-insta__likes {
					position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,0.35);color:#fff;
					font-size:10px;font-weight:700;padding:4px 8px;border-radius:100px;backdrop-filter:blur(4px);
				}
				.lmn-insta__post-body {padding:12px 14px 14px;}
				.lmn-insta__post-header {display:flex;align-items:center;gap:8px;margin-bottom:8px;}
				.lmn-insta__avatar {
					width:24px;height:24px;border-radius:50%;
					background:linear-gradient(135deg,var(--y),var(--t));
					display:flex;align-items:center;justify-content:center;
					font-size:11px;font-weight:800;color:#fff;flex-shrink:0;
				}
				.lmn-insta__handle {font-size:10px;font-weight:700;color:var(--tx);}
				.lmn-insta__time {font-size:9px;color:var(--tl);margin-left:auto;}
				.lmn-insta__caption {
					font-size:11px;color:var(--tm);line-height:1.55;
					display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;
				}
				.lmn-insta__caption strong {color:var(--t);font-weight:700;}
				.lmn-insta__cta {
					margin:24px 24px 0;display:flex;align-items:center;gap:8px;
					background:var(--cr);border:1px solid rgba(194,123,26,0.18);
					border-radius:100px;padding:14px;text-decoration:none;
				}
				.lmn-insta__cta-text {font-size:12px;font-weight:700;color:var(--tx);}
				.lmn-insta__cta-handle {font-size:11px;color:var(--t);}
				.lmn-insta__cta-arr {margin-left:auto;color:var(--t);opacity:0.5;font-size:16px;}
				.lmn-social {background:var(--ow);padding:64px 24px;}
				.lmn-social__h2 {font-family:'Fraunces',serif;font-size:36px;font-weight:900;color:var(--tx);line-height:1.05;margin-bottom:10px;}
				.lmn-social__h2 em {font-style:italic;color:var(--y);}
				.lmn-social__sub {font-size:13px;color:var(--tm);line-height:1.75;font-weight:400;margin-bottom:28px;}
				.lmn-social__links {display:flex;flex-direction:column;gap:10px;}
				.lmn-social__link {
					display:flex;align-items:center;gap:14px;background:var(--cr);
					border:1px solid rgba(194,123,26,0.15);border-radius:100px;padding:14px 20px;text-decoration:none;
				}
				.lmn-social__link-icon {width:36px;height:36px;border-radius:50%;background:var(--y);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;}
				.lmn-social__link-name {font-size:13px;font-weight:700;color:var(--tx);}
				.lmn-social__link-handle {font-size:11px;color:var(--tl);margin-top:2px;}
				.lmn-social__link-arr {margin-left:auto;color:var(--t);font-size:18px;opacity:0.6;}
				.lmn-footer {background:var(--t);padding:40px 24px 52px;display:flex;flex-direction:column;align-items:center;gap:8px;}
				.lmn-footer__name {font-family:'Fraunces',serif;font-weight:900;font-style:italic;font-size:22px;color:#fff;}
				.lmn-footer__tag {font-size:9px;letter-spacing:0.28em;text-transform:uppercase;color:rgba(255,255,255,0.5);}
				.lmn-footer__copy {font-size:10px;color:rgba(255,255,255,0.3);margin-top:8px;}
				.lmn-rev {opacity:0;transform:translateY(26px);transition:opacity 0.7s ease,transform 0.7s ease;}
				.lmn-rev--on {opacity:1;transform:translateY(0);}
				@keyframes lmnRise {from{opacity:0;transform:translateY(44px)}to{opacity:1;transform:translateY(0)}}
				@keyframes lmnFx {from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
				@keyframes lmnTick {from{transform:translateX(0)}to{transform:translateX(-50%)}}
			`}</style>

			<div className="lmn-root">

				<nav ref={navRef} className="lmn-nav">
					<div className="lmn-nav__logo">Love My Natural<small>Self Care</small></div>
					<Link href="#order" className="lmn-nav__btn">Order Now</Link>
				</nav>

				<section className="lmn-hero">
					<div className="lmn-hero__bg" />
					<div className="lmn-hero__ring lmn-hero__ring--1" />
					<div className="lmn-hero__ring lmn-hero__ring--2" />
					<img className="lmn-hero__product" src="/images/hair-oil.jpg" alt="Hair Oil" />
					<div className="lmn-hero__content">
						<p className="lmn-hero__kicker">Natural Hair Care · South London</p>
						<h1 className="lmn-hero__h1">
							Your hair
							<span className="lmn-hero__h1-italic">deserves</span>
							the best.
						</h1>
						<p className="lmn-hero__body">Organic, handcrafted, made for natural hair. Only the good stuff.</p>
						<div className="lmn-hero__ctas">
							<Link href="#products" className="lmn-btn-white">Shop the Range</Link>
							<Link href="#order" className="lmn-btn-outline-w">Brixton Market</Link>
						</div>
					</div>
				</section>

				<div className="lmn-ticker">
					<div className="lmn-ticker__track">
						{[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
							<span key={i} className="lmn-ticker__item">{item}</span>
						))}
					</div>
				</div>

				<section className="lmn-about">
					<div className="lmn-about__watermark" aria-hidden>LMN</div>
					<p className="lmn-label lmn-label--amber lmn-rev">The Brand</p>
					<h2 className="lmn-about__h2 lmn-rev">Made with love.<br />Built for <em>your crown.</em></h2>
					<p className="lmn-about__p lmn-rev">
						Started in South London, Love My Natural Self Care exists to celebrate natural hair.
						Every drop, every scoop — handmade using only organic herbs, oils, and butters.
						No shortcuts. No synthetics. Just your hair, at its best.
					</p>
					<div className="lmn-tags lmn-rev">
						{['No Sulphates', 'No Parabens', 'Organic Only', 'Handcrafted', 'Black Owned'].map((t) => (
							<span key={t} className="lmn-tag">{t}</span>
						))}
					</div>
				</section>

				<section className="lmn-products" id="products">
					<div className="lmn-products__head lmn-rev">
						<p className="lmn-label lmn-label--amber">The Range</p>
						<h2 className="lmn-products__h2">Two products.<br /><em>Total results.</em></h2>
					</div>
					{PRODUCTS.map((p) => (
						<div key={p.alt} className="lmn-product lmn-rev">
							<div className="lmn-product__banner">
								<div className="lmn-product__name">{p.name[0]}<br />{p.name[1]}</div>
								<div className="lmn-product__sub">{p.sub}</div>
								<span className="lmn-product__vol">{p.vol}</span>
							</div>
							<div className="lmn-product__lower">
								<div className="lmn-product__photo"><img src={p.img} alt={p.alt} /></div>
								<div>
									<div className="lmn-product__price">{p.price}</div>
									<ul className="lmn-product__list">
										{p.benefits.map((b) => <li key={b}>{b}</li>)}
									</ul>
									<Link href="#order" className="lmn-btn-tan">Order Now</Link>
								</div>
							</div>
						</div>
					))}
				</section>

				<section className="lmn-gallery">
					<div className="lmn-gallery__head lmn-rev">
						<p className="lmn-label lmn-label--amber">At the Stall</p>
						<h2 className="lmn-gallery__h2">See us<br /><em>in person.</em></h2>
					</div>
					<div className="lmn-gallery__grid lmn-rev">
						{GALLERY_IMGS.map((g) => (
							<div key={g.src} className={`lmn-gallery__item${g.wide ? ' lmn-gallery__item--wide' : ''}`}>
								<img src={g.src} alt={g.alt} />
							</div>
						))}
					</div>
				</section>

				<section className="lmn-findus" id="order">
					<p className="lmn-label lmn-label--white lmn-rev">Get Yours</p>
					<h2 className="lmn-findus__h2 lmn-rev">Three ways<br />to <em>order.</em></h2>
					<div className="lmn-methods lmn-rev">
						<Link href="https://instagram.com/lovemynatural.selfcare" className="lmn-method" target="_blank">
							<span className="lmn-method__num">01</span>
							<div className="lmn-method__icon">📸</div>
							<div><div className="lmn-method__title">Instagram DM</div><div className="lmn-method__sub">Message us to place your order</div></div>
							<span className="lmn-method__arr">→</span>
						</Link>
						<Link href="https://wa.me/447000000000" className="lmn-method" target="_blank">
							<span className="lmn-method__num">02</span>
							<div className="lmn-method__icon">💬</div>
							<div><div className="lmn-method__title">WhatsApp</div><div className="lmn-method__sub">Quick orders & local delivery</div></div>
							<span className="lmn-method__arr">→</span>
						</Link>
						<div className="lmn-method">
							<span className="lmn-method__num">03</span>
							<div className="lmn-method__icon">🏪</div>
							<div><div className="lmn-method__title">Brixton Stall</div><div className="lmn-method__sub">Come see us in person</div></div>
							<span className="lmn-method__arr">↓</span>
						</div>
					</div>
					<div className="lmn-stall-box lmn-rev">
						<p className="lmn-stall-box__label">Pop-Up Stall</p>
						<h3 className="lmn-stall-box__title">Pop Brixton, SW9</h3>
						<div className="lmn-stall-row"><span className="lmn-stall-row__icon">📍</span><span className="lmn-stall-row__text">Pop Brixton, London SW9</span></div>
						<div className="lmn-stall-row"><span className="lmn-stall-row__icon">📅</span><span className="lmn-stall-row__text">Dates announced on Instagram — follow us so you never miss out</span></div>
						<div className="lmn-stall-row"><span className="lmn-stall-row__icon">⏰</span><span className="lmn-stall-row__text">12pm – 5pm when we&apos;re live</span></div>
					</div>
				</section>

				<section className="lmn-insta">
					<div className="lmn-insta__head lmn-rev">
						<div>
							<p className="lmn-label lmn-label--amber">As seen on Instagram</p>
							<h2 className="lmn-gallery__h2" style={{ fontSize: '30px' }}>Real hair.<br /><em>Real results.</em></h2>
						</div>
						<Link href="https://instagram.com/lovemynatural.selfcare" className="lmn-insta__follow" target="_blank">
							<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
							</svg>
							Follow
						</Link>
					</div>
					<div className="lmn-insta__scroll lmn-rev">
						{INSTA_POSTS.map((post, i) => (
							<Link key={i} href="https://instagram.com" className="lmn-insta__post" target="_blank">
								<div className="lmn-insta__post-img">
									<img src={post.img} alt="Instagram post" />
									<div className="lmn-insta__likes">♥ {post.likes}</div>
								</div>
								<div className="lmn-insta__post-body">
									<div className="lmn-insta__post-header">
										<div className="lmn-insta__avatar" style={post.avatarStyle}>{post.initial}</div>
										<span className="lmn-insta__handle">{post.handle}</span>
										<span className="lmn-insta__time">{post.time}</span>
									</div>
									<p className="lmn-insta__caption">{post.caption}</p>
								</div>
							</Link>
						))}
					</div>
					<Link href="https://instagram.com/lovemynatural.selfcare" className="lmn-insta__cta lmn-rev" target="_blank">
						<span style={{ fontSize: 18 }}>📸</span>
						<div>
							<div className="lmn-insta__cta-text">See more on Instagram</div>
							<div className="lmn-insta__cta-handle">@lovemynatural.selfcare</div>
						</div>
						<span className="lmn-insta__cta-arr">›</span>
					</Link>
				</section>

				<section className="lmn-social">
					<p className="lmn-label lmn-label--amber lmn-rev">Follow Along</p>
					<h2 className="lmn-social__h2 lmn-rev">Join the<br /><em>community.</em></h2>
					<p className="lmn-social__sub lmn-rev">Real results, new drops, behind-the-scenes. Follow us and be first to know.</p>
					<div className="lmn-social__links lmn-rev">
						<Link href="https://instagram.com/lovemynatural.selfcare" className="lmn-social__link" target="_blank">
							<div className="lmn-social__link-icon">📸</div>
							<div><div className="lmn-social__link-name">Instagram</div><div className="lmn-social__link-handle">@lovemynatural.selfcare</div></div>
							<span className="lmn-social__link-arr">›</span>
						</Link>
						<Link href="https://tiktok.com/@lovemynatural" className="lmn-social__link" target="_blank">
							<div className="lmn-social__link-icon">🎵</div>
							<div><div className="lmn-social__link-name">TikTok</div><div className="lmn-social__link-handle">@lovemynatural</div></div>
							<span className="lmn-social__link-arr">›</span>
						</Link>
					</div>
				</section>

				<footer className="lmn-footer">
					<div className="lmn-footer__name">Love My Natural</div>
					<div className="lmn-footer__tag">Self Care · South London</div>
					<div className="lmn-footer__copy">© 2025 Love My Natural Self Care. All rights reserved.</div>
				</footer>

			</div>
		</>
	)
}
