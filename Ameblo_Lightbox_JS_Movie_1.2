// ==UserScript==
// @name        Ameblo Lightbox JS Movie
// @namespace        http://tampermonkey.net/
// @version        1.2
// @description        ブログ掲載動画のウインドウ内の暗転拡大表示
// @author        Ameba Blog User
// @match        https://ameblo.jp/*
// @match        https://www.youtube.com/embed/*
// @match        https://static.blog-video.jp/*
// @exclude        https://blog.ameba.jp/ucs/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @grant        none
// @updateURL        https://github.com/personwritep/Ameblo_Lightbox_JS_Movie/raw/main/Ameblo_Lightbox_JS_Movie.user.js
// @downloadURL        https://github.com/personwritep/Ameblo_Lightbox_JS_Movie/raw/main/Ameblo_Lightbox_JS_Movie.user.js
// ==/UserScript==


setTimeout(()=>{
    box_env();
}, 1000);

function box_env(){
    let m_style=
        '<style id="lightbox_movie_style">'+
        '.mov_player { position: fixed; top: 0; left: 0; z-index: calc(infinity); '+
        'padding: 5vh 0.5vw; width: 99vw !important; height: 90vh !important; '+
        'background: #000; box-shadow: 0 0 0 2px #000; border: none !important; '+
        'box-sizing: content-box !important; outline: none !important; } '+
        '</style>';

    if(!document.querySelector('#lightbox_movie_style')){
        document.body.insertAdjacentHTML('beforeend', m_style); }}




if(window.top !==window.self && location.hostname.includes('youtube.com')){
    window.addEventListener('message', (event)=>{
        if(!event.data || event.data.type !=='YT_FORWARD_KEY') return;

        let video=document.querySelector('video');
        if(!video) return;

        if(event.data.code==='Space'){
            video.paused ? video.play() : video.pause(); }
        else if(event.data.code==='ArrowLeft'){
            video.currentTime=Math.max(0, video.currentTime - 5); }
        else if(event.data.code==='ArrowRight'){
            video.currentTime=Math.min(video.duration, video.currentTime + 5); }
    });

    return; }



let lastActiveIframe=null;

window.addEventListener('blur', ()=>{
    setTimeout(()=>{
        let active=document.activeElement;
        if(active && active.tagName==='IFRAME' &&
           (active.src.includes('youtube.com') || active.src.includes('youtu.be'))){
            lastActiveIframe=active; // 最後に操作した動画を記憶
            window.focus(); }
    }, 0);

});



window.addEventListener('keydown', (event)=>{
    let tag=document.activeElement?.tagName;
    if(tag==='INPUT' || tag==='TEXTAREA' || document.activeElement?.isContentEditable){
        return; }


    if(event.key==='Control'){
        document.querySelectorAll(
            'iframe[src*="youtube.com"], iframe[src*="youtu.be"]').forEach(iframe=>{
            iframe.style.pointerEvents='none'; });
        return; }


    if(['Space', 'ArrowLeft', 'ArrowRight'].includes(event.code)){
        let target=lastActiveIframe || document.querySelector(
            'iframe[src*="youtube.com"], iframe[src*="youtu.be"]');
        if(target && target.contentWindow){
            event.preventDefault(); // ページ全体のスクロールを防ぐ
            target.contentWindow.postMessage({ type: 'YT_FORWARD_KEY', code: event.code }, '*');
        }}

}, true);



let resetPointerEvents=()=>{
    document.querySelectorAll(
        'iframe[src*="youtube.com"], iframe[src*="youtu.be"]').forEach(iframe=>{
        iframe.style.pointerEvents='auto'; }); };

window.addEventListener('keyup', (event)=>{
    if(event.key==='Control') resetPointerEvents();

}, true);



document.addEventListener('click', (event)=>{
    if(!event.ctrlKey) return;

    let targetIframe=Array.from(document.querySelectorAll(
        'iframe[src*="youtube.com"], iframe[src*="youtu.be"]')).find(iframe=>{
        let rect=iframe.getBoundingClientRect();
        return event.clientX>=rect.left && event.clientX<=rect.right &&
            event.clientY>=rect.top && event.clientY<=rect.bottom;
    });


    let html_=document.querySelector('html');
    let amb_header=document.querySelector('#ambHeader');
    let skinBody=document.querySelector('.skinBody');
    let skin_page=document.querySelector('.skin-page');
    let main=document.querySelector('#main');


    if(targetIframe){
        event.preventDefault();
        event.stopPropagation();

        if(targetIframe.dataset.resized==='true'){
            targetIframe.dataset.resized='false';
            targetIframe.classList.remove('mov_player');

            html_.style.overflow='';
            amb_header.style.zIndex="2000";
            if(skinBody){
                skinBody.style.position="inherit";
                skinBody.style.zIndex="inherit"; }
            if(skin_page){
                skin_page.style.position="inherit";
                skin_page.style.zIndex="inherit"; }
            main.style.position="inherit";
            main.style.zIndex="inherit"; }

        else{
            targetIframe.dataset.resized='true';
            targetIframe.classList.add('mov_player');

            html_.style.overflow='hidden';
            amb_header.style.zIndex="0";
            if(skinBody){
                skinBody.style.position="relative";
                skinBody.style.zIndex="3001"; }
            if(skin_page){
                skin_page.style.position="relative";
                skin_page.style.zIndex="2001"; }
            main.style.position="relative";
            main.style.zIndex="4001";
            zoom_reset(targetIframe); }}


    function zoom_reset(player){
        let zoom_f=window.getComputedStyle(document.body).getPropertyValue('zoom');
        if(zoom_f || zoom_f!=1){ // bodyで拡大ツールによるのzoom指定がある
            player.style.zoom=1/zoom_f; }}

}, true);
