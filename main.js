console.info('here i am')
/*
modal form with progressbars and validatin
 */

//if(document.querySelector('[data-bs-toggle="modal"]')!=null){document.querySelector('[data-bs-toggle="modal"]').click();}

var b5=true,b8,b7,b6,a13,t7,t8,t9,t10,b20,g6,g8,g9,g13,g14,g15,g16,t8,t12,t13,t10,t11,t15,t16,t17,t18,t19,reg0,reg1,lng0,lng1,lng2,lngType,lngnNode,lngrows;
let lineHeight = 24,letterWidth = 5,defaultLength = 10;
const body=document.getElementsByTagName('body')[0],forms=body.getElementsByTagName('form');
const rest=body.querySelector('div.border-dark'),ohR=rest.getElementsByTagName('SPAN'); /*only for results*/

const calcLength=function(what){let x;lngrows = undefined;
    try{
        lng0 = screen.availWidth;lng1 = what.clientWidth;lng2 = what.clientHeight;lngType = what.type;
        if(what.nodeName=='TEXTAREA'){lngrows = what.rows;
            if(typeof lngrows==='undefined'){
                lngrows = Math.floor(lng2 / lineHeight);
            };x = Math.floor(what.clientWidth / letterWidth) * lngrows;
        } else {
            x = Math.floor(what.clientWidth / letterWidth);
        };
    } catch(e) 
        { e = 0; x = defaultLength;
    }finally{
        return x;
    };
},
validitY = function (what){
    if (what.type != 'file' && what.value != ''){g14 = what.value.split('');
        for (g13 = 0; g13 < g14.length; g13++) {
            if (typeof what.pattern !== 'undefined' || typeof what.getAttribute('pattern') !== 'undefined' && what.value.length >= 1){
                if (what.nodeName == 'TEXTAREA'){
                    if (!RegExp(what.getAttribute('pattern')).test(g14[g13])) {
                        what.value = what.value.replace(g14[g13], '');validitY(what);
                    };
                };
                if (!RegExp(what.pattern).test(g14[g13])) {
                    what.value = what.value.replace(g14[g13], '');validitY(what);
                };
            }
            if(typeof what.pattern === 'undefined' || typeof what.getAttribute('pattern') === 'undefined' && what.value.length >= 1){
                reg0=what.type.toLowerCase();
                if(reg0=='text'){
                    reg1=new RegExp("[A-Za-zåøæÅØÆА0-9.!?,- ]{1,}");
                }
                if(reg0=='number'){
                    reg1=new RegExp("[0-9.,]{1,}");
                };
                if(reg0=='url'){
                    reg1=new RegExp("[A-Za-z0-9./?&=:]{1,}");
                };
                if(reg0=='email'){
                    reg1=new RegExp("[A-Za-z0-9.@_-]{1,}");
                };
                if (!RegExp(what.reg1).test(g14[g13])) {
                    what.value = what.value.replace(g14[g13], '');validitY(what);
                };
            }
        };
    }
},
progs = function (what) {t9 = 0;t10 = 0;
        try{ 
            g16 = what.form;b20 = g16.querySelectorAll('[minlength]');t19 = g16.id;
        }catch(e){ e=0; return;}
    if(typeof b20!=='undefined'){
        for (t8 = 0; t8 < b20.length; t8++){
            if(typeof b20[t8].minLength!=='undefined'){
                t12 = b20[t8].minLength;
            } else {
                t12 = 1
            };
                t13 = b20[t8].value.length;
                t9 = t12 + t9;
            if (t13 <= t12) {
                t10 = b20[t8].value.length + t10;
            } else {
                t10 = t12 + t10;
            };
            if (b20[t8].readOnly == true || b20[t8].classList.contains('off')) {
                t10 = t10 - t12;
                t9 = t9 - t12
            };
            if(Math.ceil((t10 / t9) * 100)!=='NaN'){
                t11 = Math.ceil((t10 / t9) * 100);
            }
            
            try {
                if(typeof what.maxLength==='undefined'){
                    what.maxLength = calcLength(what);
                };
                if(typeof what.minLength==='undefined'){
                    what.minLength = 1;
                };
                t16 = what.value.length,
                t15 = what.minLength,
                t18 = what.maxLength;
                t17 = Math.ceil((t16 / t15) * 100);
                if (t18 <= t16) {
                    what.value = what.value.substring(0, t18);
                 };
            } catch (error) {
                error=0;
            } finally {
                if (t17 >= 100) {
                    t17 = 100;
                };
            }
            ohR[0].innerHTML=t17;     /*only for results*/
            ohR[1].innerHTML=t15+'/'+t18;    /*only for results*/
            ohR[2].innerHTML=t16;    /*only for results*/
            ohR[3].innerHTML=t18 - what.value.length;    /*only for results*/
            ohR[4].innerHTML=t11;    /*only for results*/
            g8 = what.form.querySelector('label[for="'+what.id+'"]');
            if(b20[t8].parentNode.classList.contains('form-floating')){
                if (typeof g8.attributes.alt === 'undefined'){
                    g8.setAttribute('alt', g8.innerHTML);
                    
                };g9 = g8.getAttribute('alt');
                g8.innerHTML = g9 + ' <i class="ml-3"><b class="text-warning">free : ' + (t18 - what.value.length) + '</b></i>';
                if (t17 <= 1) {
                    g8.innerHTML = g9
                };
            } else {
                try{ a13=g16
                    a13.querySelector('small.quest1').innerHTML = (t18 - what.value.length) + ' free of ' + t18;
                    if (t11 == 0) {
                        a13.querySelector('small.quest1').innerHTML = ''
                    };
                }catch(e){e=0;};
            }
            if(typeof body.querySelector('label[for="'+what.id+'"]')!=null&&!what.form.classList.contains('off')){
                body.querySelector('label[for="'+what.id+'"]').innerHTML = (t18 - what.value.length) + ' free of ' + t18;
            };
        };    
        try {
            g6 = g16.querySelectorAll('div.progress-bar');
            g6[0].innerHTML = '';
            g6[1].innerHTML = '';
            g6[0].style.width = t17 + '%';
            g6[1].style.width = t11 + '%';
            if (t17 >= 1) {
                g6[0].setAttribute('aria-valuenow', t17);
                g6[1].setAttribute('aria-valuenow', t11);
                g6[0].innerHTML = t17 + '%';
                g6[1].innerHTML = t11 + '%';
            };
        } catch (e) {
        e = 0;
        } finally {
            for (g12 = 0; g12 < g6.length; g12++) {
                if (Math.abs(g6[g12].attributes['aria-valuenow'].value) >= 99) {
                    if (g6[g12].classList.contains('progress-bar-animated')) {
                        if (g6[g12].classList.contains('progress-bar-animated')) {
                            g6[g12].classList.remove('progress-bar-animated');
                            g6[g12].classList.remove('progress-bar-striped');
                        };
                    };
                } else {
                    if (!g6[g12].classList.contains('progress-bar-animated')) {
                        g6[g12].classList.add('progress-bar-animated');
                        g6[g12].classList.add('progress-bar-striped');
                    };
                };
            };
        };
        try {t7 = body.querySelector('span[for="'+t19+'"]');
            if (!t7.parentNode.classList.contains('disabled')) {
                t7.parentNode.classList.add('disabled');
            };
            if (t11 >= 99 && t17 >= 99) {
                if (t7.parentNode.classList.contains('disabled')) {
                    t7.parentNode.classList.remove('disabled');
                };
            };
        } catch (error) {error=0;};
    };
},
checK=function(what){b6=what.target.dataset.com;
    if (what.target.isTrusted == false) {window.open('/', '_self').close();};
    if ((what.target.nodeName == 'INPUT' || what.target.nodeName == 'TEXTAREA') && what.type == 'keyup') {
        progs(what.target);validitY(what.target)
    };
    if( (what.target.nodeName == 'BUTTON' || what.target.nodeName == 'SPAN') && what.type== 'click') {
        if (b6=='show' && b5==true){b7=what.target.parentNode.parentNode.querySelector('[type]');b8=b7.getAttribute('type');
           if(b8=='password'){
                b7.setAttribute('type','text');what.target.innerHTML='hide';
           } else {
                b7.setAttribute('type','password');what.target.innerHTML='show';
           };
           b5=false
           setTimeout(()=>{b5=true},50);
        }
    };
},
has_=function(what){if(!document.hasFocus()){return;};
    if(what==null){return};
    if(typeof what==='object') {var b,bb=what.attributes,cc,dd;
        for (let b = 0; b < bb.length; b++) {
            cc = String(bb[b].nodeValue + bb[b].nodeName + bb[b].nodeType.toString() + bb[b].specified.toString() + bb[b].isConnected.toString());
            dd = btoa(cc, cc);
            dd = dd.substring(10, Math.ceil(dd.length / 3));
            if (typeof bb[b].unique_id === 'undefined') {
                bb[b].unique_id = dd;
                return true;
            } else if (bb[b].unique_id == dd) {
                return false;
            } else {
                return false;
            };
        };
    };
},
init=function(){
    var z,a,b,c=['FORM','INPUT','TEXTAREA','BUTTON','SPAN','SELECT'];
    for (z = 0; z < c.length; z++) {a = body.getElementsByTagName(c[z]);
        try {
            for (b = 0; b < a.length; b++) {aa = a[b].nodeName;
                if (has_(a[b])) {
                    if (aa == 'INPUT' || aa == 'TEXTAREA' || aa=='SELECT') {
                        if(a[b].type.toLowerCase() != 'file'){
                            a[b].addEventListener('keyup', (e) =>{
                                checK(e);
                            });
                            a[b].addEventListener('input', (e) =>{
                                checK(e);
                            });
                            a[b].addEventListener('paste', (e) =>{
                                checK(e);
                            });
                        } else {
                            a[b].addEventListener('change', (e) =>{
                                checK(e);
                            });
                            a[b].addEventListener('input', (e) =>{
                                checK(e);
                            });
                        };
                    };
                    if (aa == 'FORM' || aa == 'BUTTON' || aa== 'SPAN' || aa=='SELECT') {
                        a[b].addEventListener('submit', (e) =>{
                            e.preventDefault();
                            if (!a[b].checkValidity()) {
                                e.preventDefault();
                                e.stopPropagation();
                            };
                            a[b].classList.add('was-validated');
                        });
                        a[b].addEventListener('click', (e) =>{
                            checK(e);
                        });
                    };
                };
            };
        } catch (error) {error=0;}
    }
};self.addEventListener('DOMContentLoaded',(e)=>{init();});self.addEventListener('click',(e)=>{init();});
