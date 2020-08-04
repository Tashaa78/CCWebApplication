!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.geojsonvt=e()}}(function(){return function e(t,n,r){function o(s,u){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(i)return i(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var i="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";function r(e,t,n,r,s,u,a,l){if(n/=t,r/=t,a>=n&&r>=l)return e;if(a>r||n>l)return null;for(var f=[],p=0;p<e.length;p++){var h,m,c=e[p],g=c.geometry,d=c.type;if(h=c.min[s],m=c.max[s],h>=n&&r>=m)f.push(c);else if(!(h>r||n>m)){var v=1===d?o(g,n,r,s):i(g,n,r,s,u,3===d);v.length&&f.push({geometry:v,type:d,tags:e[p].tags||null,min:c.min,max:c.max})}}return f.length?f:null}function o(e,t,n,r){for(var o=[],i=0;i<e.length;i++){var s=e[i],u=s[r];u>=t&&n>=u&&o.push(s)}return o}function i(e,t,n,r,o,i){for(var u=[],a=0;a<e.length;a++){var l,f,p,h=0,m=0,c=null,g=e[a],d=g.area,v=g.dist,x=g.length,y=[];for(f=0;x-1>f;f++)l=c||g[f],c=g[f+1],h=m||l[r],m=c[r],t>h?m>n?(y.push(o(l,c,t),o(l,c,n)),i||(y=s(u,y,d,v))):m>=t&&y.push(o(l,c,t)):h>n?t>m?(y.push(o(l,c,n),o(l,c,t)),i||(y=s(u,y,d,v))):n>=m&&y.push(o(l,c,n)):(y.push(l),t>m?(y.push(o(l,c,t)),i||(y=s(u,y,d,v))):m>n&&(y.push(o(l,c,n)),i||(y=s(u,y,d,v))));l=g[x-1],h=l[r],h>=t&&n>=h&&y.push(l),p=y[y.length-1],i&&p&&(y[0][0]!==p[0]||y[0][1]!==p[1])&&y.push(y[0]),s(u,y,d,v)}return u}function s(e,t,n,r){return t.length&&(t.area=n,t.dist=r,e.push(t)),[]}t.exports=r},{}],2:[function(e,t,n){"use strict";function r(e,t){var n=[];if("FeatureCollection"===e.type)for(var r=0;r<e.features.length;r++)o(n,e.features[r],t);else"Feature"===e.type?o(n,e,t):o(n,{geometry:e},t);return n}function o(e,t,n){var r,a,l,f=t.geometry,p=f.type,h=f.coordinates,m=t.properties;if("Point"===p)e.push(i(m,1,[u(h)]));else if("MultiPoint"===p)e.push(i(m,1,s(h)));else if("LineString"===p)e.push(i(m,2,[s(h,n)]));else if("MultiLineString"===p||"Polygon"===p){for(l=[],r=0;r<h.length;r++)l.push(s(h[r],n));e.push(i(m,"Polygon"===p?3:2,l))}else if("MultiPolygon"===p){for(l=[],r=0;r<h.length;r++)for(a=0;a<h[r].length;a++)l.push(s(h[r][a],n));e.push(i(m,3,l))}else{if("GeometryCollection"!==p)throw new Error("Input data is not a valid GeoJSON object.");for(r=0;r<f.geometries.length;r++)o(e,{geometry:f.geometries[r],properties:m},n)}}function i(e,t,n){var r={geometry:n,type:t,tags:e||null,min:[2,1],max:[-1,0]};return l(r),r}function s(e,t){for(var n=[],r=0;r<e.length;r++)n.push(u(e[r]));return t&&(p(n,t),a(n)),n}function u(e){var t=Math.sin(e[1]*Math.PI/180),n=e[0]/360+.5,r=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return r=-1>r?-1:r>1?1:r,[n,r,0]}function a(e){for(var t,n,r=0,o=0,i=0;i<e.length-1;i++)t=n||e[i],n=e[i+1],r+=t[0]*n[1]-n[0]*t[1],o+=Math.abs(n[0]-t[0])+Math.abs(n[1]-t[1]);e.area=Math.abs(r/2),e.dist=o}function l(e){var t=e.geometry,n=e.min,r=e.max;if(1===e.type)f(n,r,t);else for(var o=0;o<t.length;o++)f(n,r,t[o]);return e}function f(e,t,n){for(var r,o=0;o<n.length;o++)r=n[o],e[0]=Math.min(r[0],e[0]),t[0]=Math.max(r[0],t[0]),e[1]=Math.min(r[1],e[1]),t[1]=Math.max(r[1],t[1])}t.exports=r;var p=e("./simplify")},{"./simplify":4}],3:[function(e,t,n){"use strict";function r(e,t){return new o(e,t)}function o(e,t){t=this.options=a(Object.create(this.options),t);var n=t.debug;n&&console.time("preprocess data");var r=1<<t.maxZoom,o=f(e,t.tolerance/(r*t.extent));this.tiles={},this.tileCoords=[],n&&(console.timeEnd("preprocess data"),console.log("index: maxZoom: %d, maxPoints: %d",t.indexMaxZoom,t.indexMaxPoints),console.time("generate tiles"),this.stats={},this.total=0),o=m(o,t.buffer/t.extent,s),o.length&&this.splitTile(o,0,0,0),n&&(o.length&&console.log("features: %d, points: %d",this.tiles[0].numFeatures,this.tiles[0].numPoints),console.timeEnd("generate tiles"),console.log("tiles generated:",this.total,JSON.stringify(this.stats)))}function i(e,t,n){return 32*((1<<e)*n+t)+e}function s(e,t,n){return[n,(n-e[0])*(t[1]-e[1])/(t[0]-e[0])+e[1],1]}function u(e,t,n){return[(n-e[1])*(t[0]-e[0])/(t[1]-e[1])+e[0],n,1]}function a(e,t){for(var n in t)e[n]=t[n];return e}function l(e,t,n){var r=e.source;if(1!==r.length)return!1;var o=r[0];if(3!==o.type||o.geometry.length>1)return!1;var i=o.geometry[0].length;if(5!==i)return!1;for(var s=0;i>s;s++){var u=p.point(o.geometry[0][s],t,e.z2,e.x,e.y);if(u[0]!==-n&&u[0]!==t+n||u[1]!==-n&&u[1]!==t+n)return!1}return!0}t.exports=r;var f=e("./convert"),p=e("./transform"),h=e("./clip"),m=e("./wrap"),c=e("./tile");o.prototype.options={maxZoom:14,indexMaxZoom:5,indexMaxPoints:1e5,solidChildren:!1,tolerance:3,extent:4096,buffer:64,debug:0},o.prototype.splitTile=function(e,t,n,r,o,a,f){for(var p=[e,t,n,r],m=this.options,g=m.debug,d=null;p.length;){r=p.pop(),n=p.pop(),t=p.pop(),e=p.pop();var v=1<<t,x=i(t,n,r),y=this.tiles[x],M=t===m.maxZoom?0:m.tolerance/(v*m.extent);if(!y&&(g>1&&console.time("creation"),y=this.tiles[x]=c(e,v,n,r,M,t===m.maxZoom),this.tileCoords.push({z:t,x:n,y:r}),g)){g>1&&(console.log("tile z%d-%d-%d (features: %d, points: %d, simplified: %d)",t,n,r,y.numFeatures,y.numPoints,y.numSimplified),console.timeEnd("creation"));var P="z"+t;this.stats[P]=(this.stats[P]||0)+1,this.total++}if(y.source=e,o){if(t===m.maxZoom||t===o)continue;var b=1<<o-t;if(n!==Math.floor(a/b)||r!==Math.floor(f/b))continue}else if(t===m.indexMaxZoom||y.numPoints<=m.indexMaxPoints)continue;if(m.solidChildren||!l(y,m.extent,m.buffer)){y.source=null,g>1&&console.time("clipping");var w,Z,z,E,S,C,F=.5*m.buffer/m.extent,O=.5-F,T=.5+F,j=1+F;w=Z=z=E=null,S=h(e,v,n-F,n+T,0,s,y.min[0],y.max[0]),C=h(e,v,n+O,n+j,0,s,y.min[0],y.max[0]),S&&(w=h(S,v,r-F,r+T,1,u,y.min[1],y.max[1]),Z=h(S,v,r+O,r+j,1,u,y.min[1],y.max[1])),C&&(z=h(C,v,r-F,r+T,1,u,y.min[1],y.max[1]),E=h(C,v,r+O,r+j,1,u,y.min[1],y.max[1])),g>1&&console.timeEnd("clipping"),w&&p.push(w,t+1,2*n,2*r),Z&&p.push(Z,t+1,2*n,2*r+1),z&&p.push(z,t+1,2*n+1,2*r),E&&p.push(E,t+1,2*n+1,2*r+1)}else o&&(d=t)}return d},o.prototype.getTile=function(e,t,n){var r=this.options,o=r.extent,s=r.debug,u=1<<e;t=(t%u+u)%u;var a=i(e,t,n);if(this.tiles[a])return p.tile(this.tiles[a],o);s>1&&console.log("drilling down to z%d-%d-%d",e,t,n);for(var f,h=e,m=t,c=n;!f&&h>0;)h--,m=Math.floor(m/2),c=Math.floor(c/2),f=this.tiles[i(h,m,c)];if(!f||!f.source)return null;if(s>1&&console.log("found parent tile z%d-%d-%d",h,m,c),l(f,o,r.buffer))return p.tile(f,o);s>1&&console.time("drilling down");var g=this.splitTile(f.source,h,m,c,e,t,n);if(s>1&&console.timeEnd("drilling down"),null!==g){var d=1<<e-g;a=i(g,Math.floor(t/d),Math.floor(n/d))}return this.tiles[a]?p.tile(this.tiles[a],o):null}},{"./clip":1,"./convert":2,"./tile":5,"./transform":6,"./wrap":7}],4:[function(e,t,n){"use strict";function r(e,t){var n,r,i,s,u=t*t,a=e.length,l=0,f=a-1,p=[];for(e[l][2]=1,e[f][2]=1;f;){for(r=0,n=l+1;f>n;n++)i=o(e[n],e[l],e[f]),i>r&&(s=n,r=i);r>u?(e[s][2]=r,p.push(l),p.push(s),l=s):(f=p.pop(),l=p.pop())}}function o(e,t,n){var r=t[0],o=t[1],i=n[0],s=n[1],u=e[0],a=e[1],l=i-r,f=s-o;if(0!==l||0!==f){var p=((u-r)*l+(a-o)*f)/(l*l+f*f);p>1?(r=i,o=s):p>0&&(r+=l*p,o+=f*p)}return l=u-r,f=a-o,l*l+f*f}t.exports=r},{}],5:[function(e,t,n){"use strict";function r(e,t,n,r,i,s){for(var u={features:[],numPoints:0,numSimplified:0,numFeatures:0,source:null,x:n,y:r,z2:t,transformed:!1,min:[2,1],max:[-1,0]},a=0;a<e.length;a++){u.numFeatures++,o(u,e[a],i,s);var l=e[a].min,f=e[a].max;l[0]<u.min[0]&&(u.min[0]=l[0]),l[1]<u.min[1]&&(u.min[1]=l[1]),f[0]>u.max[0]&&(u.max[0]=f[0]),f[1]>u.max[1]&&(u.max[1]=f[1])}return u}function o(e,t,n,r){var o,i,s,u,a=t.geometry,l=t.type,f=[],p=n*n;if(1===l)for(o=0;o<a.length;o++)f.push(a[o]),e.numPoints++,e.numSimplified++;else for(o=0;o<a.length;o++)if(s=a[o],r||!(2===l&&s.dist<n||3===l&&s.area<p)){var h=[];for(i=0;i<s.length;i++)u=s[i],(r||u[2]>p)&&(h.push(u),e.numSimplified++),e.numPoints++;f.push(h)}else e.numPoints+=s.length;f.length&&e.features.push({geometry:f,type:l,tags:t.tags||null})}t.exports=r},{}],6:[function(e,t,n){"use strict";function r(e,t){if(e.transformed)return e;var n,r,i,s=e.z2,u=e.x,a=e.y;for(n=0;n<e.features.length;n++){var l=e.features[n],f=l.geometry,p=l.type;if(1===p)for(r=0;r<f.length;r++)f[r]=o(f[r],t,s,u,a);else for(r=0;r<f.length;r++){var h=f[r];for(i=0;i<h.length;i++)h[i]=o(h[i],t,s,u,a)}}return e.transformed=!0,e}function o(e,t,n,r,o){var i=Math.round(t*(e[0]*n-r)),s=Math.round(t*(e[1]*n-o));return[i,s]}n.tile=r,n.point=o},{}],7:[function(e,t,n){"use strict";function r(e,t,n){var r=e,i=s(e,1,-1-t,t,0,n,-1,2),u=s(e,1,1-t,2+t,0,n,-1,2);return(i||u)&&(r=s(e,1,-t,1+t,0,n,-1,2),i&&(r=o(i,1).concat(r)),u&&(r=r.concat(o(u,-1)))),r}function o(e,t){for(var n=[],r=0;r<e.length;r++){var o,s=e[r],u=s.type;if(1===u)o=i(s.geometry,t);else{o=[];for(var a=0;a<s.geometry.length;a++)o.push(i(s.geometry[a],t))}n.push({geometry:o,type:u,tags:s.tags,min:[s.min[0]+t,s.min[1]],max:[s.max[0]+t,s.max[1]]})}return n}function i(e,t){var n=[];n.area=e.area,n.dist=e.dist;for(var r=0;r<e.length;r++)n.push([e[r][0]+t,e[r][1],e[r][2]]);return n}var s=e("./clip");t.exports=r},{"./clip":1}]},{},[3])(3)});