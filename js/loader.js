(function(){
// Every resource is a real file (assets/, js/, css/); the manifest maps the original URLs to them
var items=window.__SNAKE_FILES||[];
var map=Object.create(null);
for(var i=0;i<items.length;i++) map[items[i][0]]=items[i];
function keyOf(u){
  if(!u||typeof u!=="string") return "";
  if(u.indexOf("blob:")===0||u.indexOf("data:")===0) return "";
  if(u.indexOf("//")===0) u="https:"+u;
  try{ var x=new URL(u,"https://www.google.com"); return x.pathname+x.search; }catch(e){ return ""; }
}
function fileFor(item){ return item[2]; }
function lookup(u){ var k=keyOf(u); return (k&&map[k])||null; }
function stub(u){ return /gen_204|client_204|csp\.withgoogle|httpservice\/retry|\/async\/bgasy|play\.google\.com\/log|adservice|\/js\/bg\//.test(String(u)); }
var ofetch=window.fetch;
window.fetch=function(input, init){
  var url=typeof input==="string"?input:(input&&input.url)||"";
  var a=lookup(url);
  if(a) return ofetch.call(window,a[2],init);
  if(stub(url)) return Promise.resolve(new Response("",{status:200,headers:{"Content-Type":"text/plain"}}));
  if(ofetch) return ofetch.call(window, input, init);
  return Promise.reject(new Error("offline "+url));
};
var xo=XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open=function(){
  var args=[].slice.call(arguments);
  var url=String(args[1]||"");
  var a=lookup(url);
  if(a) args[1]=fileFor(a);
  else if(stub(url)) args[1]="data:text/plain,";
  return xo.apply(this, args);
};
function mapUrl(v){ var a=lookup(String(v||"")); return a?fileFor(a):v; }
function hookSrc(proto){
  if(!proto) return;
  var d=Object.getOwnPropertyDescriptor(proto,"src");
  if(!d||!d.set||!d.get) return;
  Object.defineProperty(proto,"src",{configurable:true,enumerable:d.enumerable,
    get:function(){return d.get.call(this);},
    set:function(v){ d.set.call(this, mapUrl(v)); }
  });
}
hookSrc(HTMLImageElement.prototype);
hookSrc(HTMLScriptElement.prototype);
if(window.HTMLAudioElement) hookSrc(HTMLAudioElement.prototype);
if(window.HTMLSourceElement) hookSrc(HTMLSourceElement.prototype);
var lh=Object.getOwnPropertyDescriptor(HTMLLinkElement.prototype,"href");
if(lh&&lh.set&&lh.get){
  Object.defineProperty(HTMLLinkElement.prototype,"href",{configurable:true,
    get:function(){return lh.get.call(this);},
    set:function(v){ var a=lookup(String(v||"")); lh.set.call(this, a?fileFor(a):v); }
  });
}
var sa=Element.prototype.setAttribute;
Element.prototype.setAttribute=function(name,value){
  if((name==="src"||name==="href")&&typeof value==="string"){
    var a=lookup(value); if(a) value=fileFor(a);
  }
  return sa.call(this,name,value);
};
var cssItem=map["/xjs/_/ss/k=xjs.s.LzmIVjdeLEE.L.W.O/am=CAAQAAAAAAAAAAgAAAAAAAAAAAAABAggAgAAAAAAAAAAAAAAAAAAAEIAIAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACAAEAAAAAAAAAAAAgAAAEAAAAAAAQRAAAAAAAAAAAIACAAAAAIAQAgAAAACAAAAAAAAAAAAAACj0AAAAQAEAAAAAAIAHMABwEQgAAAAAAAAAAAABAAAAAABAAAAgAQAAAAAAAAAAAAAEEAAAAAAAAAAABAAAAAAAABAAgAChAAAAAAAACgAAgAAAAAAAAQAAAAAAAAAAAQYAESAAAAAAAAAAIAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAACAAAAAAAAAAAEAAAAAAAIIDAAAAAAAEAwAAAAAABgAAAAgEAAACAAAAAAAAAAAAAAAAkQARAAAQAAAAAACAAAAAAAAAAAAAAACBAMAQCgEAAoACAAFXhAIAAAAADgAAIAAAAAAEAACKCAAABAAAAAAAIAAAAAAAAAAgBCAEEAAAABAAAAAAAAAAAAAAgCAAAAAAAAAAAAigAAQgAMAIJABAUshUCBABACAAAAACAAAIICgAAAAAAAAEBAAAAAAAACAAAAAAEQAAAAAAAAAAAAAAAAAAAAAAAAAAFiAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ/d=1/ed=1/cb=loaded_h_0/rs=ACT90oGu7qA7ENexsdv3aOh6e3ZcgIzO6Q/m=X3N0Bf,attn,cdos,cr,gwc,hsm,jsa,mb4ZUb,cEt90b,SNUn3,qddgKe,sTsDMc,dtl0hd,eHDfl,YV5bee,d,csi?cb=121509378"];
if(cssItem){
  var st=document.createElement("link");
  st.rel="stylesheet";
  st.href=fileFor(cssItem);
  document.head.appendChild(st);
}
window.__snakeStart=function(){
  var item=map["/xjs/_/js/k=xjs.s.en.8aXlnig_7XI.2023.O/am=AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAIAAEAAASACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIBAAAAgAQAAAAAAAAAAAAAEEIAAAAAEAAAAAAAAAAwAABAAgACgBAAAAAAKAgAAAAAAAAAAAAAAAAAAAAAAASAAAQAAIAICAAAAIAAAwD8EAAAAAA0AAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIQAAAAAAAAAAgAUAAAAAQAABAAAEgAACIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAIACAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAABAAAACAAgAAAAAAACAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAgAADAAAAAAAAAAAAAACAwA8AAEAAAAAAAAAAAQAAAAAAAAAAAAAAAEAAAAAAAAAAEAAAgAIAAABwAB4PMERQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAUwB5KCABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEVP2RoAEA/d=1/ed=1/dg=4/ichc=1/rs=ACT90oGUtf3KrEt7hyr85UkHDSbiWnJFnQ/ee=ALeJib:B8gLwd;AfeaP:TkrAjf;BMxAGc:E5bFse;BgS6mb:fidj5d;BjwMce:cXX2Wb;BuJtU:v6yjN;CIZTGb:Kqhykb;CxXAWb:YyRLvc;D0uLQb:UrRsXe;DM55c:imLrKe;DQEued:Fevhcf;DULqB:RKfG5c;Dkk6ge:JZmW9e;DpcR3d:zL72xf;EABSZ:MXZt9d;ESrPQc:mNTJvc;EVNhjf:pw70Gc;EjXHpb:pSHqh;EmZ2Bf:zr1jrb;EnlcNd:WeHg4;F54IAe:ZgsFh;F9mqte:UoRcbe;FSxmUe:fiZR8b;Fkukfc:i8H2c;Fmv9Nc:O1Tzwc;FqHJkd:yQamIb;G0KhTb:LIaoZ;GleZL:J1A7Od;HMDDWe:G8QUdb;HtPxrd:Gx8jAb;IBADCc:RYquRb;ImvEf:IBTA4e;IsdWVc:qzxzOb;JXJSm:ii1RGf;JXS8fb:Qj0suc;JqSq7d:y9ePhe;JsbNhc:Xd8iUd;K08hxe:zmbGlf;K5nYTd:ZDZcre;KA3P2:C3JnCe;KDb6nb:fE9n2;KOxcK:OZqGte;KQzWid:ZMKkN;KdIHef:BWtNj;KpRAue:Tia57b;LBgRLc:SdcwHb,XVMNvd;LBn8Cf:bJ9L0c;LEikZe:byfTOb,lsjVmc;LXA8b:q7OdKd;LsNahb:ucGLNb;MNkAde:KMCd1d;NJ1rfe:qTnoBf;NPKaK:SdcwHb;NSEoX:lazG7b;NjIwef:YVgi7d;Np8Qkd:Dpx6qc;Nyt6ic:jn2sGd;OIfWUb:qfOYcd;OiqE2c:TFpEK;OoK5v:Sp69O;OohIYe:mpEAQb;Pjplud:PoEs9b;PpTLXd:pJYjx;Q1Ow7b:x5CSu;Q7iJ9c:bVLZ3d;QE20Be:yxCHBd;QFOGlf:PQ2Aoe;QGR0gd:Mlhmy;QYLF2b:pAQYUd;Qk7yid:BbYS0d;Qw8Feb:jpavUe;R4IIIb:QWfeKf;R9Ulx:CR7Ufe;RCF5Sd:X1kBmd;RZKicf:PQXVv;RZtOEd:DvKcFe;Raf5me:mgvFMc;SFghJd:YRZpK;SLtqO:Kh1xYe;SNUn3:ZwDk9d,xD8Kp;SNk4Je:wWMhg;ScI3Yc:e7Hzgb,e7Hzgb;ShpF6e:N0pvGc;Snahre:mGCtob;SzQQ3e:dNhofb;TIUVQd:lWTJwd;TroZ1d:vVVzjb;U96pRd:FsR04;UBKJZ:LGDJGb;UDrY1c:N0F29d,W50NVd,eps46d,wciyUe;UVmjEd:EesRsb;UVzb9c:IvPZ6d;UYRIEb:HzTAQc;UyG7Kb:wQd0G;V2HTTe:RolTY;VGRfx:VFqbr;VMuEm:pL7sBc;VN6jIc:ddQyuf;VOcgDe:YquhTb;VhA7bd:vAmQFf;VsAqSb:PGf2Re;W9QSQe:ynCWwc;WDGyFe:jcVOxd;WXtNeb:QU9BMd;Wfmdue:g3MJlb;Wl55ib:NcYlP;Y3c5sd:FGbfLe;YIZmRd:A1yn5d;YV5bee:IvPZ6d;YnHUBf:sNsSob;ZMvdv:PHFPjb;ZSH6tc:QAvyLe;Zen4yb:jMF88c;ZlFEdf:fQTtic;ZlOOMb:P0I0Ec;ZnPvub:Acmyhd;a56pNe:JEfCwb;aAJE9c:WHW6Ef;aCJ9tf:qKftvc;aVZq3e:EMeVIb;aZ61od:arTwJ;aci7y:Z5Tr6c;bUIkwb:WMwEHe;bcPXSc:gSZLJb;cEt90b:ws9Tlc;cFTWae:gT8qnd;coJ8e:KvoW8;dIoSBb:ZgGg9b;dLlj2:Qqt3Gf;dXdZV:a7QTqd;dowIGb:ebZ3mb,ebZ3mb;dtl0hd:lLQWFe;eBAeSb:Ck63tb;eBZ5Nd:audvde;eHDfl:HQyHcc,ofjVkb;eJKchc:ATg1be;eO3lse:UefOmb;euOXY:OZjbQ;g8nkx:U4MzKc;gTtPhb:RvPnwb;gaub4:TN6bMe;gbfHR:qZtzib;gtVSi:ekUOYd;h3MYod:ws9Tlc;hK67qb:QWEO5b;hVic1b:Kqhykb;heHB1:sFczq;hjRo6e:F62sG;hlqGX:FWz1ic;hsLsYc:Vl118;hwoVHd:zw4U8c;iFQyKf:QIhFr;jJj2G:kF2o2b;k1O0rf:pnOULd;k2Qxcb:XY51pe;kbAm9d:MkHyGd;lOO0Vd:OTA3Ae;lbfkyf:MqGdUd;liAz7d:kF2o2b;lkq0A:JyBE3e;mMVOGb:qDM7K;mWzs9c:fz5ukf;mtKMCc:ZG5Tfe;nBZnZe:CvErjb;nE6OJf:Fi4rsc;nEBWNb:MxKX9d;nJw4Gd:dPFZH;nrDcw:SuEoDe;oGtAuc:sOXFj;oUlnpc:RagDlc;oiBhre:OuMkRd;okUaUd:wItadb;osNlFe:eRJvTc;pKJiXd:VCenhc;pNsl2d:j9Yuyc;pXdRYb:JKoKVe;pj82le:ww04Df;qGV2uc:HHi04c;qQEoOc:KUM7Z,d7YSfd;qZx2Fc:j0xrE;qaS3gd:yiLg6e;qafBPd:sgY6Zb;qavrXe:I0C9u;qddgKe:d7YSfd,x4FYXe;rdexKf:FEkKD;rmWaj:PMS6Sd;ropkZ:hjoqoe;sTsDMc:JksfDf;sZmdvc:rdGEfc;tH4IIe:Ymry6;teSRSb:BMLai;tosKvd:ZCqP3;trZL0b:qY8PFe;twgzJd:Ix7YEd;uJfyCe:WJ5gBc;uknmt:GkPrzb;uuQkY:u2V3ud;vEYCNb:FaqsVd;vRlMvf:Iw9Xo;vfVwPd:lcrkwe;w3bZCb:ZPGaIb;w9w86d:XwhUEb,dt4g2b,gKD90c,lWVZVe;wFpbG:JbGbBc;wQlYve:aLUfP;wR5FRb:O1Gjze,TtcOte;wV5Pjc:L8KGxe;wxAT5b:tHKmqf;x9N9ie:KH4Qof;xBbsrc:NEW1Qc;xpaRob:AVqZ9b;yiL5Ab:MT0ZBd;ysNiMc:CpIBjd;yxTchf:KUM7Z;z97YGf:oug9te;zaIgPb:Sl0pxd/cb=loaded_h_0/m=X3N0Bf,attn,cdos,cr,gwc,hsm,jsa,mb4ZUb,cEt90b,SNUn3,qddgKe,sTsDMc,dtl0hd,eHDfl,YV5bee,d,csi?cb=121509378"];
  if(!item){console.error("missing snake entry");return;}
  var s=document.createElement("script");
  s.async=false;
  s.src=fileFor(item);
  document.body.appendChild(s);
};

// Fix images / sources / backgrounds that were already parsed or set by Google JS
function fixExisting(){
  function fixEl(el, attr){
    var v = el.getAttribute(attr);
    if(!v) return;
    var a = lookup(v);
    if(a) {
      try { el[attr] = fileFor(a); } catch(e){}
      try { el.setAttribute(attr, fileFor(a)); } catch(e){}
    }
  }
  document.querySelectorAll("img[src], source[src], audio[src]").forEach(function(el){
    fixEl(el, "src");
  });
  document.querySelectorAll("link[href], a[href]").forEach(function(el){
    var v = el.getAttribute("href");
    if(v && lookup(v)) {
      try { el.href = fileFor(lookup(v)); } catch(e){}
    }
  });
  // Inline styles with url()
  document.querySelectorAll("[style*='url(']").forEach(function(el){
    var s = el.getAttribute("style") || "";
    var changed = false;
    var ns = s.replace(/url\((['"]?)([^)'"]+)\1\)/gi, function(m, q, u){
      var a = lookup(u);
      if(a){ changed = true; return "url(" + q + fileFor(a) + q + ")"; }
      return m;
    });
    if(changed) el.setAttribute("style", ns);
  });
}
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", fixExisting);
} else {
  fixExisting();
}
setTimeout(fixExisting, 300);
setTimeout(fixExisting, 1000);
setTimeout(fixExisting, 2500);
// Watch for late-added elements
if(window.MutationObserver){
  var mo = new MutationObserver(function(){ fixExisting(); });
  mo.observe(document.documentElement, {childList:true, subtree:true, attributes:true, attributeFilter:["style","src","href"]});
}
})();
