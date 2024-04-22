"use strict";

// 헤더 gnb 스크립트
const header = document.querySelector('#mainHeader');
const mobileGnb = document.querySelector('.mobile-gnb');
window.addEventListener('DOMContentLoaded', () => {
  initGnb(header);
  initMobileGnb(mobileGnb);
})

// PC
function initGnb(header){
  let gnb = header.querySelector('#menu');
  let gnbMenus = gnb.querySelectorAll('#gnb .depth-1');
  let depthMenus = gnb.querySelectorAll('.lnb');
  let maxHeight = calculateMaxHeight();

  if (window.innerWidth > 1023) {
    changeMenuHeight(maxHeight);
  }

  gnb.addEventListener('mouseenter', (event) => {
    gnbOpen(header);
  });
  gnb.addEventListener('focusin', (event) => {
    gnbOpen(header);
  });
  gnb.addEventListener('mouseleave', (event) => {
    gnbClose(header);
  });
  gnb.addEventListener('focusout', (event) => {
    gnbClose(header);
  });

  gnbMenus.forEach(menu => {
    menu.addEventListener('mouseenter', (event) => {
      menu.classList.add('current');
    });
    menu.addEventListener('focusin', (event) => {
      menu.classList.add('current');
    });

    menu.addEventListener('mouseleave', (event) => {
      menu.classList.remove('current');
    });
    menu.addEventListener('focusout', (event) => {
      menu.classList.remove('current');
    });
  });

  window.addEventListener('resize', function(){
    if (window.innerWidth > 1024) {
      maxHeight = calculateMaxHeight(); 
      changeMenuHeight(maxHeight);
    }
  });

  function gnbOpen(header){
    let headerHeight = maxHeight + 80; // 80은 헤더바의 높이
    header.style.height = `${headerHeight}px`;
    header.classList.add('open');
  }

  function gnbClose(header){
    header.classList.remove('open');
    header.removeAttribute("style");
  }

  function calculateMaxHeight(){
    let heights = [...depthMenus].map((item) => item.getBoundingClientRect().height);
    let maxHeight = Math.max.apply(null, heights);
    return maxHeight;
  }

  function changeMenuHeight(height) {
    depthMenus.forEach(item => {
      item.style.height = `${height}px`;
    });
  }
}

// Mobile
function initMobileGnb(mobileGnb){
  let html = document.querySelector('html');
  let sidebarButton = mobileGnb.querySelector('.sidebar-btn');
  let mobileMenuButtons = mobileGnb.querySelectorAll('.depth-1 a');

  sidebarButton.addEventListener('click', (event) => {
    if (mobileGnb.classList.contains('open')) {
      mobileGnbClose(mobileGnb);
    } else {
      mobileGnbOpen(mobileGnb);
    }
  });

  mobileMenuButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const button = event.target.closest('.depth-1-link');
			if (!button) return;
      if (siblings(button).length > 0) event.preventDefault();
      openAccordion(button);
    });
  })

  window.addEventListener('resize', function(){
    if (window.innerWidth > 1023) {
      mobileGnbClose(mobileGnb);
    }
  });

  function mobileGnbOpen(gnb){
    gnb.classList.add('open');
    html.classList.add('not-scroll');
  }

  function mobileGnbClose(gnb){
    gnb.classList.remove('open');
    html.classList.remove('not-scroll');
  }

  // 모바일 메뉴 아코디언
  function openAccordion($this) {
    let target = $this.parentElement;
    let depthTarget = $this.nextElementSibling;

    if (!depthTarget) return;
    let otherLinks = siblings(target);
    let otherItems = otherLinks.map(link => link.querySelector('ul'));

    if (target.classList.contains('open')){
      target.classList.remove('open');
      depthTarget.style.maxHeight = '0px';
    } else {
      otherLinks.forEach(link => link.classList.remove('open'));
      otherItems.forEach(item => item ? item.style.maxHeight = '0px' : '');
      target.classList.add('open');
      depthTarget.style.maxHeight = depthTarget.scrollHeight + 'px';
    }
  }
  function siblings(element) {
    return [...element.parentElement.children].filter(value => value != element);
  }
}

