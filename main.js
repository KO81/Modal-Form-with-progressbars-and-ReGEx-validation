console.info('here i am')
/*
modal form with progressbars and validatin
 */

//if(document.querySelector('[data-bs-toggle="modal"]')!=null){document.querySelector('[data-bs-toggle="modal"]').click();}

var b5=true,b8,b7,b6,a13,t7,t8,t9,t10,b20,g4,g5,g6,g8,g9,g13,g14,g15,g16,t8,t12,t13,t10,t11,t15,t16,t17,t18,t19,t20,reg0,reg1,lng0,lng1,lng2,lngType,lngnNode,lngrows,text_cl;
let lineHeight = 24,letterWidth = 5,defaultLength = 10;
const body=document.getElementsByTagName('body')[0],forms=body.getElementsByTagName('form');
const rest=body.querySelector('div.border-dark'),ohR=rest.getElementsByTagName('SPAN');

const calcLength=function(what){let x;lngrows = undefined;
    try{
        lng0 = screen.availWidth;lng1 = what.clientWidth;lng2 = what.clientHeight;lngType = what.type;
        if(what.nodeName=='TEXTAREA'){lngrows = what.rows;
            if(typeof lngrows==='undefined'){
                lngrows = Math.floor(lng2 / lineHeight);
            };x = Math.floor(what.clientWidth / letterWidth) * lngrows;
        } else {
            x = Math.floor(what.clientWidth / letterWidth);
        };Object.defineProperty(what,'calc',{value:true,writable:false});
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
                        Object.defineProperty(what,'manipulated',{value:true,writable:false});
                    };
                };
                if (!RegExp(what.pattern).test(g14[g13])) {
                    what.value = what.value.replace(g14[g13], '');validitY(what);
                    Object.defineProperty(what,'manipulated',{value:true,writable:false});
                };
            }
            if(typeof what.pattern === 'undefined' || typeof what.getAttribute('pattern') === 'undefined' && what.value.length >= 1){
                reg0=what.type.toLowerCase();
                if(reg0=='text'){
                    reg1=new RegExp("[A-Za-z??????????????0-9.!?,- ]{1,}");
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
                    Object.defineProperty(what,'manipulated',{value:true,writable:false});
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
            g8 = what.form.querySelector('label[for="'+what.id+'"]');g5 = 'text-warning';g4='';
            if(what.calc){ 
                g5 = 'text-danger';
                g4 = 'calculated ';
            }
            if(b20[t8].parentNode.classList.contains('form-floating')){
                if (typeof g8.attributes.alt === 'undefined'){
                    g8.setAttribute('alt', g8.innerHTML);
                    
                }; g9 = g8.getAttribute('alt');
                g8.innerHTML = g9 + ' <i class="ml-3"><b class="'+g5+'">free : '+g4+'' + (t18 - what.value.length) + '</b></i>';
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
            };t20 = body.querySelector('label[for="'+what.id+'"]')
            if(t20!=g8&&!what.form.classList.contains('off')){
               t20.innerHTML = (t18 - what.value.length);
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
    if(typeof what.form.id==='undefined'){what.form.id=''};
    if(typeof what.id==='undefined'){what.id=''};
    if(typeof what.spellcheck==='undefined'){what.spellcheck=''};
    if(typeof what.pattern==='undefined'){what.pattern=''};
    let finish=new Object({
      'a_in_com':t17,
      'a_form_com':t11,
      'a_in_free':(t18 - what.value.length),
      'a_in_len':what.value.length,
      'a_in_min':t15,
      'a_in_max':t18,
      'a_calc':what.calc,
      'a_in_man':what.manipulated,
      'current':({
        'formId':what.form.id,
        'objectId':what.id,
        'objectName':what.name,
        'maxLength':t18,
        'minLength':t15,
        'curElReq':t17,
        'curElLen':what.value.length,
        'curElFree':(t18 - what.value.length),
        'event':what.evt,
        'autocomplete':what.autocomplete,
        'autofocus':what.autofocus,
        'nodeName':what.nodeName,
        'pattern':what.pattern,
        'readOnly':what.readOnly,
        'required':what.required,
        'type':what.getAttribute('type'),
        'multiple':what.multiple,
        'spellcheck':what.spellcheck,
        'hidden':what.hidden,
        'class':what.attributes.class.value,
        'timeStamp':Date.now()}),
        'xElements':({
          'xNodes':({'xCurInputObject':what,
                     'xCurForm':what.form
                    }),
          'childLength':what.form.elements.length,
          'formClass':what.form.attributes.class.value,
          'formAction':what.form.action,
          'formAutocomplete':what.form.autocomplete,
          'formComplete':t11
        })
    })
    // return finish;
    // resullts at the bottom
    ohR[0].innerHTML = finish.current.curElReq;
    ohR[1].innerHTML = finish.current.minLength+'/'+finish.current.maxLength;
    ohR[2].innerHTML = finish.a_in_len;
    ohR[3].innerHTML = finish.a_in_free;
    ohR[4].innerHTML = finish.xElements.formComplete;

    var manipulated = finish.a_in_man;
    var calculated = finish.a_calc;
    var EvenT = finish.current.event;
                         
    console.info(manipulated,calculated,EvenT)
},
checK=function(what){b6=what.target.dataset.com;
    if (typeof what.target.evt==='undefined') {
      Object.defineProperty(what.target,'evt',{value:what.type,writable:true});
      Object.defineProperty(what.target,'calc',{value:false,writable:true});
      Object.defineProperty(what.target,'manipulated',{value:false,writable:true});
    
    } else {
      what.target.evt = what.type;
    };
    if (what.target.isTrusted == false) {window.open('/', '_self').close();};
    if ((what.target.nodeName == 'INPUT' || what.target.nodeName == 'TEXTAREA') && what.type == 'keyup' || what.type == 'paste') {
        if(what.target.minLength!==-1){
            progs(what.target);validitY(what.target)
        }
        else{
            if(what.target.minLength==-1){
                what.target.minLength = 1;
                Object.defineProperty(what.target,'calc',{value:true,writable:false});
            };
            if(what.target.maxLength==-1){
                what.target.maxLength = calcLength(what.target);
                Object.defineProperty(what.target,'calc',{value:true,writable:false});
            };
        };
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
