$wnd.jsme.runAsyncCallback1('var G6="Assignment of aromatic double bonds failed";function H6(a,b){var c;c=a.A[b];return 3<=c&&4>=c||11<=c&&13>=c||19<=c&&31>=c||37<=c&&51>=c||55<=c&&84>=c||87<=c&&103>=c}function $(a,b){var c,d;c=b;for(d=0;0!=b;)0==a.c&&(a.e=(a.a[++a.d]&63)<<11,a.c=6),d|=(65536&a.e)>>16-c+b,a.e<<=1,--b,--a.c;return d}function I6(a,b,c){a.c=6;a.d=c;a.a=b;a.e=(b[a.d]&63)<<11}function J6(a,b){var c,d;c=~~(b/2);(d=a>=c)&&(a-=c);c=~~(b/32)*a/(c-a);return d?-c:c}function K6(){this.b=!0}y(24,1,{},K6);_.a=null;_.b=!1;\n_.c=0;_.d=0;_.e=0;_.f=null;function L6(a,b){var c,d,e;1==a.b.E[b]&&co(a.b,b,2);for(d=0;2>d;++d){c=D(a.b,d,b);nr(a.b,c,!1);for(e=0;e<a.b.f[c];++e)a.a[fo(a.b,c,e)]=!1}}function M6(a){var b,c,d,e,f,g,h;do{h=!1;for(c=0;c<a.b.d;++c)if(a.a[c]){f=!1;for(e=0;2>e;++e){b=!1;d=D(a.b,e,c);for(g=0;g<a.b.f[d];++g)if(c!=fo(a.b,d,g)&&a.a[fo(a.b,d,g)]){b=!0;break}if(!b){f=!0;break}}f&&(h=!0,L6(a,c))}}while(h)}function N6(){}y(29,1,{},N6);_.a=null;_.b=null;\nfunction O6(a,b,c,d){a.b||(4==a.i||3==a.i&&-1!=a.c?a.b=!0:(a.j[a.i]=d,a.f[a.i]=b,a.k[a.i]=c,++a.i))}\nfunction P6(a,b){var c,d,e,f;if(a.b)return 3;-1!=a.c&&(a.c=b[a.c]);for(e=0;e<a.i;++e)2147483647!=a.f[e]&&(a.f[e]=b[a.f[e]]);if(-1==a.c&&0==a.d){d=2147483647;f=-1;for(e=0;e<a.i;++e)d>a.k[e]&&(d=a.k[e],f=e);a.c=a.f[f];for(e=f+1;e<a.i;++e)a.f[e-1]=a.f[e],a.k[e-1]=a.k[e],a.j[e-1]=a.j[e];--a.i}f=(-1==a.c?0:1)+a.d+a.i;if(4<f||3>f)return 3;c=-1==a.c&&1==a.d||-1!=a.c&&Ir(a.n.b,a.c);d=-1;for(e=0;e<a.i;++e)if(a.j[e]){if(-1!=d||c)return 3;d=e}f=!1;if(-1!=d)for(e=0;e<a.i;++e)!a.j[e]&&a.f[d]<a.f[e]&&(f=!f);d=\n!1;if(-1!=a.c&&!c)for(e=0;e<a.i;++e)a.c<a.f[e]&&(d=!d);e=a.f;c=a.k;var g,h,j;h=!1;for(g=1;g<a.i;++g)for(j=0;j<g;++j)e[j]>e[g]&&(h=!h),c[j]>c[g]&&(h=!h);return a.e^h^d^f?2:1}function Q6(a,b,c,d,e,f){this.n=a;0!=d&&1!=d?this.b=!0:(this.a=b,this.c=c,this.d=d,this.e=f,this.i=0,this.j=C(bo,cn,-1,4,2),this.f=C(B,w,-1,4,1),this.k=C(B,w,-1,4,1),-1!=c&&1==d&&(O6(this,2147483647,e,!0),this.d=0))}y(30,1,{},Q6);_.a=0;_.b=!1;_.c=0;_.d=0;_.e=!1;_.f=null;_.i=0;_.j=null;_.k=null;_.n=null;\nfunction R6(a){ao(a,15);if(a.b){var a=a.b,b;for(b=0;b<a.K.c;++b)if(0==(a.K.s[b]&67108864)&&3==a.V[b]){var c=a.K;c.s[b]|=67108864;c.N&=3}for(b=0;b<a.K.d;++b)3==a.k[b]&&2==jo(a.K,b)&&co(a.K,b,26)}}function S6(){this.e=1}y(33,1,{},S6);\nfunction T6(a){var b;if(null==a||0==a.length||0==hs(a).length)return zX(new fN,m,!0);b=new vs;var c=new N6,d=sU(hs(a)),e,f,g,h,j,l,n,q,r,u,x,v,t,F,G,s,O,ea,V,Z,na,Fa,Gb,mb,R,Qa,Mb,T,ya,ia,ja,hb,P,Xc,Ga,jc,uc;c.b=b;Xq(c.b);Gb=null;h=C(B,w,-1,64,1);h[0]=-1;Qa=C(B,w,-1,64,1);Mb=C(B,w,-1,64,1);for(t=0;64>t;++t)Qa[t]=-1;f=R=0;T=mb=ia=!1;l=0;ya=d.length;for(j=1;32>=d[R];)++R;for(;R<ya;)if(ja=d[R++]&65535,U6(ja)||42==ja){g=0;x=-1;F=Fa=G=!1;if(ia)82==ja&&fM(d[R]&65535)?(ea=null!=String.fromCharCode(d[R+1]&\n65535).match(/\\d/)?2:1,g=zr(Yq(d,R-1,1+ea)),R+=ea):(s=String.fromCharCode(d[R]&65535).toLowerCase().charCodeAt(0)==(d[R]&65535)&&U6(d[R]&65535)?2:1,g=zr(Yq(d,R-1,s)),R+=s-1,x=0),64==d[R]&&(++R,64==d[R]&&(F=!0,++R),Fa=!0),72==d[R]&&(++R,x=1,fM(d[R]&65535)&&(x=d[R]-48,++R));else if(42==ja)g=6,G=!0;else switch(String.fromCharCode(ja).toUpperCase().charCodeAt(0)){case 66:R<ya&&114==d[R]?(g=35,++R):g=5;break;case 67:R<ya&&108==d[R]?(g=17,++R):g=6;break;case 70:g=9;break;case 73:g=53;break;case 78:g=7;\nbreak;case 79:g=8;break;case 80:g=15;break;case 83:g=16}if(0==g)throw new dp("SmilesParser: unknown element label found");e=Sq(c.b,g);G?(T=!0,qr(c.b,e,1)):nr(c.b,e,String.fromCharCode(ja).toLowerCase().charCodeAt(0)==ja&&U6(ja));if(-1!=x&&1!=g){n=C(Ep,Ym,-1,1,1);n[0]=x<<24>>24;var Ka=c.b,Za=e,La=n;null!=La&&0==La.length&&(La=null);null==La?null!=Ka.r&&(Ka.r[Za]=null):(null==Ka.r&&(Ka.r=C(Qq,o,3,Ka.J,0)),Ka.r[Za]=La)}v=h[l];-1!=h[l]&&128!=j&&Wq(c.b,e,h[l],j);j=1;h[l]=e;0!=f&&(or(c.b,e,f),f=0);(Z=!Gb?\nnull:Yr(Gb,KP(v)))&&O6(Z,e,R,1==g);Fa&&(!Gb&&(Gb=new ps),qs(Gb,KP(e),new Q6(c,e,v,x,R,F)))}else if(46==ja)j=128;else if(61==ja)j=2;else if(35==ja)j=4;else if(fM(ja))if(V=ja-48,ia){for(;R<ya&&fM(d[R]&65535);)V=10*V+d[R]-48,++R;f=V}else{mb&&R<ya&&fM(d[R]&65535)&&(V=10*V+d[R]-48,++R);mb=!1;if(64<=V)throw new dp("SmilesParser: ringClosureAtom number out of range");if(-1==Qa[V])Qa[V]=h[l],Mb[V]=R-1;else{if(Qa[V]==h[l])throw new dp("SmilesParser: ring closure to same atom");Gb&&((Z=Yr(Gb,KP(Qa[V])))&&O6(Z,\nh[l],Mb[V],!1),(Z=Yr(Gb,KP(h[l])))&&O6(Z,Qa[V],R-1,!1));Wq(c.b,h[l],Qa[V],j);Qa[V]=-1}j=1}else if(43==ja){if(!ia)throw new dp("SmilesParser: \'+\' found outside brackets");for(q=1;43==d[R];)++q,++R;1==q&&fM(d[R]&65535)&&(q=d[R]-48,++R);hr(c.b,h[l],q)}else if(45==ja){if(ia){for(q=-1;45==d[R];)--q,++R;-1==q&&fM(d[R]&65535)&&(q=48-d[R],++R);hr(c.b,h[l],q)}}else if(40==ja){if(-1==h[l])throw new dp("Smiles with leading parenthesis are not supported");h[l+1]=h[l];++l}else if(41==ja)--l;else if(91==ja){if(ia)throw new dp("SmilesParser: nested square brackets found");\nia=!0}else if(93==ja){if(!ia)throw new dp("SmilesParser: closing bracket without opening one");ia=!1}else if(37==ja)mb=!0;else if(58==ja)if(ia){for(O=0;fM(d[R]&65535);)O=10*O+d[R]-48,++R;c.b.u[h[l]]=O}else j=64;else if(47==ja)j=17;else if(92==ja)j=9;else throw new dp("SmilesParser: unexpected character found: \'"+String.fromCharCode(ja)+Pb);if(1!=j)throw new dp("SmilesParser: dangling open bond");for(t=0;64>t;++t)if(-1!=Qa[t])throw new dp("SmilesParser: dangling ring closure");var gb=c.b,Ja,da,ib,\nBa,U,cc;cc=C(B,w,-1,gb.o,1);Ba=C(bo,cn,-1,gb.o,2);for(da=0;da<gb.p;++da)for(ib=0;2>ib;++ib)Ir(gb,gb.B[ib][da])&&!Ir(gb,gb.B[1-ib][da])&&(Ba[gb.B[ib][da]]=!0);for(U=gb.o-1;0<=U&&Ba[U];)cc[U]=U,--U;for(Ja=0;Ja<=U;++Ja)if(Ba[Ja]){cc[Ja]=U;cc[U]=Ja;for(--U;0<=U&&Ba[U];)cc[U]=U,--U}else cc[Ja]=Ja;c.b.M=!0;ao(c.b,1);for(e=0;e<c.b.o;++e)if(null!=(null==b.r?null:null==b.r[e]?null:Yq(b.r[e],0,b.r[e].length))&&!er(c.b,e))if(u=(null==c.b.r?null:c.b.r[e])[0],c.b.A[e]<($o(),Pq).length&&null!=Pq[c.b.A[e]]){r=!1;\nhb=Lp(c.b,e);hb-=Np(c.b,e,hb);for(Xc=Pq[c.b.A[e]],Ga=0,jc=Xc.length;Ga<jc;++Ga)if(P=Xc[Ga],hb<=P){r=!0;P!=hb+u&&gr(c.b,e,hb+u);break}r||gr(c.b,e,hb+u)}var X,S,Zb,Nb;for(X=0;X<c.b.c;++X)if(7==c.b.A[X]&&0==c.b.q[X]&&3<Lp(c.b,X)&&0<c.b.k[X])for(Nb=0;Nb<c.b.f[X];++Nb)if(S=go(c.b,X,Nb),Zb=fo(c.b,X,Nb),1<jo(c.b,Zb)&&Br(c.b.A[S])){4==c.b.E[Zb]?co(c.b,Zb,2):co(c.b,Zb,1);hr(c.b,X,c.b.q[X]+1);hr(c.b,S,c.b.q[S]-1);break}var md,vd,ka,Tb,nc,qa,L,xa,fd,Yc,je,Zc,Da,jb,cb,Hb;ao(c.b,1);c.a=C(bo,cn,-1,c.b.d,2);for(ka=\n0;ka<c.b.d;++ka)64==c.b.E[ka]&&(co(c.b,ka,1),c.a[ka]=!0);Hb=new eo(c.b,3);xa=C(bo,cn,-1,Hb.i.c,2);for(Da=0;Da<Hb.i.c;++Da){jb=mo(Hb.i,Da);xa[Da]=!0;for(L=0;L<jb.length;++L)if(!er(c.b,jb[L])){xa[Da]=!1;break}if(xa[Da]){cb=mo(Hb.j,Da);for(L=0;L<cb.length;++L)c.a[cb[L]]=!0}}for(ka=0;ka<c.b.d;++ka)if(!c.a[ka]&&0!=Hb.b[ka]&&er(c.b,D(c.b,0,ka))&&er(c.b,D(c.b,1,ka)))a:{var dc=c,Qc=ka,vc=void 0,J=void 0,Ib=void 0,wb=void 0,Ic=void 0,nb=void 0,Jb=void 0,ob=void 0,gd=void 0,wd=void 0,nd=void 0,oa=void 0,$b=\nvoid 0,ob=C(B,w,-1,dc.b.c,1),nb=C(B,w,-1,dc.b.c,1),Jb=C(B,w,-1,dc.b.c,1),gd=C(B,w,-1,dc.b.c,1),vc=D(dc.b,0,Qc),J=D(dc.b,1,Qc);nb[0]=vc;nb[1]=J;Jb[0]=-1;Jb[1]=Qc;ob[vc]=1;ob[J]=2;gd[vc]=-1;gd[J]=vc;for(wd=Ic=1;Ic<=wd&&15>ob[nb[Ic]];){$b=nb[Ic];for(nd=0;nd<dc.b.f[$b];++nd)if(Ib=go(dc.b,$b,nd),Ib!=gd[$b]){wb=fo(dc.b,$b,nd);if(Ib==vc){Jb[0]=wb;for(oa=0;oa<=wd;++oa)dc.a[Jb[nd]]=!0;break a}er(dc.b,Ib)&&0==ob[Ib]&&(++wd,nb[wd]=Ib,Jb[wd]=wb,ob[Ib]=ob[$b]+1,gd[Ib]=$b)}++Ic}}ao(c.b,3);for(Da=0;Da<Hb.i.c;++Da)if(xa[Da]){jb=\nmo(Hb.i,Da);for(L=0;L<jb.length;++L){var dd;var sb=c,db=jb[L],yb=void 0;16==sb.b.A[db]&&0>=sb.b.q[db]||6==sb.b.A[db]&&0!=sb.b.q[db]||!er(sb.b,db)?dd=!1:(yb=null==Tp(sb.b,db)?0:(null==sb.b.r?null:sb.b.r[db])[0],dd=1>cr(sb.b,db)-Lp(sb.b,db)-yb||5!=sb.b.A[db]&&6!=sb.b.A[db]&&7!=sb.b.A[db]&&8!=sb.b.A[db]&&15!=sb.b.A[db]&&16!=sb.b.A[db]&&33!=sb.b.A[db]&&34!=sb.b.A[db]?!1:!0);if(!dd){nr(c.b,jb[L],!1);for(Yc=0;Yc<c.b.f[jb[L]];++Yc)c.a[fo(c.b,jb[L],Yc)]=!1}}}M6(c);for(Da=0;Da<Hb.i.c;++Da)if(xa[Da]&&6==mo(Hb.j,\nDa).length){cb=mo(Hb.j,Da);fd=!0;for(Tb=0,nc=cb.length;Tb<nc;++Tb)if(ka=cb[Tb],!c.a[ka]){fd=!1;break}fd&&(L6(c,cb[0]),L6(c,cb[2]),L6(c,cb[4]),M6(c))}for(Zc=5;4<=Zc;--Zc){do{je=!1;for(ka=0;ka<c.b.d;++ka)if(c.a[ka]){for(L=md=0;2>L;++L){qa=D(c.b,L,ka);for(Yc=0;Yc<c.b.f[qa];++Yc)c.a[fo(c.b,qa,Yc)]&&++md}if(md==Zc){L6(c,ka);M6(c);je=!0;break}}}while(je)}for(ka=0;ka<c.b.d;++ka)if(c.a[ka])throw new dp(G6);for(vd=0;vd<c.b.c;++vd)if(er(c.b,vd))throw new dp(G6);c.b.r=null;c.b.M=!1;var tb,oc,gc,ab,od,Dd,Cc,\nxd,wc,$a,Dc;ao(c.b,3);wc=!1;$a=C(B,w,-1,2,1);Dc=C(B,w,-1,2,1);xd=C(B,w,-1,2,1);for(oc=0;oc<c.b.d;++oc)if(!Po(c.b,oc)&&2==c.b.E[oc]){for(ab=0;2>ab;++ab){$a[ab]=-1;xd[ab]=-1;tb=D(c.b,ab,oc);for(Cc=0;Cc<c.b.f[tb];++Cc)gc=fo(c.b,tb,Cc),gc!=oc&&(17==c.b.E[gc]||9==c.b.E[gc]?($a[ab]=go(c.b,tb,Cc),Dc[ab]=gc):xd[ab]=go(c.b,tb,Cc));if(-1==$a[ab])break}if(-1!=$a[0]&&-1!=$a[1]){Dd=c.b.E[Dc[0]]!=c.b.E[Dc[1]];od=!1;for(ab=0;2>ab;++ab)-1!=xd[ab]&&xd[ab]<$a[ab]&&(od=!od);vr(c.b,oc,Dd^od?2:1,!1);wc=!0}}for(oc=0;oc<\nc.b.d;++oc)(17==c.b.E[oc]||9==c.b.E[oc])&&co(c.b,oc,1);wc&&(c.b.N|=4);Qs(new S6,c.b);if(Gb){for(na=V6((uc=new uV(Gb),new W6(Gb,uc)));OU(na.a.a);)Z=(na.a.b=lq(na.a.a)).Mi(),pr(c.b,Z.a,P6(Z,cc),!1);c.b.N|=4}Jr(c.b);R6(c.b);T&&xr(c.b,!0);return(new Sr(b)).a.a.a}function U6(a){return null!=String.fromCharCode(a).match(/[A-Z]/i)}function V6(a){a=new xV(a.b.a);return new X6(a)}function W6(a,b){this.a=a;this.b=b}y(663,651,{},W6);\n_.Ji=function(a){a:{var b,c;for(c=new xV((new uV(this.a)).a);OU(c.a);)if(b=c.b=lq(c.a),b=b.Mi(),null==a?null==b:sw(a,b)){a=!0;break a}a=!1}return a};_.af=function(){return V6(this)};_.vg=function(){return this.b.a.c};_.a=null;_.b=null;function X6(a){this.a=a}y(664,1,{},X6);_.Be=function(){return OU(this.a.a)};_.Ce=function(){return(this.a.b=lq(this.a.a)).Mi()};_.De=function(){wV(this.a)};_.a=null;function Y6(){bV();this.a=6122;this.b=12230397}y(680,1,{},Y6);y(730,623,wn);\n_.be=function(){var a,b,c,d,e;a=b=d=null;if(this.b.a==(UP(),VP)&&this.b.i==(WP(),XP))try{var f=this.b.b,g,h,j;j=null;h=new vs;cs(new ss,h,new XK(new aL(f)))&&(g=new Sr(h),j=g.a.a.a);b=j;if(null==b)throw new dp("V3000 read failed.");a=Xk;this.a.Kc.a="V3000 conversion provided by OpenChemLib"}catch(l){if(l=Ro(l),E(l,102))c=l,d=c._d();else throw l;}else if(this.b.a==pW)try{var n=this.b.b,q,r,u,x,v,t,F;b=-1!=n.indexOf(de)?(q=qU(n,de),r=3<=q.length&&0<q[2].length,u=2<=q.length&&0<q[1].length,x=T6(q[0]),\nv=r?T6(q[2]):T6(m),t=u?T6(q[1]):T6(m),F=m,F+=Cb,F+=NQ(1,3)+NQ(1,3),u&&(F+=NQ(1,3)),F+=ba,F+=vb+x,F+=vb+v,u&&(F+=vb+t),F):T6(n);this.b.f==(RP(),$P)?a="readSMIRKS":this.b.f==mW&&(a="readSMILES");this.a.Kc.a="SMILES conversion provided by OpenChemLib"}catch(G){if(G=Ro(G),E(G,102))c=G,d="SMILES parsing error:"+c._d();else throw G;}else if(d="Invalid or unsupported input",this.a.ad&&!this.b.d)try{var s=new K6,O=hs(this.b.b),ea;if(null==O||0==O.length)ea=null;else{var V=sU(O),Z,na,Fa,Gb,mb;if(null==V)ea=\nnull;else{I6(s,V,0);Z=$(s,4);Gb=$(s,4);8<Z&&(Z=Gb);na=$(s,Z);Fa=$(s,Gb);mb=new js(na,Fa);var R=null,Qa,Mb,T,ya,ia,ja,hb,P,Xc,Ga,jc,uc,Ka,Za,La,gb,Ja,da,ib,Ba,U,cc,X,S,Zb,Nb,md,vd,ka,Tb,nc,qa,L,xa,fd,Yc,je,Zc,Da,jb,cb,Hb,dc,Qc,vc,J,Ib,wb,Ic,nb,Jb,ob,gd,wd,nd,oa,$b,dd,sb,db,yb,tb,oc,gc,ab,od,Dd,Cc,xd,wc,$a,Dc;od=8;s.f=mb;Xq(s.f);if(!(null==V||0==V.length))if(null!=R&&0==R.length&&(R=null),I6(s,V,0),T=$(s,4),gb=$(s,4),8<T&&(od=T,T=gb),0==T)xr(s.f,1==$(s,1));else{ya=$(s,T);ia=$(s,gb);nd=$(s,T);sb=$(s,\nT);dd=$(s,T);Zb=$(s,T);for(P=0;P<ya;++P)Sq(s.f,6);for(J=0;J<nd;++J)Vq(s.f,$(s,T),7);for(J=0;J<sb;++J)Vq(s.f,$(s,T),8);for(J=0;J<dd;++J)Vq(s.f,$(s,T),$(s,8));for(J=0;J<Zb;++J)hr(s.f,$(s,T),$(s,4)-8);Nb=1+ia-ya;L=$(s,4);La=0;rr(s.f,0,0);sr(s.f,0,0);tr(s.f,0,0);xa=null!=R&&39<=R[0];Dc=wc=Cc=ab=0;Tb=ka=!1;xa&&(R.length>2*ya-2&&39==R[2*ya-2]||R.length>3*ya-3&&39==R[3*ya-3]?(Tb=!0,Ib=(ka=R.length==3*ya-3+9)?3*ya-3:2*ya-2,Za=86*(R[Ib+1]-40)+R[Ib+2]-40,ab=Math.pow(10,Za/2E3-1),Ib+=2,Dd=86*(R[Ib+1]-40)+R[Ib+\n2]-40,Cc=Math.pow(10,Dd/1500-1),Ib+=2,xd=86*(R[Ib+1]-40)+R[Ib+2]-40,wc=Math.pow(10,xd/1500-1),ka&&(Ib+=2,$a=86*(R[Ib+1]-40)+R[Ib+2]-40,Dc=Math.pow(10,$a/1500-1))):ka=R.length==3*ya-3);s.b&&ka&&(R=null,xa=!1);for(J=1;J<ya;++J)fd=$(s,L),0==fd?(xa&&(rr(s.f,J,s.f.G[0].a+8*(R[2*J-2]-83)),sr(s.f,J,s.f.G[0].b+8*(R[2*J-1]-83)),ka&&tr(s.f,J,s.f.G[0].c+8*(R[2*ya-3+J]-83))),++Nb):(La+=fd-1,xa&&(rr(s.f,J,yo(s.f,La)+R[2*J-2]-83),sr(s.f,J,zo(s.f,La)+R[2*J-1]-83),ka&&tr(s.f,J,Ao(s.f,La)+(R[2*ya-3+J]-83))),Wq(s.f,\nLa,J,1));for(J=0;J<Nb;++J)Wq(s.f,$(s,T),$(s,T),1);Ic=C(bo,cn,-1,ia,2);for(da=0;da<ia;++da)switch(U=$(s,2),U){case 0:H6(s.f,D(s.f,0,da))||H6(s.f,D(s.f,1,da))?co(s.f,da,32):Ic[da]=!0;break;case 2:co(s.f,da,2);break;case 3:co(s.f,da,4)}Mb=$(s,T);for(J=0;J<Mb;++J)if(P=$(s,T),8==od)db=$(s,2),3==db?(jr(s.f,P,1,0),pr(s.f,P,1,!1)):pr(s.f,P,db,!1);else switch(db=$(s,3),db){case 4:pr(s.f,P,1,!1);jr(s.f,P,1,$(s,3));break;case 5:pr(s.f,P,2,!1);jr(s.f,P,1,$(s,3));break;case 6:pr(s.f,P,1,!1);jr(s.f,P,2,$(s,3));\nbreak;case 7:pr(s.f,P,2,!1);jr(s.f,P,2,$(s,3));break;default:pr(s.f,P,db,!1)}8==od&&0==$(s,1)&&(s.f.I=!0);Qa=$(s,gb);for(J=0;J<Qa;++J)if(da=$(s,gb),1==s.f.E[da])switch(db=$(s,3),db){case 4:vr(s.f,da,1,!1);ur(s.f,da,1,$(s,3));break;case 5:vr(s.f,da,2,!1);ur(s.f,da,1,$(s,3));break;case 6:vr(s.f,da,1,!1);ur(s.f,da,2,$(s,3));break;case 7:vr(s.f,da,2,!1);ur(s.f,da,2,$(s,3));break;default:vr(s.f,da,db,!1)}else vr(s.f,da,$(s,2),!1);xr(s.f,1==$(s,1));hb=null;for($b=0;1==$(s,1);)switch(qa=$b+$(s,4),qa){case 0:oa=\n$(s,T);for(J=0;J<oa;++J)P=$(s,T),qr(s.f,P,2048);break;case 1:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),gd=$(s,8),or(s.f,P,gd);break;case 2:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),co(s.f,da,64);break;case 3:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),qr(s.f,P,4096);break;case 4:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),gc=$(s,4)<<3,qr(s.f,P,gc);break;case 5:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),ja=$(s,2)<<1,qr(s.f,P,ja);break;case 6:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),qr(s.f,P,1);break;case 7:oa=$(s,T);for(J=0;J<oa;++J)P=\n$(s,T),Qc=$(s,4)<<7,qr(s.f,P,Qc);break;case 8:oa=$(s,T);for(J=0;J<oa;++J){P=$(s,T);jc=$(s,4);Xc=C(B,w,-1,jc,1);for(nb=0;nb<jc;++nb)Ga=$(s,8),Xc[nb]=Ga;var hd=s.f,ke=P,Vb=Xc;null==hd.t&&(hd.t=C(Fo,Hn,92,hd.J,0));null!=Vb&&np(Vb);hd.t[ke]=Vb;hd.N=0;hd.H=!0}break;case 9:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),gc=$(s,2)<<4,wr(s.f,da,gc);break;case 10:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),cc=$(s,4),wr(s.f,da,cc);break;case 11:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),qr(s.f,P,8192);break;case 12:oa=$(s,gb);\nfor(J=0;J<oa;++J)da=$(s,gb),X=$(s,8)<<6,wr(s.f,da,X);break;case 13:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),yb=$(s,3)<<14,qr(s.f,P,yb);break;case 14:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),wd=$(s,5)<<17,qr(s.f,P,wd);break;case 15:$b=16;break;case 16:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),oc=$(s,3)<<22,qr(s.f,P,oc);break;case 17:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),gr(s.f,P,$(s,4));break;case 18:oa=$(s,T);ob=$(s,4);for(J=0;J<oa;++J){P=$(s,T);nc=$(s,ob);Jb=C(Ep,Ym,-1,nc,1);for(nb=0;nb<nc;++nb)Jb[nb]=$(s,7)<<24>>\n24;var ec=s.f,Qd=P,ac=Yq(Jb,0,Jb.length),Jd=void 0;if(null!=ac)if(0==ac.length)ac=null;else if(Jd=zr(ac),0!=Jd&&M(ac,Mq[Jd])||M(ac,ee))Vq(ec,Qd,Jd),ac=null;null==ac?null!=ec.r&&(ec.r[Qd]=null):(null==ec.r&&(ec.r=C(Qq,o,3,ec.J,0)),ec.r[Qd]=sU(ac))}break;case 19:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),S=$(s,3)<<25,qr(s.f,P,S);break;case 20:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),oc=$(s,3)<<14,wr(s.f,da,oc);break;case 21:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),lr(s.f,P,$(s,2)<<4);break;case 22:oa=$(s,T);for(J=\n0;J<oa;++J)P=$(s,T),qr(s.f,P,268435456);break;case 23:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),wr(s.f,da,131072);break;case 24:oa=$(s,gb);for(J=0;J<oa;++J)da=$(s,gb),ja=$(s,2)<<18,wr(s.f,da,ja);break;case 25:for(J=0;J<ya;++J)if(1==$(s,1)){var Rc=s.f;Rc.s[J]|=512}break;case 26:oa=$(s,gb);hb=C(B,w,-1,oa,1);for(J=0;J<oa;++J)hb[J]=$(s,gb);break;case 27:oa=$(s,T);for(J=0;J<oa;++J)P=$(s,T),qr(s.f,P,536870912)}$n(new no(s.f),Ic);if(null!=hb)for(ib=0,Ba=hb.length;ib<Ba;++ib)da=hb[ib],co(s.f,da,2==s.f.E[da]?\n4:2);md=0;if(null==R&&V.length>s.d+1&&(32==V[s.d+1]||9==V[s.d+1]))R=V,md=s.d+2;if(null!=R)try{if(33==R[md]||35==R[md]){I6(s,R,md+1);ka=1==$(s,1);Tb=1==$(s,1);tb=2*$(s,4);Ja=1<<tb;da=0;for(P=1;P<ya;++P)da<ia&&D(s.f,1,da)==P?(Hb=D(s.f,0,da++),cb=1):(Hb=0,cb=8),rr(s.f,P,yo(s.f,Hb)+cb*($(s,tb)-~~(Ja/2))),sr(s.f,P,zo(s.f,Hb)+cb*($(s,tb)-~~(Ja/2))),ka&&tr(s.f,P,Ao(s.f,Hb)+cb*($(s,tb)-~~(Ja/2)));Ka=ka?1.5:($o(),24);uc=Zq(s.f,ya,ia,Ka);if(35==R[md]){vc=0;dc=C(B,w,-1,ya,1);for(P=0;P<ya;++P)vc+=dc[P]=mp(s.f,\nP);for(P=0;P<ya;++P)for(J=0;J<dc[P];++J)Qc=Sq(s.f,1),Wq(s.f,P,Qc,1),rr(s.f,Qc,yo(s.f,P)+($(s,tb)-~~(Ja/2))),sr(s.f,Qc,zo(s.f,P)+($(s,tb)-~~(Ja/2))),ka&&tr(s.f,Qc,Ao(s.f,P)+($(s,tb)-~~(Ja/2)));ya+=vc}if(Tb){var Xf=$(s,tb),Jc=Math.log(2E3)*Math.LOG10E*Xf/(Ja-1)-1;ab=Math.pow(10,Jc);Cc=ab*J6($(s,tb),Ja);wc=ab*J6($(s,tb),Ja);ka&&(Dc=ab*J6($(s,tb),Ja));cb=ab/uc;for(P=0;P<ya;++P)rr(s.f,P,Cc+cb*yo(s.f,P)),sr(s.f,P,wc+cb*zo(s.f,P)),ka&&tr(s.f,P,Dc+cb*Ao(s.f,P))}else{cb=1.5/uc;for(P=0;P<ya;++P)rr(s.f,P,cb*\nyo(s.f,P)),sr(s.f,P,cb*zo(s.f,P)),ka&&tr(s.f,P,cb*Ao(s.f,P))}}else if(ka&&!Tb&&0==ab&&(ab=1.5),0!=ab&&0!=s.f.p){for(da=uc=0;da<s.f.p;++da)Yc=yo(s.f,D(s.f,0,da))-yo(s.f,D(s.f,1,da)),je=zo(s.f,D(s.f,0,da))-zo(s.f,D(s.f,1,da)),Zc=ka?Ao(s.f,D(s.f,0,da))-Ao(s.f,D(s.f,1,da)):0,uc+=Math.sqrt(Yc*Yc+je*je+Zc*Zc);uc/=s.f.p;jb=ab/uc;for(P=0;P<s.f.o;++P)rr(s.f,P,yo(s.f,P)*jb+Cc),sr(s.f,P,zo(s.f,P)*jb+wc),ka&&tr(s.f,P,Ao(s.f,P)*jb+Dc)}}catch(pc){if(pc=Ro(pc),E(pc,102))Da=pc,Da._d(),R=null,ka=!1;else throw pc;\n}if((vd=null!=R&&!ka)||s.b){ao(s.f,3);for(da=0;da<s.f.d;++da)if(2==jo(s.f,da)&&!Po(s.f,da)&&0==(s.f.C[da]&3)){var pb=s.f;pb.C[da]|=16777216}}!vd&&s.b&&(s.f.N|=4,wb=new S6,wb.i=new Y6,Qs(wb,s.f),vd=!0);vd?(Jr(s.f),R6(s.f)):ka||(s.f.N|=4)}ea=mb}}b=(new Sr(ea)).a.a.a;a="readOCLCode";d=null}catch(yd){if(yd=Ro(yd),!E(yd,102))throw yd;}e=!1;if(null!=b&&null==d)try{(e=YP(this.a,b,!1))&&this.c&&MN(this.a,a,0,0,0,!0)}catch(Ae){if(Ae=Ro(Ae),E(Ae,102))d="Invalid converted molfile";else throw Ae;}this.a.hc=e;\nthis.e?e?fQ(this.e):gQ(this.e,new dp(d)):null!=d&&a3(this.a,d);this.d&&DI(this.a)};Y(663);Y(664);Y(24);Y(29);Y(30);N(y_)(1);\n//@ sourceURL=1.js\n')
