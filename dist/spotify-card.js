// e:
// o:
// s
// r
// a





!function(e) {
  "function" == typeof define && define.amd?define(["core-js/stable"],e): e()
}
  (function() {
    "use strict";
    var e = function(){}, t={}, n=[], i=[];
    function o(t,o) {
      var s,r,a,l,c = i;
      for (l=arguments.length;l-- >2;) n.push(arguments[l]);
      for (o && null != o.children && (n.length||n.push(o.children), delete o.children); n.length;)
      if ((r=n.pop()) && void 0 !== r.pop)
      for (l=r.length; l--;) n.push(r[l]);
      else "boolean"== typeof r && (r=null), (a="function" != typeof t) && (null==r ? r="" : "number"==typeof r?r=String(r):"string"!=typeof r&&(a=!1)),a&&s?c[c.length-1]+=r:c===i?c=[r]:c.push(r),s=a;
      var p = new e;
      return p.nodeName=t,p.children=c,p.attributes=null==o?void 0:o,p.key=null==o?void 0:o.key,p} function s(e,t) { 
        for (var n in t) e[n]=t[n];
        return e 
      }
        function r(e,t) {
          null != e && ("function"==typeof e?e(t):e.current=t)
        } 
        var a = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,l=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,c=[];
        function p(e) {
          !e._dirty && (e._dirty =! 0) && 1==c.push(e) && a(d) }
        function d() {
          for (var e;e=c.pop();) e._dirty && B(e) }
        function h(e,t,n) { 
          return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText:"string"==typeof t.nodeName ? !e._componentConstructor && u(e,t.nodeName) : n||e._componentConstructor===t.nodeName }
        function u(e,t) {
          return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
        } 
        function f(e) {
          var t = s({}, e.attributes);
          t.children = e.children;
          var n = e.nodeName.defaultProps;
          if (void 0 !== n) for (var i in n) void 0===t[i] && (t[i]=n[i]);
          return t
        } 
        function v(e) {
          var t=e.parentNode;
          t&&t.removeChild(e)
        }
        function y(e,t,n,i,o) {
          if ("className" === t && (t="class"), "key"===t);
          else if ("ref" === t) {
            r(n,null), r(i,e);
          }
          else if ("class" !== t || o) if ("style"===t) {
            if (i && "string"!=typeof i && "string" != typeof n || (e.style.cssText=i||""), i && "object"==typeof i) {
              if ("string"!=typeof n) for(var s in n)s in i||(e.style[s]="");
              for (var s in i) e.style[s]="number" == typeof i[s] &&! 1 === l.test(s) ? i[s] + "px" : i[s]
            }
          }
          else if ("dangerouslySetInnerHTML" === t) i && (e.innerHTML=i.__html || "");
          else if ("o" == t[0] && "n" == t[1]) {
            var a  =t !== (t = t.replace(/Capture$/,""));
            t = t.toLowerCase().substring(2), i?n||e.addEventListener(t,m,a) : e.removeEventListener(t,m,a), (e._listeners||(e._listeners={}))[t] = i
          } 
          else if ("list" !== t && "type" !== t && !o && t in e) { 
            try {
              e[t]=null==i?"":i
            } 
            catch(e) {} 
            null != i && !1 !== i || "spellcheck" == t || e.removeAttribute(t)
          } else {
              var c = o && t !== (t = t.replace(/^xlink:?/,""));
              null == i || !1 === i ? c ? e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()) : e.removeAttribute(t) : "function"!=typeof i && (c ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(),i) : e.setAttribute(t,i))
          } 
          else e.className = i || ""
        } 
            
        function m(e) {
          return this._listeners[e.type](e)
        } 
        var g = [], _= 0, b =! 1, x =! 1;
        function w() {
          for(var e; e=g.shift();) e.componentDidMount && e.componentDidMount() 
        }
      
        function C(e,t,n,i,o,s) { 
          _++||(b=null!=o&&void 0!==o.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var r=k(e,t,n,i,s);
          return o && r.parentNode !== o && o.appendChild(r), --_ || (x=!1,s||w()), r 
        }
        function k(e,t,n,i,o) {
          var s=e,r=b;
          if (null != t && "boolean" != typeof t || (t=""), "string" == typeof t ||"number" == typeof t) {
            return e && void 0 !== e.splitText && e.parentNode && (!e._component||o) ? e.nodeValue != t && (e.nodeValue=t) : (s=document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(s,e), S(e,!0))), s.__preactattr_=!0, s;
          }
          var a,l,c=t.nodeName;
          if ("function" == typeof c) return function(e,t,n,i) { 
            var o = e && e._component, s=o, r=e, a=o && e._componentConstructor === t.nodeName, l=a, c=f(t);
            for(;o&&!l&&(o=o._parentComponent);) l=o.constructor === t.nodeName; o && l && (!i||o._component) ? (T(o,c,3,n,i),e=o.base) : (s&&!a&&(E(s),e=r=null), o=D(t.nodeName,c,n),e &&! o.nextBase && (o.nextBase=e,r=null), T(o,c,1,n,i), e=o.base,r && e !== r && (r._component=null,S(r,!1)));
            return e 
          }
          
          (e,t,n,i);

          if (b = "svg" === c||"foreignObject" !== c && b, c = String(c), (!e||!u(e,c)) && (a=c, (l=b ? document.createElementNS("http://www.w3.org/2000/svg",a) : document.createElement(a)).normalizedNodeName=a,s=l,e)) {
            for (;e.firstChild;) s.appendChild(e.firstChild); e.parentNode&&e.parentNode.replaceChild(s,e),S(e,!0)
          }
          
          var p=s.firstChild, d=s.__preactattr_, m=t.children;
          if (null==d) {
            d=s.__preactattr_={};
            for (var g=s.attributes,_=g.length;_--;) d[g[_].name] = g[_].value 
          } 
          
          return !x && m && 1 === m.length && "string" == typeof m[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != m[0] && (p.nodeValue=m[0]) : (m && m.length || null != p) && function(e,t,n,i,o) {
            var s,r,a,l,c,p = e.childNodes, d=[], u={}, f=0, y=0, m=p.length, g=0, _=t ?t.length: 0;
            if (0!==m) for (var b=0;b<m;b++) {
              var x=p[b], w=x.__preactattr_, C=_&&w ? x._component ? x._component.__key : w.key:null;
              null != C ? (f++, u[C]=x): (w || (void 0 !== x.splitText? !o || x.nodeValue.trim() : o)) && (d[g++]=x)
            } 
            if (0!==_) for(var b=0;b<_;b++) { 
              l=t[b], c=null; var C=l.key; if(null!=C)f && void 0 !== u[C] && (c=u[C], u[C]=void 0, f--);
              else if (y < g) for (s=y; s<g; s++) { 
                if (void 0 !== d[s] && h(r=d[s],l,o)) {
                  c=r,d[s]=void 0,s===g-1&&g--,s===y&&y++;
                  break
                }  
              } c=k(c,l,n,i),a=p[b],c&&c!==e&&c!==a&&(null==a?e.appendChild(c):c===a.nextSibling?v(a):e.insertBefore(c,a))
            }
            if (f) for (var b in u) void 0 !== u[b] && S(u[b],!1); 
            for (;y<=g;) void 0 !== (c=d[g--]) && S(c,!1)
          } 
          
          (s,m,n,i,x || null != d.dangerouslySetInnerHTML), function(e,t,n) {
            var i;
            for (i in n) t && null != t[i] || null == n[i] || y(e,i,n[i],n[i] = void 0,b);
            for (i in t) "children" === i || "innerHTML" === i || i in n && t[i] === ("value" === i || "checked" === i ? e[i] : n[i]) || y(e,i,n[i], n[i]=t[i], b)
          }
          (s,t.attributes,d) , b=r, s 
        }

        function S(e,t) {
          var n=e._component;n ? E(n) : (null != e.__preactattr_ && r(e.__preactattr_.ref,null) , !1 !== t && null != e.__preactattr_ || v(e),$(e))
        }
        function $(e) {
          for (e=e.lastChild;e;) {
            var t=e.previousSibling;
            S(e,!0),e=t
          }
        }
        var P = [];
        function D(e,t,n) {
          var i,o=P.length;
          for (e.prototype && e.prototype.render ? (i=new e(t,n),M.call(i,t,n)):((i=new M(t,n)).constructor=e,i.render=N);o--;) 
            if (P[o].constructor===e) return i.nextBase=P[o].nextBase,P.splice(o,1),i;
          return i
        }
        function N(e,t,n) {
          return this.constructor(e,n)
        } 
        function T(e,n,i,o,s) {
          e._disable || (e._disable = !0, e.__ref = n.ref, e.__key=n.key, delete n.ref, delete n.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || s ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(n,o)), o && o !== e.context && (e.prevContext || (e.prevContext=e.context), e.context = o), e.prevProps || (e.prevProps=e.props), e.props=n, e._disable= !1, 0 !== i && (1 !== i&& !1 === t.syncComponentUpdates && e.base ? p(e) : B(e,1,s)), r(e.__ref,e))
        } 
        function B(e,t,n,i) {
          if (!e._disable) {
            var o,r,a,l = e.props, c=e.state, p=e.context, d=e.prevProps || l, h=e.prevState || c, u=e.prevContext || p, v=e.base, y=e.nextBase, m=v || y,b = e._component, x=!1, k=u;
            if (e.constructor.getDerivedStateFromProps && (c=s(s({},c), e.constructor.getDerivedStateFromProps(l,c)), e.state=c), v && (e.props=d, e.state=h, e.context=u, 2!==t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(l,c,p) ? x= !0 : e.componentWillUpdate && e.componentWillUpdate(l,c,p), e.props=l, e.state=c, e.context=p), e.prevProps=e.prevState=e.prevContext=e.nextBase=null, e._dirty=!1,!x) {
              o=e.render(l,c,p), e.getChildContext&&(p=s(s({},p), e.getChildContext())), v && e.getSnapshotBeforeUpdate && (k=e.getSnapshotBeforeUpdate(d,h));
              var $,P,N=o&&o.nodeName;
              if ("function" == typeof N) {
                var M=f(o);
                (r=b) && r.constructor === N && M.key==r.__key ? T(r,M,1,p,!1) : ($=r,e._component=r=D(N,M,p), r.nextBase=r.nextBase || y,r._parentComponent=e,T(r,M,0,p,!1),B(r,1,n,!0)), P=r.base
              } else a=m,($=b) && (a=e._component=null), (m||1===t) && (a && (a._component=null), P=C(a,o,p,n||!v,m&&m.parentNode,!0));
              if (m&&P !== m && r!==b) {
                var U = m.parentNode;
                U && P !== U && (U.replaceChild(P,m), $||(m._component=null,S(m,!1)))
              }
              if ($&&E($), e.base=P,P&&!i) {
                for (var I=e, z=e; z=z._parentComponent;)
                  (I=z).base=P;
                  P._component=I, P._componentConstructor=I.constructor
              }
            }
            for (!v || n?g.push(e):x || e.componentDidUpdate && e.componentDidUpdate(d,h,k); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);_||i||w()
          }
        }

        function E(e) {
          var t=e.base;
          e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base=null;
          var n=e._component;
          n?E(n):t && (null != t.__preactattr_ && r(t.__preactattr_.ref,null), e.nextBase=t, v(t), P.push(e), $(t)), r(e.__ref,null)
        }
              
              
        function M(e,t) {
          this._dirty = !0, this.context=t, this.props=e, this.state=this.state || {}, this._renderCallbacks=[]
        } 
        s(M.prototype, { setState:function(e,t) {
          this.prevState || (this.prevState=this.state), this.state=s(s({},this.state), "function"==typeof e?e(this.state,this.props):e), t&&this._renderCallbacks.push(t), p(this)
        }, 
        forceUpdate:function(e) {
          e && this._renderCallbacks.push(e), B(this,2)
        }, render:function(){}
        });

        var U = function(e,t,n,i) {
          for (var o=1;o<t.length;o++) {
            var s=t[o++], r="number" == typeof s?n[s]:s; 
            1===t[o]?i[0]=r:2===t[o]?(i[1]=i[1]||{}) [t[++o]]=r:3===t[o]?i[1]=Object.assign(i[1]||{},r):i.push(t[o]?e.apply(null,U(e,r,n,["",null])):r)
          } 
          return i
        }, 
        I = function(e) {
          for (var t,n,i=1,o="",s="",r=[0],a=function(e) {
            1===i && (e || (o=o.replace(/^\s*\n\s*|\s*\n\s*$/g,""))) ? r.push(e||o,0):3 === i && (e||o)?(r.push(e||o,1),i=2):2===i && "..."===o && e?r.push(e,3):2===i && o && !e?r.push(!0,2,o):4===i && n && (r.push(e||o,2,n),n=""),o=""
          }, l=0; l<e.length;l++) { 
              l&&(1===i&&a(),a(l));
              for (var c=0; c<e[l].length; c++) t=e[l][c], 1===i?"<" === t?(a(), r=[r], i=3):o += t:s? t=== s?s="":o+=t:'"'===t || "'" === t?s=t:">"===t?(a(),i=1):i && ("=" === t?(i=4, n=o, o=""):"/"===t?(a(),3===i&&(r=r[0]),i=r,(r=r[0]).push(i,4),i=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(a(),i=2):o+=t)}return a(), r
        }, 
        z = "function" == typeof Map, A=z?new Map:{}, L=z?function(e) {
          var t=A.get(e);
          return t||A.set(e,t=I(e)),t
        }: function(e) {
            for (var t="", n=0; n < e.length; n++) t += e[n].length + "-" + e[n];
            return A[t] || (A[t] = I(e))
          };
        
          function R(e) {
              var t=U(this,L(e), arguments,[]);
              return t.length>1?t:t[0]
            }
            const W=R.bind(o);
            class q extends M{constructor(){
              super(),this.state = {
              selectedDevice:"-- choose mediaplayer --", castEntities:[]
              }
            } componentWillUnmount(){"function"==typeof this.unsubscribeEntitites&&this.unsubscribeEntitites()}async componentDidMount(){await this.refreshCastEntities(),this.dataRefreshToken=setInterval(async()=>{await this.refreshCastEntities()},5e3)}async refreshCastEntities(){const e=(await this.props.hass.callWS({type:"config/entity_registry/list"})).filter(e=>"cast"==e.platform).map(e=>this.props.hass.states[e.entity_id]).filter(e=>null!=e);this.setState({castEntities:e})}componentWillUnmount(){clearInterval(this.dataRefreshToken)}componentWillReceiveProps(e,t){e.selectedDevice&&this.setState({selectedDevice:e.selectedDevice.name})}selectDevice(e){this.setState({selectedDevice:e.name}),this.props.onMediaplayerSelect(e)}selectChromecastDevice(e){this.props.onChromecastDeviceSelect(e)}render(){const{devices:e}=this.props,{castEntities:t}=this.state,n=W`
      <div class="dropdown-content">
        <a onClick=${()=>{}}><i>Spotify Connect devices</i></a>
        ${e.map((e,t)=>W`
            <a onClick=${()=>this.selectDevice(e)} style="margin-left: 15px">${e.name}</a>
          `)}
        <a onClick=${()=>{}}><i>Chromecast devices</i></a>
        ${t.map(e=>W`
            <a onClick=${()=>this.selectChromecastDevice(e.attributes.friendly_name)} style="margin-left: 15px"
              >${e.attributes.friendly_name}</a
            >
          `)}
      </div>
    `;
    let i = ""; 
    if (this.props.player && this.props.player == this.state.selectedDevice) i=""; 
    else if (this.props.player && this.props.player != this.state.selectedDevice) {
      const t=e.filter(e=>e.name==this.props.player);
      1==t.length?(i="",this.selectDevice(t[0])):i=n
    } else i=n;
    return W`
      <div class="dropdown">
        <div class="mediaplayer_select">
          <svg
            class="mediaplayer_speaker_icon"
            width="220"
            height="220"
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#c9c9c9"
              d="M197.766 112.275q0 56.608-34.867 105.006l-8.157-6.984q32.743-44.355 32.743-98.022 0-52.565-32.632-97.9l8.158-6.984q34.755 48.398 34.755 104.884zm-24.586 0q0 46.928-28.831 88.22l-8.158-6.74q26.708-38.228 26.708-81.48 0-43.13-26.708-81.359l8.158-6.74q28.831 40.435 28.831 88.099zm-24.585 0q0 37.126-22.908 71.434l-8.27-6.617q20.897-30.632 20.897-64.817 0-33.573-20.897-64.818l8.27-6.616q22.908 34.308 22.908 71.434zm-54.646 89.2l-52.634-53.3H8.125V76.374h33.302l52.522-53.177v178.278z"
              stroke="null"
            />
          </svg>
          ${this.state.selectedDevice}
        </div>
        ${i}
      </div>
    `
        }
      }
    
    

    const H=R.bind(o);class j extends M{constructor(e) {
      super(e), this.dataRefreshToken=null, this.state = {
        playlists:[], devices:[], selectedDevice:null, selectedPlaylist:null, currentPlayer:null, playingPlaylist:null, authenticationRequired:!0
      },
      this.scopes = ["playlist-read-private","user-read-playback-state","user-modify-playback-state"]
    }
    
    async componentDidMount(){
      document.addEventListener("visibilitychange",async()=>{
        document.hidden || (await this.checkAuthentication(), await this.refreshPlayData())
      }),
      await this.checkAuthentication(), await this.refreshPlayData(), this.dataRefreshToken=setInterval(async()=>{
        await this.refreshPlayData()
      }, 5e3)
    }
      
    componentWillUnmount() {
      clearInterval(this.dataRefreshToken)
    } async checkAuthentication() {
      const e=new URLSearchParams(window.location.hash.substring(1)), t=e.get("access_token") || localStorage.getItem("access_token"), n=localStorage.getItem("token_expires_ms"), i={Authorization:`Bearer ${t}`}, o=await fetch("https://api.spotify.com/v1/me",{headers:i}).then(e=>e.json()); 
      if (o.error) return 401 === o.error.status? t && 0+n-(new Date).getTime()<0?this.authenticateSpotify():this.setState({authenticationRequired:!0}):(console.error("This should never happen:",response),this.setState({error:response.error})); 
      if (e.get("access_token")) {
        const n=e.get("expires_in");
        localStorage.setItem("access_token",t), localStorage.setItem("token_expires_ms", (new Date).getTime()+1e3*n);
        const i=window.location.href.split("#")[0];
        window.history.pushState({path:i}, "", i)
      }
      this.setState({authenticationRequired:!1})
    }
    async refreshPlayData() {
      if (document.hidden) return;
      await this.checkAuthentication();
      const e = {Authorization:`Bearer ${localStorage.getItem("access_token")}`}, t=await fetch("https://api.spotify.com/v1/me/playlists?limit="+this.props.limit, {headers:e}).then(e=>e.json()).then(e=>e.items), n=await fetch("https://api.spotify.com/v1/me/player/devices", {headers:e}).then(e=>e.json()).then(e=>e.devices), i=await fetch("https://api.spotify.com/v1/me/player", {headers:e});
      let o, s=null, r=null;
      if (200 === i.status && (o=(r=await i.json()).device,r.context && r.context.external_urls)) {
        const e=r.context.external_urls.spotify;
        s=t.find(t=>e===t.external_urls.spotify)
      }
      this.setState({playlists:t,devices:n,selectedDevice:o,playingPlaylist:s,currentPlayer:r})
    }
      authenticateSpotify() {
        const e=window.location.href.split("?")[0], {clientId:t}=this.props;window.location.href=`https://accounts.spotify.com/authorize?client_id=${t}&redirect_uri=${e}&scope=${this.scopes.join("%20")}&response_type=token`}playPlaylist() {
          const{selectedPlaylist:e,selectedDevice:t}=this.state;
          e && t?fetch("https://api.spotify.com/v1/me/player/play?device_id="+t.id, {method:"PUT",headers:{"Content-Type":"application/json", Authorization:`Bearer ${localStorage.getItem("access_token")}`}, body:JSON.stringify({context_uri:e.uri})}).then(()=>this.setState({playingPlaylist:e})):console.error("Will not play because there is no playlist or device selected,",e,t)}onPlaylistSelect(e){this.setState({selectedPlaylist:e}), this.playPlaylist()}onMediaPlayerSelect(e){this.setState({selectedDevice:e}), this.state.currentPlayer&&fetch("https://api.spotify.com/v1/me/player", {method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("access_token")}`},body:JSON.stringify({device_ids:[e.id],play:!0})})}onChromecastDeviceSelect(e){const t=this.state.playingPlaylist?this.state.playingPlaylist:this.state.playlists[0];t?this.props.hass.callService("spotcast","start",{device_name:e,uri:t.uri,transfer_playback:null!=this.state.currentPlayer}):console.error("Nothing to play, skipping starting chromecast device")}getHighlighted(e){const{selectedPlaylist:t}=this.state,n=t?t.id:"";
      return e.id===n?"highlight":""}getIsPlayingClass(e) {
        const{playingPlaylist:t} = this.state, n=t?t.id:"";
        return e.id===n?"playing":""
      } render() {
        const{authenticationRequired:e,playlists:t,devices:n,selectedDevice:i}=this.state;
        return e?H`
        <div class="spotify_container">
          <${V} />
          <div class="login__box">
            <button class="greenButton" onClick=${()=>this.authenticateSpotify()}>AUTHENTICATE</button>
          </div>
        </div>
      `:H`
      <div class="spotify_container">
        <${V} />
        <div class="playlists">
          ${t.map((e,t)=>{const n=e.images[0]?e.images[0].url:"https://via.placeholder.com/150x150.png?text=No+image";return H`
              <div
                class="${`playlist ${this.getHighlighted(e)}`}"
                onClick=${n=>this.onPlaylistSelect(e,t,n,this)}
              >
                <div class="playlist__cover_art"><img src="${n}" /></div>
                <div class="playlist__number">${t+1}</div>
                <div class="${`playlist__playicon ${this.getIsPlayingClass(e)}`}">►</div>
                <div class="playlist__title">${e.name}</div>
              </div>
            `})}
        </div>
        <div class="controls">
          <${q}
            devices=${n}
            selectedDevice=${i}
            hass=${this.props.hass}
            player=${this.props.player}
            onMediaplayerSelect=${e=>this.onMediaPlayerSelect(e)}
            onChromecastDeviceSelect=${e=>this.onChromecastDeviceSelect(e)}
          />
        </div>
      </div>
    `}}const V=()=>H`
  <div class="header">
    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" />
  </div>
`,
O=document.createElement("style"),F="rgb(30, 215, 96)",G="rgb(40, 40, 40)",J="rgb(24, 24, 24)",K="rgb(170, 170, 170)",Q="rgb(200, 200, 200)",X="rgb(255, 255, 255)";
O.textContent=`\n    .spotify_container {\n      background-color: ${G};\n      font-family: 'Roboto', sans-serif;\n      color:  ${X};\n      font-size: 14px;\n      padding: 25px;\n    }\n    .spotify_container *:focus {outline:none}\n    .header img {\n      height: 30px;\n      margin-bottom: 10px;\n    }\n    .login__box {\n      width: 100%;\n      text-align: center;\n    }\n    .playlists {\n      display: flex;\n      flex-flow: column nowrap;\n      margin-bottom: 15px;\n      background-color: ${J};\n    }\n    .playlist {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n      border-top: 1px solid ${G};\n      height: 42px;\n    }\n    .playlist:active {\n      background-color: rgb(200, 200, 240);\n    }\n    .playlist:last-child {\n      border-bottom: 1px solid ${G};\n    }\n    .playlist:hover {\n      background: ${G};\n      cursor: pointer;\n    }\n    .highlight {\n      background: ${G};\n    }\n\n    .playlist__cover_art img {\n      width: 42px;\n      height: 42px;\n    }\n    .playlist__number {\n      margin-left: 10px;\n      color:  ${K};\n      width: 12px;\n    }\n\n    .playlist__playicon {\n      color: ${X};\n      margin-left: 10px;\n    }\n    .playlist__playicon:hover {\n      color: rgb(216, 255, 229);\n      text-shadow: 0 0 20px rgb(216, 255, 229);\n    }\n    .playing {\n      color: ${F}\n    }\n\n    .playlist__title {\n      margin-left: 30px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      max-width: 75vw;\n    }\n    .controls {\n      display: flex;\n      flex-flow: row nowrap;\n      align-items: center;\n    }\n    .greenButton {\n      border-radius: 15px;\n      padding: 0 20px 0 20px;\n      font-size: 14px;\n      height: 27px;\n      color: white;\n      border: none;\n      background: ${F};\n      cursor: pointer;\n      margin-right: 10px;\n    }\n    .greenButton:hover {\n      background-color: #43e57d;\n    }\n    .playButton::before {\n      content: "\\25B6  "\n    }\n\n    .dropdown {\n      position: relative;\n      display: inline-block;\n      color: ${Q};\n    }\n    .mediaplayer_select {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n    .mediaplayer_speaker_icon {\n      display: inline-block;\n      padding: 3px;\n      width: 17px;\n      height: 17px;\n      margin-right: 10px;\n      border: thin solid ${Q};\n      border-radius: 50%;\n    }\n    .dropdown-content {\n      display: none;\n      position: absolute;\n      background-color: ${G};\n      min-width: 250px;\n      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n      z-index: 1;\n    }\n    .dropdown-content a {\n      color: ${Q};\n      padding: 12px 16px;\n      text-decoration: none;\n      display: block;\n    }\n    .dropdown-content a:hover {\n      box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.07);\n    }\n    .dropdown:hover .dropdown-content {\n      display: block;\n    }\n`;
customElements.define("spotify-card",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.config={}}set hass(e){this.savedHass||(this.savedHass=e)}setConfig(e){if(!e.client_id)throw new Error("No client ---- id");this.config=e}getCardSize(){return 10}disconnectedCallback(){this.shadow.innerHTML=""}connectedCallback(){this.config.client_id||(this.config.client_id=this.getAttribute("client_id"));const e=document.createElement("div");var t,n;this.shadow.appendChild(O),this.shadow.appendChild(e),t=H`
        <${j}
          clientId=${this.config.client_id}
          limit=${this.config.limit||10}
          player=${this.config.device||"*"}
          hass=${this.savedHass}
        />
      `,C(n,t,{},!1,e,!1)}})});
