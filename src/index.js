import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

document.getElementsByTagName('input')[0].onchange = checkIt;
function checkIt(){
    if (document.getElementsByTagName('input')[0].value !== ''){
        document.getElementById('buttonT').disabled = false;
    }
    let fileInput = document.getElementById('file');
    let filename = fileInput.files[0].name;
    let vvod = document.getElementById('hi');
    vvod.innerHTML = filename;
}

    let check_html = '</html>';
    let check_lang = 'lang=';
    let check_div = '<div';
    let h1 = "<h1";
    let h2 = "<h2";
    let h3 = "<h3";
    let h4 = "<h4";
    let h5 = "<h5";
    let h6 = "<h6";
    let check_img = '<img';
    let check_alt = 'alt';
    let check_aside = '<aside'
    let check_nav = '<nav';
    let check_header = '<header';
    let check_footer = '<footer';
    let check_main = '<main';
    let check_role = 'role="';
    let check_doc = '<!DOCTYPE html>';
    let check_meta = 'charset=';
    let gg = 0;

document.querySelector('button').addEventListener('click', function() {
    let fileInput = document.getElementById('file');
    let filename = fileInput.files[0].name;
    let vvod = document.getElementById('hi');
    vvod.innerHTML = filename;
    document.getElementsByTagName('main')[0].style.width = '80vw';
    document.getElementsByTagName('main')[0].style.padding = '0';
    document.getElementsByTagName('main')[0].style.marginLeft = '10vw';
    document.getElementById('hi').style.borderColor = '#14969e';
    document.getElementById('buttonT').style.borderColor = '#14969e';
    document.getElementById('buttonT').style.background = '#13c8d3';
    const lol = document.getElementById('main');
    lol.innerHTML = '';
    let file = document.getElementById('file').files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function() {
        let div = document.createElement('div');
        div.className = "main";
        const lol = document.getElementById('main');
        let cl = document.createElement('div');

        cl.prepend(div);
        lol.prepend(cl);

        if (reader.result.indexOf(check_html) !== -1) {
                if (reader.result.indexOf(check_aside) !== -1) {
                    gg++;
                    var aside_sum = reader.result.match(/<aside/gi).length;
                    let aa = "<aside";
                    let bb = ">";
                    var kol = reader.result.split(aa).pop().split(bb).shift();
                    var my = reader.result.substring(reader.result.lastIndexOf("<aside") + 7 + kol.length, reader.result.lastIndexOf("</aside>"));
                    var my1 = reader.result.substring(reader.result.lastIndexOf("<aside"), reader.result.lastIndexOf("</aside>") + 8);
                    let hello = reader.result.replace(my1, '');
                    let aside_div = document.createElement('div');
                    let aside_h = document.createElement('h5');
                    aside_h.className = 'main_h';
                    aside_div.className = "content";
                    aside_h.innerHTML = "Контент тега aside: ";
                    aside_div.innerHTML = my;
                    div.prepend(aside_div);
                    div.prepend(aside_h);

                    cl.prepend(div);
                    for (let i = 0; i< aside_sum - 1; i++){
                        let aa = "<aside";
                        let bb = ">";
                        var kol = hello.split(aa).pop().split(bb).shift();
                        var my = hello.substring(hello.lastIndexOf("<aside") + 7 + kol.length, hello.lastIndexOf("</aside>"));
                        var my1 = hello.substring(hello.lastIndexOf("<aside"), hello.lastIndexOf("</aside>") + 8);
                        hello = hello.replace(my1, '');
                        let aside_div = document.createElement('div');
                        aside_div.className = "content";
                        aside_div.innerHTML = my;

                        div.prepend(aside_div);
                    }
                } else {
                    let aside_text = "&#8226; На сайте не присутствует тег &#60;aside&#62;. Используйте его для выделения вторичного контента.";
                    let aside = document.createElement('div');
                    aside.className = "block_wor";
                    aside.innerHTML = aside_text;

                    div.append(aside);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_main) !== -1) {
                    gg++;
                    var main_sum = reader.result.match(/<main/gi).length;
                    let aa = "<main";
                    let bb = ">";
                    var kol = reader.result.split(aa).pop().split(bb).shift();
                    var my = reader.result.substring(reader.result.lastIndexOf("<main") + 6 + kol.length, reader.result.lastIndexOf("</main>"));
                    var my1 = reader.result.substring(reader.result.lastIndexOf("<main"), reader.result.lastIndexOf("</main>") + 7);
                    let hello = reader.result.replace(my1, '');
                    let main_div = document.createElement('div');
                    let main_h = document.createElement('h5');
                    main_h.className = 'main_h';
                    main_div.className = "content";
                    main_h.innerHTML = "Контент тега main: ";
                    var scob_sum = reader.result.match(/</gi).length;
                    let tag_del = my.substring(my.lastIndexOf("<"), my.lastIndexOf(">") + 1);
                    let new_main = my.replace(tag_del, '');
                    for (let i = 0; i < 10; i++) {
                        let tag_del = new_main.substring(new_main.lastIndexOf("<"), new_main.lastIndexOf(">") + 1);
                        new_main.replace(tag_del, '');
                    }
                    main_div.innerHTML = new_main;
                    console.log(my);
                    console.log(tag_del);
                    div.prepend(main_div);
                    div.prepend(main_h);

                    cl.prepend(div);
                    for (let i = 0; i< main_sum - 1; i++){
                        let aa = "<main";
                        let bb = ">";
                        var kol = hello.split(aa).pop().split(bb).shift();
                        var my = hello.substring(hello.lastIndexOf("<main") + 6 + kol.length, hello.lastIndexOf("</main>"));
                        var my1 = hello.substring(hello.lastIndexOf("<main"), hello.lastIndexOf("</main>") + 7);
                        hello = hello.replace(my1, '');
                        let main_div = document.createElement('div');
                        main_div.className = "content";
                        main_div.innerHTML = my;

                        div.prepend(main_div);
                    }
                } else {
                    let main_text = "&#8226; На сайте не присутствует тег &#60;main&#62;. Используйте его для выделения главного контента на сайте.";
                    let main = document.createElement('div');
                    main.className = "block_wor";
                    main.innerHTML = main_text;

                    div.append(main);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_nav) !== -1) {
                    gg++;
                    var nav_sum = reader.result.match(/<nav/gi).length;
                    let aa = "<nav";
                    let bb = ">";
                    var kol = reader.result.split(aa).pop().split(bb).shift();
                    var my = reader.result.substring(reader.result.lastIndexOf("<nav") + 5 + kol.length, reader.result.lastIndexOf("</nav>"));
                    var my1 = reader.result.substring(reader.result.lastIndexOf("<nav"), reader.result.lastIndexOf("</nav>") + 6);
                    let hello = reader.result.replace(my1, '');
                    let nav_div = document.createElement('div');
                    let nav_h = document.createElement('h5');
                    nav_h.className = 'main_h';
                    nav_div.className = "content";
                    nav_h.innerHTML = "Контент тега nav: ";
                    nav_div.innerHTML = my;
                    div.prepend(nav_div);
                    div.prepend(nav_h);

                    cl.prepend(div);
                    for (let i = 0; i< nav_sum - 1; i++){
                        let aa = "<nav";
                        let bb = ">";
                        var kol = hello.split(aa).pop().split(bb).shift();
                        var my = hello.substring(hello.lastIndexOf("<nav") + 5 + kol.length, hello.lastIndexOf("</nav>"));
                        var my1 = hello.substring(hello.lastIndexOf("<nav"), hello.lastIndexOf("</nav>") + 6);
                        hello = hello.replace(my1, '');
                        let nav_div = document.createElement('div');
                        nav_div.className = "content";
                        nav_div.innerHTML = my;

                        div.prepend(nav_div);
                    }
                } else {
                    let nav_text = "&#8226; На сайте не присутствует тег &#60;nav&#62;. Используйте его для разграничения зоны навигации.";
                    let nav = document.createElement('div');
                    nav.className = "block_wor";
                    nav.innerHTML = nav_text;

                    div.append(nav);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(h1) !== -1 ||
                    reader.result.indexOf(h2) !== -1 ||
                    reader.result.indexOf(h3) !== -1 ||
                    reader.result.indexOf(h4) !== -1 ||
                    reader.result.indexOf(h5) !== -1 ||
                    reader.result.indexOf(h6) !== -1) {
                    gg++;
                    if (reader.result.indexOf(h6) !== -1) {
                        var h6_sum = reader.result.match(/<h6/gi).length;
                        let home = [];
                        let aa = "<h6";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h6") + 4 + kol.length, reader.result.lastIndexOf("</h6>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h6"), reader.result.lastIndexOf("</h6>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки шестого уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h6_sum - 1; i++){
                            let aa = "<h6";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h6") + 4 + kol.length, hello.lastIndexOf("</h6>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h6"), hello.lastIndexOf("</h6>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки шестого уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h5) !== -1) {
                        var h5_sum = reader.result.match(/<h5/gi).length;
                        let home = [];
                        let aa = "<h5";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h5") + 4 + kol.length, reader.result.lastIndexOf("</h5>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h5"), reader.result.lastIndexOf("</h5>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки пятого уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h5_sum - 1; i++){
                            let aa = "<h5";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h5") + 4 + kol.length, hello.lastIndexOf("</h5>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h5"), hello.lastIndexOf("</h5>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки пятого уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h4) !== -1) {
                        var h4_sum = reader.result.match(/<h4/gi).length;
                        let home = [];
                        let aa = "<h4";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h4") + 4 + kol.length, reader.result.lastIndexOf("</h4>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h4"), reader.result.lastIndexOf("</h4>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки четвёртого уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h4_sum - 1; i++){
                            let aa = "<h4";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h4") + 4 + kol.length, hello.lastIndexOf("</h4>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h4"), hello.lastIndexOf("</h4>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки четвёртого уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h3) !== -1) {
                        var h3_sum = reader.result.match(/<h3/gi).length;
                        let home = [];
                        let aa = "<h3";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h3") + 4 + kol.length, reader.result.lastIndexOf("</h3>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h3"), reader.result.lastIndexOf("</h3>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки третьего уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h3_sum - 1; i++){
                            let aa = "<h3";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h3") + 4 + kol.length, hello.lastIndexOf("</h3>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h3"), hello.lastIndexOf("</h3>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки третьего уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h2) !== -1) {
                        var h2_sum = reader.result.match(/<h2/gi).length;
                        let home = [];
                        let aa = "<h2";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h2") + 4 + kol.length, reader.result.lastIndexOf("</h2>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h2"), reader.result.lastIndexOf("</h2>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки второго уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h2_sum - 1; i++){
                            let aa = "<h2";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h2") + 4 + kol.length, hello.lastIndexOf("</h2>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h2"), hello.lastIndexOf("</h2>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки второго уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h1) !== -1) {
                        var h1_sum = reader.result.match(/<h1/gi).length;
                        if (h1_sum > 1) {
                            let home = [];
                            let aa = "<h1";
                            let bb = ">";
                            var kol = reader.result.split(aa).pop().split(bb).shift();
                            var my = reader.result.substring(reader.result.lastIndexOf("<h1") + 4 + kol.length, reader.result.lastIndexOf("</h1>"));
                            var my1 = reader.result.substring(reader.result.lastIndexOf("<h1"), reader.result.lastIndexOf("</h1>") + 5);
                            let hello = reader.result.replace(my1, '');
                            home.push(my);
                            let ul = document.createElement('ul');
                            let ul_li = document.createElement('li');
                            let zag_h1 = document.createElement('h3');
                            let zag_div = document.createElement('div');
                            ul_li.className = "li_alert";
                            zag_h1.className = "zag_alert";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки первого уровня: ";
                            ul_li.innerHTML = my;
                            div.prepend(zag_div);
                            zag_div.append(ul);
                            ul.append(ul_li);

                            for (let i = 0; i< h1_sum - 1; i++){
                                let aa = "<h1";
                                let bb = ">";
                                var kol = hello.split(aa).pop().split(bb).shift();
                                var my = hello.substring(hello.lastIndexOf("<h1") + 4 + kol.length, hello.lastIndexOf("</h1>"));
                                var my1 = hello.substring(hello.lastIndexOf("<h1"), hello.lastIndexOf("</h1>") + 5);
                                hello = hello.replace(my1, '');
                                home.unshift(my);
                                let ul_li = document.createElement('li');
                                ul_li.className = "li_alert";
                                zag_h1.className = "zag";
                                zag_div.className = "div_zag";
                                zag_h1.innerHTML = "Заголовки первого уровня: ";
                                ul_li.innerHTML = my;

                                ul.prepend(ul_li);
                            }
                            let vor = document.createElement('div');
                            vor.className = 'vor';
                            vor.innerHTML = 'h1 ДОЛЖЕН БЫТЬ 1 НА СТРАНИЦЕ!';
                            ul.append(vor);
                            zag_div.prepend(zag_h1);
                        } else {
                            let home = [];
                            let aa = "<h1";
                            let bb = ">";
                            var kol = reader.result.split(aa).pop().split(bb).shift();
                            var my = reader.result.substring(reader.result.lastIndexOf("<h1") + 4 + kol.length, reader.result.lastIndexOf("</h1>"));
                            var my1 = reader.result.substring(reader.result.lastIndexOf("<h1"), reader.result.lastIndexOf("</h1>") + 5);
                            let hello = reader.result.replace(my1, '');
                            home.push(my);
                            let ul = document.createElement('ul');
                            let ul_li = document.createElement('li');
                            let zag_h1 = document.createElement('h3');
                            let zag_div = document.createElement('div');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки первого уровня: ";
                            ul_li.innerHTML = my;
                            div.prepend(zag_div);
                            zag_div.prepend(zag_h1);
                            zag_div.append(ul);
                            ul.append(ul_li);
                            cl.prepend(div);
                            for (let i = 0; i< h1_sum - 1; i++){
                                let aa = "<h1";
                                let bb = ">";
                                var kol = hello.split(aa).pop().split(bb).shift();
                                var my = hello.substring(hello.lastIndexOf("<h1") + 4 + kol.length, hello.lastIndexOf("</h1>"));
                                var my1 = hello.substring(hello.lastIndexOf("<h1"), hello.lastIndexOf("</h1>") + 5);
                                hello = hello.replace(my1, '');
                                home.unshift(my);
                                let ul_li = document.createElement('li');
                                ul_li.className = "li";
                                zag_h1.className = "zag";
                                zag_div.className = "div_zag";
                                zag_h1.innerHTML = "Заголовки первого уровня: ";
                                ul_li.innerHTML = my;

                                ul.prepend(ul_li);
                            }
                        }
                    } else {

                    }
                    let title_h = document.createElement('h5');
                    title_h.innerHTML = "Заголовки на странице: ";
                    div.prepend(title_h);
                } else {
                    let error_h_text = "&#8226; На странице нет ни одного заголовка. Это большая проблема. Расставьте заголовки, опираясь на смысловые предназначения.";
                    let error_h = document.createElement('div');
                    error_h.className = "block_wor";
                    error_h.innerHTML = error_h_text;

                    div.append(error_h);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_header) !== -1) {
                    gg++;
                } else {
                    let header_text = "&#8226; На сайте не присутствует тег &#60;header&#62;. Используйте его для разграничения 'шапки' сайта.";
                    let header_div = document.createElement('div');
                    header_div.className = "block_wor";
                    header_div.innerHTML = header_text;

                    div.append(header_div);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_footer) !== -1) {
                    gg++;
                } else {
                    let footer_text = "&#8226; На сайте не присутствует тег &#60;footer&#62;. Используйте его для 'подвала' сайта.";
                    let footer = document.createElement('div');
                    footer.className = "block_wor";
                    footer.innerHTML = footer_text;

                    div.append(footer);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_doc) !== -1) {
                    gg++;
                } else {
                    let doc_text = "&#8226; Пропишите &#60;!DOCTYPE html&#62; в html-код для правильного отображения кода браузера.";
                    let doc = document.createElement('div');
                    doc.className = "block";
                    doc.innerHTML = doc_text;

                    div.append(doc);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_meta) !== -1) {
                    gg++;
                } else {
                    let meta_text = '&#8226; Пропишите кодировку текста (по стандарту - &#60;meta charset="UTF-8"&#62;) в html-код для правильного отображения текста в браузера.';
                    let meta = document.createElement('div');
                    meta.className = "block";
                    meta.innerHTML = meta_text;

                    div.append(meta);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_lang) !== -1){
                    gg++;
                } else {
                    let leng_text = "&#8226; Пропишите атрибут lang в тег html для устранения возможных проблем со screenreader'ом.";
                    let lang = document.createElement('div');
                    lang.className = "block";
                    lang.innerHTML = leng_text;

                    div.append(lang);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_div) !== -1) {
                    var div_sum = reader.result.match(/<div/gi).length;
                    let div_text = "Количество div'ов на сайте: " + div_sum;
                    let div_div = document.createElement('div');
                    div_div.className = "nonv";
                    div_div.innerHTML = div_text;

                    div.prepend(div_div);
                    gg++;
                    cl.prepend(div);
                } else {

                }
                if (reader.result.indexOf(check_img) !== -1) {
                    gg++;
                    let sum_alt = 0;
                    let img = reader.result.match(/<img/gi).length;
                    let aa = "<img";
                    let bb = ">";
                    let kol = reader.result.split(aa).pop().split(bb).shift();
                    let my1 = reader.result.substring(reader.result.lastIndexOf(aa), reader.result.lastIndexOf(kol + bb) + kol.length + bb.length);
                    if (kol.indexOf(check_alt) !== -1) {
                        sum_alt += 1;
                    } else {

                    }
                    let del = reader.result.replace(my1, '');

                    for (let j = 0; j < img - 1; j++) {
                        let aa = "<img";
                        let bb = ">";
                        let kol = del.split(aa).pop().split(bb).shift();
                        let my1 = del.substring(del.lastIndexOf("<img"), del.lastIndexOf(kol + bb) + kol.length + bb.length);
                        if (kol.indexOf(check_alt) !== -1) {
                            sum_alt++;
                        } else {

                        }
                        del = del.replace(my1, '');
                    }
                    let no_alt = img - sum_alt;
                    if (no_alt == 0) {

                    } else{
                        let img_text = "&#8226; На сайте " + no_alt + " img не имеет(-ют) атрибута alt. Это одно из важных требований семантики.";
                        let img_div = document.createElement('div');
                        img_div.className = "block";
                        img_div.innerHTML = img_text;

                        div.append(img_div);
                    }
                } else {
                    gg++
                }
                if (reader.result.indexOf(check_role) !== -1) {
                    gg++;
                } else {
                    var role_text = "&#8226; Не забывайте использовать атрибут role для логического разграничения сайта.";
                    let role = document.createElement('div');
                    role.className = "block";
                    role.innerHTML = role_text;

                    div.append(role);
                    cl.prepend(div);
                }
        } else {
            let alert_type_error_text = "Загрузите файл (.html или .php)";
            let alert_type_error = document.createElement('div');
            alert_type_error.className = "alert_type_error";
            alert_type_error.innerHTML = alert_type_error_text;
            document.getElementById('hi').style.borderColor = 'red';
            document.getElementById('buttonT').style.borderColor = 'red';
            document.getElementById('buttonT').style.background = '#fd2626';

            div.append(alert_type_error);
            cl.prepend(div);
        }
        if (gg == 12) {
                div.innerHTML = '';


                if (reader.result.indexOf(check_aside) !== -1) {
                    gg++;
                    var aside_sum = reader.result.match(/<aside/gi).length;
                    let aa = "<aside";
                    let bb = ">";
                    var kol = reader.result.split(aa).pop().split(bb).shift();
                    var my = reader.result.substring(reader.result.lastIndexOf("<aside") + 7 + kol.length, reader.result.lastIndexOf("</aside>"));
                    var my1 = reader.result.substring(reader.result.lastIndexOf("<aside"), reader.result.lastIndexOf("</aside>") + 8);
                    let hello = reader.result.replace(my1, '');
                    let aside_div = document.createElement('div');
                    let aside_h = document.createElement('h5');
                    aside_h.className = 'main_h';
                    aside_div.className = "content";
                    aside_h.innerHTML = "Контент тега aside: ";
                    aside_div.innerHTML = my;
                    div.prepend(aside_div);
                    div.prepend(aside_h);

                    cl.prepend(div);
                    for (let i = 0; i< aside_sum - 1; i++){
                        let aa = "<aside";
                        let bb = ">";
                        var kol = hello.split(aa).pop().split(bb).shift();
                        var my = hello.substring(hello.lastIndexOf("<aside") + 7 + kol.length, hello.lastIndexOf("</aside>"));
                        var my1 = hello.substring(hello.lastIndexOf("<aside"), hello.lastIndexOf("</aside>") + 8);
                        hello = hello.replace(my1, '');
                        let aside_div = document.createElement('div');
                        aside_div.className = "content";
                        aside_div.innerHTML = my;

                        div.prepend(aside_div);
                    }
                } else {
                    let aside_text = "&#8226; На сайте не присутствует тег &#60;aside&#62;. Используйте его для выделения вторичного контента.";
                    let aside = document.createElement('div');
                    aside.className = "block";
                    aside.innerHTML = aside_text;

                    div.append(aside);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_main) !== -1) {
                    gg++;
                    var main_sum = reader.result.match(/<main/gi).length;
                    let aa = "<main";
                    let bb = ">";
                    var kol = reader.result.split(aa).pop().split(bb).shift();
                    var my = reader.result.substring(reader.result.lastIndexOf("<main") + 6 + kol.length, reader.result.lastIndexOf("</main>"));
                    var my1 = reader.result.substring(reader.result.lastIndexOf("<main"), reader.result.lastIndexOf("</main>") + 7);
                    let hello = reader.result.replace(my1, '');
                    let main_div = document.createElement('div');
                    let main_h = document.createElement('h5');
                    main_h.className = 'main_h';
                    main_div.className = "content";
                    main_h.innerHTML = "Контент тега main: ";
                    main_div.innerHtml = my;
                    div.prepend(main_div);
                    div.prepend(main_h);

                    cl.prepend(div);
                    for (let i = 0; i< main_sum - 1; i++){
                        let aa = "<main";
                        let bb = ">";
                        var kol = hello.split(aa).pop().split(bb).shift();
                        var my = hello.substring(hello.lastIndexOf("<main") + 6 + kol.length, hello.lastIndexOf("</main>"));
                        var my1 = hello.substring(hello.lastIndexOf("<main"), hello.lastIndexOf("</main>") + 7);
                        hello = hello.replace(my1, '');
                        let main_div = document.createElement('div');
                        main_div.className = "content";
                        main_div.innerHTML = my;

                        div.prepend(main_div);
                    }
                } else {
                    let main_text = "&#8226; На сайте не присутствует тег &#60;main&#62;. Используйте его для выделения главного контента на сайте.";
                    let main = document.createElement('div');
                    main.className = "block";
                    main.innerHTML = main_text;

                    div.append(main);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_nav) !== -1) {
                    gg++;
                    var nav_sum = reader.result.match(/<nav/gi).length;
                    let aa = "<nav";
                    let bb = ">";
                    var kol = reader.result.split(aa).pop().split(bb).shift();
                    var my = reader.result.substring(reader.result.lastIndexOf("<nav") + 5 + kol.length, reader.result.lastIndexOf("</nav>"));
                    var my1 = reader.result.substring(reader.result.lastIndexOf("<nav"), reader.result.lastIndexOf("</nav>") + 6);
                    let hello = reader.result.replace(my1, '');
                    let nav_div = document.createElement('div');
                    let nav_h = document.createElement('h5');
                    nav_h.className = 'main_h';
                    nav_div.className = "content";
                    nav_h.innerHTML = "Контент тега nav: ";
                    nav_div.innerHTML = my;
                    div.prepend(nav_div);

                    cl.prepend(div);
                    for (let i = 0; i< nav_sum - 1; i++){
                        let aa = "<nav";
                        let bb = ">";
                        var kol = hello.split(aa).pop().split(bb).shift();
                        var my = hello.substring(hello.lastIndexOf("<nav") + 5 + kol.length, hello.lastIndexOf("</nav>"));
                        var my1 = hello.substring(hello.lastIndexOf("<nav"), hello.lastIndexOf("</nav>") + 6);
                        hello = hello.replace(my1, '');
                        let nav_div = document.createElement('div');
                        nav_div.className = "content";
                        nav_div.innerHTML = my;

                        div.prepend(nav_div);
                    }
                    div.prepend(nav_h);
                } else {
                    let nav_text = "&#8226; На сайте не присутствует тег &#60;nav&#62;. Используйте его для разграничения зоны навигации.";
                    let nav = document.createElement('div');
                    nav.className = "block";
                    nav.innerHTML = nav_text;

                    div.append(nav);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(h1) !== -1 ||
                    reader.result.indexOf(h2) !== -1 ||
                    reader.result.indexOf(h3) !== -1 ||
                    reader.result.indexOf(h4) !== -1 ||
                    reader.result.indexOf(h5) !== -1 ||
                    reader.result.indexOf(h6) !== -1) {
                    gg++;
                    if (reader.result.indexOf(h6) !== -1) {
                        var h6_sum = reader.result.match(/<h6/gi).length;
                        let home = [];
                        let aa = "<h6";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h6") + 4 + kol.length, reader.result.lastIndexOf("</h6>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h6"), reader.result.lastIndexOf("</h6>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки шестого уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h6_sum - 1; i++){
                            let aa = "<h6";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h6") + 4 + kol.length, hello.lastIndexOf("</h6>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h6"), hello.lastIndexOf("</h6>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки шестого уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h5) !== -1) {
                        var h5_sum = reader.result.match(/<h5/gi).length;
                        let home = [];
                        let aa = "<h5";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h5") + 4 + kol.length, reader.result.lastIndexOf("</h5>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h5"), reader.result.lastIndexOf("</h5>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки пятого уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h5_sum - 1; i++){
                            let aa = "<h5";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h5") + 4 + kol.length, hello.lastIndexOf("</h5>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h5"), hello.lastIndexOf("</h5>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки пятого уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h4) !== -1) {
                        var h4_sum = reader.result.match(/<h4/gi).length;
                        let home = [];
                        let aa = "<h4";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h4") + 4 + kol.length, reader.result.lastIndexOf("</h4>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h4"), reader.result.lastIndexOf("</h4>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки четвёртого уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h4_sum - 1; i++){
                            let aa = "<h4";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h4") + 4 + kol.length, hello.lastIndexOf("</h4>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h4"), hello.lastIndexOf("</h4>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки четвёртого уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h3) !== -1) {
                        var h3_sum = reader.result.match(/<h3/gi).length;
                        let home = [];
                        let aa = "<h3";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h3") + 4 + kol.length, reader.result.lastIndexOf("</h3>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h3"), reader.result.lastIndexOf("</h3>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки третьего уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h3_sum - 1; i++){
                            let aa = "<h3";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h3") + 4 + kol.length, hello.lastIndexOf("</h3>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h3"), hello.lastIndexOf("</h3>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки третьего уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h2) !== -1) {
                        var h2_sum = reader.result.match(/<h2/gi).length;
                        let home = [];
                        let aa = "<h2";
                        let bb = ">";
                        var kol = reader.result.split(aa).pop().split(bb).shift();
                        var my = reader.result.substring(reader.result.lastIndexOf("<h2") + 4 + kol.length, reader.result.lastIndexOf("</h2>"));
                        var my1 = reader.result.substring(reader.result.lastIndexOf("<h2"), reader.result.lastIndexOf("</h2>") + 5);
                        let hello = reader.result.replace(my1, '');
                        home.push(my);
                        let ul = document.createElement('ul');
                        let ul_li = document.createElement('li');
                        let zag_h1 = document.createElement('h3');
                        let zag_div = document.createElement('div');
                        ul_li.className = "li";
                        zag_h1.className = "zag";
                        zag_div.className = "div_zag";
                        zag_h1.innerHTML = "Заголовки второго уровня: ";
                        ul_li.innerHTML = my;
                        div.prepend(zag_div);
                        zag_div.prepend(zag_h1);
                        zag_div.append(ul);
                        ul.append(ul_li);
                        cl.prepend(div);
                        for (let i = 0; i< h2_sum - 1; i++){
                            let aa = "<h2";
                            let bb = ">";
                            var kol = hello.split(aa).pop().split(bb).shift();
                            var my = hello.substring(hello.lastIndexOf("<h2") + 4 + kol.length, hello.lastIndexOf("</h2>"));
                            var my1 = hello.substring(hello.lastIndexOf("<h2"), hello.lastIndexOf("</h2>") + 5);
                            hello = hello.replace(my1, '');
                            home.unshift(my);
                            let ul_li = document.createElement('li');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки второго уровня: ";
                            ul_li.innerHTML = my;

                            ul.prepend(ul_li);
                        }
                    } else {

                    }
                    if (reader.result.indexOf(h1) !== -1) {
                        var h1_sum = reader.result.match(/<h1/gi).length;
                        if (h1_sum > 1) {
                            let home = [];
                            let aa = "<h1";
                            let bb = ">";
                            var kol = reader.result.split(aa).pop().split(bb).shift();
                            var my = reader.result.substring(reader.result.lastIndexOf("<h1") + 4 + kol.length, reader.result.lastIndexOf("</h1>"));
                            var my1 = reader.result.substring(reader.result.lastIndexOf("<h1"), reader.result.lastIndexOf("</h1>") + 5);
                            let hello = reader.result.replace(my1, '');
                            home.push(my);
                            let ul = document.createElement('ul');
                            let ul_li = document.createElement('li');
                            let zag_h1 = document.createElement('h3');
                            let zag_div = document.createElement('div');
                            ul_li.className = "li_alert";
                            zag_h1.className = "zag_alert";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки первого уровня: ";
                            ul_li.innerHTML = my;
                            div.prepend(zag_div);
                            zag_div.append(ul);
                            ul.append(ul_li);

                            for (let i = 0; i< h1_sum - 1; i++){
                                let aa = "<h1";
                                let bb = ">";
                                var kol = hello.split(aa).pop().split(bb).shift();
                                var my = hello.substring(hello.lastIndexOf("<h1") + 4 + kol.length, hello.lastIndexOf("</h1>"));
                                var my1 = hello.substring(hello.lastIndexOf("<h1"), hello.lastIndexOf("</h1>") + 5);
                                hello = hello.replace(my1, '');
                                home.unshift(my);
                                let ul_li = document.createElement('li');
                                ul_li.className = "li_alert";
                                zag_h1.className = "zag";
                                zag_div.className = "div_zag";
                                zag_h1.innerHTML = "Заголовки первого уровня: ";
                                ul_li.innerHTML = my;

                                ul.prepend(ul_li);
                            }
                            let vor = document.createElement('div');
                            vor.className = 'vor';
                            vor.innerHTML = 'h1 ДОЛЖЕН БЫТЬ 1 НА СТРАНИЦЕ!';
                            ul.prepend(vor);
                            zag_div.prepend(zag_h1);
                        } else {
                            let home = [];
                            let aa = "<h1";
                            let bb = ">";
                            var kol = reader.result.split(aa).pop().split(bb).shift();
                            var my = reader.result.substring(reader.result.lastIndexOf("<h1") + 4 + kol.length, reader.result.lastIndexOf("</h1>"));
                            var my1 = reader.result.substring(reader.result.lastIndexOf("<h1"), reader.result.lastIndexOf("</h1>") + 5);
                            let hello = reader.result.replace(my1, '');
                            home.push(my);
                            let ul = document.createElement('ul');
                            let ul_li = document.createElement('li');
                            let zag_h1 = document.createElement('h3');
                            let zag_div = document.createElement('div');
                            ul_li.className = "li";
                            zag_h1.className = "zag";
                            zag_div.className = "div_zag";
                            zag_h1.innerHTML = "Заголовки первого уровня: ";
                            ul_li.innerHTML = my;
                            div.prepend(zag_div);
                            zag_div.prepend(zag_h1);
                            zag_div.append(ul);
                            ul.append(ul_li);
                            cl.prepend(div);
                            for (let i = 0; i< h1_sum - 1; i++){
                                let aa = "<h1";
                                let bb = ">";
                                var kol = hello.split(aa).pop().split(bb).shift();
                                var my = hello.substring(hello.lastIndexOf("<h1") + 4 + kol.length, hello.lastIndexOf("</h1>"));
                                var my1 = hello.substring(hello.lastIndexOf("<h1"), hello.lastIndexOf("</h1>") + 5);
                                hello = hello.replace(my1, '');
                                home.unshift(my);
                                let ul_li = document.createElement('li');
                                ul_li.className = "li";
                                zag_h1.className = "zag";
                                zag_div.className = "div_zag";
                                zag_h1.innerHTML = "Заголовки первого уровня: ";
                                ul_li.innerHTML = my;

                                ul.prepend(ul_li);
                            }
                        }
                    } else {

                    }
                    let title_h = document.createElement('h5');
                    title_h.innerHTML = "Заголовки на странице: ";
                    div.prepend(title_h);
                } else {
                    let error_h_text = "&#8226; На странице нет ни одного заголовка. Это большая проблема. Расставьте заголовки, опираясь на смысловые предназначения.";
                    let error_h = document.createElement('div');
                    error_h.className = "block";
                    error_h.innerHTML = error_h_text;

                    div.append(error_h);
                    cl.prepend(div);
                }
                if (reader.result.indexOf(check_div) !== -1) {
                    var div_sum = reader.result.match(/<div/gi).length;
                    let div_text = "Количество div'ов на сайте: " + div_sum;
                    let div_div = document.createElement('div');
                    div_div.className = "nonv";
                    div_div.innerHTML = div_text;

                    div.prepend(div_div);
                    gg++;
                    cl.prepend(div);
                } else {

                }

                

                let role = document.createElement('div');
                role.className = "win";
                role.innerHTML = '<p id="gog">Ваш сайт подходит под все критерии семантики</p>';
                div.append(role);
        } else{

        }
    }
    reader.onerror = function() {
        console.log(reader.error);
    }
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
