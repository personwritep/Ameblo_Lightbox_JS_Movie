// ==UserScript==
// @name        Ameblo Lightbox JS Movie
// @namespace        http://tampermonkey.net/
// @version        1.1
// @description        ブログ掲載動画のウインドウ内の暗転拡大表示
// @author        Ameba Blog User
// @match        https://ameblo.jp/*
// @match        https://static.blog-video.jp/*
// @exclude        https://blog.ameba.jp/ucs/*
// @icon        https://www.google.com/s2/favicons?sz=64&domain=ameblo.jp
// @noframes
// @grant        none
// @updateURL        https://github.com/personwritep/Ameblo_Lightbox_JS_Movie/raw/main/Ameblo_Lightbox_JS_Movie.user.js
// @downloadURL        https://github.com/personwritep/Ameblo_Lightbox_JS_Movie/raw/main/Ameblo_Lightbox_JS_Movie.user.js
// ==/UserScript==

if(document.domain=='ameblo.jp'){

    let target=document.querySelector('head');
    let monitor=new MutationObserver(catch_mov);
    monitor.observe(target, { childList: true });

    catch_mov();

    function catch_mov(){

        box_env3();

        function box_env3(){
            let box_set=
                '<div id="close_header"><p id="close_mov">✖ Close Movie</p></div>'+
                '<style id="light_style_y">'+
                '.mov_player { position: fixed; top: 0; left: 0; z-index: calc(infinity); '+
                'padding: 10vh 2vw; width: 96vw !important; height: 80vh !important; '+
                'background: #000; box-shadow: 0 0 0 2px #000; border: none !important; '+
                'box-sizing: content-box !important; outline: none !important; } '+
                '.c_o { position: relative; } '+
                '.c_o .pre_player { border: 2px solid #2196f3;  box-sizing: border-box; '+
                'outline: 1px solid #fff; outline-offset: -3px; } '+
                '.c_i { position: relative; top: 0; width: 100%; height: 100%; } '+
                '.c_i:hover { cursor: pointer; } '+
                '#close_header { position: fixed; top: 0; left: 0; z-index: 5001; '+
                'width: 100%; height: 60px; display: none; } '+
                '#close_header:hover #close_mov { opacity: 1; } '+
                '#close_mov { position: absolute; top: 20px; left: 30px; opacity: 0; '+
                'font: bold 21px Meiryo; padding: 5px 12px 1px; background: #fff; '+
                'color: #000; border: 2px solid #000; border-radius: 6px; cursor: pointer; }'+
                '</style>';

            if(!document.querySelector('#light_style_y')){
                document.body.insertAdjacentHTML('beforeend', box_set); }}



        let y_iframe=document.querySelectorAll('#entryBody iframe[src*="youtube.com"]');
        for(let k=0; k<y_iframe.length; k++){
            cover_sw(y_iframe[k]); }

        let s_iframe=document.querySelectorAll('#entryBody iframe[src*="static.blog-video"]');
        for(let k=0; k<s_iframe.length; k++){
            cover_sw(s_iframe[k]); }

        let c_iframe=document.querySelectorAll('#entryBody iframe[src*="static-clipblog.blog-video"]');
        for(let k=0; k<c_iframe.length; k++){
            cover_sw(c_iframe[k]); }



        function cover_sw(video){
            let cover_out=document.createElement('div');
            cover_out.setAttribute('class', 'c_o');
            if(video.parentNode.className!='c_o'){
                cover_out.appendChild(video.cloneNode(true));
                video.parentNode.replaceChild(cover_out, video);
                let cover_in=document.createElement('div');
                cover_in.setAttribute('class', 'c_i');
                cover_out.appendChild(cover_in);
            }} //cover_sw()



        document.addEventListener('keydown', (event)=>{
            if(event.ctrlKey){
                box_view(); }
            else if(event.keyCode=='27'){
                let close_mov=document.querySelector('#close_mov');
                if(close_mov){
                    close_mov.click(); }}});

        document.addEventListener('keyup', (event)=>{
            if(!event.ctrlKey){
                cover_off(); }});



        let amb_header=document.querySelector('#ambHeader');
        let skinBody=document.querySelector('.skinBody');
        let skin_page=document.querySelector('.skin-page');
        let main=document.querySelector('#main');
        let html_=document.querySelector('html');

        function box_view(){
            let cover=document.querySelectorAll('.c_i');
            for(let k=0; k<cover.length; k++){
                cover[k].style.position='absolute';
                let player=cover[k].previousElementSibling;
                if(player){
                    player.classList.add('pre_player'); }

                cover[k].onclick=function(event){
                    event.stopImmediatePropagation();
                    let player=cover[k].previousElementSibling;
                    if(player){
                        player.classList.add('mov_player');
                        amb_header.style.zIndex="0";
                        if(skinBody){
                            skinBody.style.position="relative";
                            skinBody.style.zIndex="3001"; }
                        if(skin_page){
                            skin_page.style.position="relative";
                            skin_page.style.zIndex="2001"; }
                        main.style.position="relative";
                        main.style.zIndex="2";
                        zoom_reset(player); }

                    let close_header=document.querySelector('#close_header');
                    if(close_header){
                        html_.style.overflow='hidden';
                        close_header.style.display='block';
                        zoom_reset(close_header); }

                    normal_view(); }}


            function zoom_reset(player){
                let zoom_f=window.getComputedStyle(document.body).getPropertyValue('zoom');
                if(zoom_f || zoom_f!=1){ // bodyで拡大ツールによるのzoom指定がある
                    player.style.zoom=1/zoom_f; }}

        } // box_view()



        function normal_view(){
            let close_header=document.querySelector('#close_header');
            let close_mov=document.querySelector('#close_mov');
            if(close_header && close_mov){
                close_mov.onclick=function(){
                    html_.style.overflow='';
                    amb_header.style.zIndex="2000";
                    if(skinBody){
                        skinBody.style.position="inherit";
                        skinBody.style.zIndex="inherit"; }
                    if(skin_page){
                        skin_page.style.position="inherit";
                        skin_page.style.zIndex="inherit"; }
                    main.style.position="inherit";
                    main.style.zIndex="inherit";
                    close_header.style.display='none';
                    let m_iframe=document.querySelectorAll('#entryBody iframe');
                    for(let k=0; k<m_iframe.length; k++){
                        if(m_iframe[k].classList.contains('mov_player')){
                            m_iframe[k].classList.remove('mov_player'); }
                        if(m_iframe[k].classList.contains('pre_player')){
                            m_iframe[k].classList.remove('pre_player'); }}}}}



        function cover_off(){
            let cover=document.querySelectorAll('.c_i');
            for(let k=0; k<cover.length; k++){
                cover[k].style.position='relative'; }
            let pre_player=document.querySelectorAll('.pre_player');
            for(let k=0; k<pre_player.length; k++){
                pre_player[k].classList.remove('pre_player'); }}

    } // catch_mov()

} // ameblo.jp



if(document.domain=='static.blog-video.jp'){ // スマホ動画プレーヤー

    window.addEventListener('load', function(){
        let css=
            '<style id="ALJM">'+
            '#js-video-bg { filter: opacity(0) !important; }</style>';
        if(!document.querySelector('#ALJM')){
            document.documentElement.insertAdjacentHTML('beforeend', css); }});

} // static.blog-video.jp
