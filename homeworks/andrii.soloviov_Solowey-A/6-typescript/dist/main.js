(()=>{var e={205:(e,t,r)=>{"use strict";r.r(t)},303:(e,t,r)=>{"use strict";r(205),r(499)},499:()=>{var e=document.querySelector("[data-score]"),t=document.querySelector("[data-cube-score]"),r=document.querySelector("[data-key]"),o=document.querySelector("[data-cube]"),s=document.querySelector("[data-progress-bar]"),n=new(function(){function t(e,t,r,o,s){this.scoreElement=e,this.cubeScoreElement=t,this.keyElement=r,this.cubeElement=o,this.progressBarElement=s,this.score=100,this.currentKey="",this.interval=2e3,this.symbol=""}return t.prototype.getRandom=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},t.prototype.startKeysInterval=function(e){var t=this;setInterval((function(e){t.setKey(t.symbol)}),e)},t.prototype.setScore=function(t){e.innerHTML=t.toString()},t.prototype.setKey=function(e){for(var t="",r="1234567890qwertyuiopasdfghjklzxcvbnm",s=0;s<1;s++)t+=r[n.getRandom(0,r.length-1)];o.innerHTML=t.toUpperCase(),o.classList.remove("correctSymbol","wrongSymbol"),this.symbol=t},t.prototype.compare=function(e,t){t.toUpperCase()===e.toUpperCase()?(o.classList.add("correctSymbol"),this.setScore(this.addScore(this.score))):(o.classList.add("wrongSymbol"),this.setScore(this.minusScore(this.score)))},t.prototype.addScore=function(e){return this.score=e,this.score=this.score+this.getRandom(5,10),this.score>=200&&alert("You win"),this.score},t.prototype.minusScore=function(e){return this.score=this.score+this.getRandom(-20,-25),this.score<=0&&alert("You looooose))"),this.score},t.prototype.subscribeOnKeyPress=function(){var e=this;document.addEventListener("keypress",(function(t){e.compare(t.key,e.symbol)}))},t.prototype.start=function(){this.startKeysInterval(this.interval),this.setScore(this.score),this.subscribeOnKeyPress()},t}())(e,t,r,o,s);n.start()}},t={};function r(o){if(t[o])return t[o].exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(303)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi90cy9tYWluLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbInNjb3JlRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImN1YmVTY29yZUVsZW1lbnQiLCJrZXlFbGVtZW50IiwiY3ViZUVsZW1lbnQiLCJwcm9ncmVzc0JhckVsZW1lbnQiLCJnYW1lIiwic2NvcmUiLCJjdXJyZW50S2V5IiwiaW50ZXJ2YWwiLCJzeW1ib2wiLCJnZXRSYW5kb20iLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzdGFydEtleXNJbnRlcnZhbCIsInNldEludGVydmFsIiwiZXZlbnQiLCJzZXRLZXkiLCJzZXRTY29yZSIsImlubmVySFRNTCIsInRvU3RyaW5nIiwia2V5IiwiZ2VuZXJhdGVkU3ltYm9sIiwic3RyIiwiaSIsImxlbmd0aCIsInRvVXBwZXJDYXNlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGhpcyIsImNvbXBhcmUiLCJhZGQiLCJhZGRTY29yZSIsIm1pbnVzU2NvcmUiLCJhbGVydCIsInN1YnNjcmliZU9uS2V5UHJlc3MiLCJhZGRFdmVudExpc3RlbmVyIiwic3RhcnQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiXSwibWFwcGluZ3MiOiIyRUFBQSxPQUNBLFEsU0NEQSxJQUFNQSxFQUFlQyxTQUFTQyxjQUFjLGdCQUN0Q0MsRUFBbUJGLFNBQVNDLGNBQWMscUJBQzFDRSxFQUFhSCxTQUFTQyxjQUFjLGNBQ3BDRyxFQUFjSixTQUFTQyxjQUFjLGVBQ3JDSSxFQUFxQkwsU0FBU0MsY0FBYyx1QkE4RTVDSyxFQUFPLElBNUViLFdBS0ksV0FDWVAsRUFDQUcsRUFDQUMsRUFDQUMsRUFDQUMsR0FKQSxLQUFBTixlQUNBLEtBQUFHLG1CQUNBLEtBQUFDLGFBQ0EsS0FBQUMsY0FDQSxLQUFBQyxxQkFUSixLQUFBRSxNQUFnQixJQUNoQixLQUFBQyxXQUFxQixHQUNyQixLQUFBQyxTQUFtQixJQUNuQixLQUFBQyxPQUFpQixHQXNFN0IsT0E3RFksWUFBQUMsVUFBUixTQUFrQkMsRUFBYUMsR0FDM0IsT0FBT0MsS0FBS0MsTUFBTUQsS0FBS0UsVUFBWUgsRUFBTUQsRUFBTSxHQUFLQSxJQUdoRCxZQUFBSyxrQkFBUixTQUEwQlIsR0FBMUIsV0FDSVMsYUFBYSxTQUFDQyxHQUNWLEVBQUtDLE9BQU8sRUFBS1YsVUFDbkJELElBR0UsWUFBQVksU0FBUixTQUFpQmQsR0FDYlIsRUFBYXVCLFVBQVlmLEVBQU1nQixZQUczQixZQUFBSCxPQUFSLFNBQWVJLEdBR1gsSUFGQSxJQUFJQyxFQUFrQixHQUNsQkMsRUFBTSx1Q0FDREMsRUFBSSxFQUFHQSxFQUFJLEVBQUdBLElBQ25CRixHQUFtQkMsRUFBSXBCLEVBQUtLLFVBQVUsRUFBR2UsRUFBSUUsT0FBUyxJQUUxRHhCLEVBQVlrQixVQUFZRyxFQUFnQkksY0FDeEN6QixFQUFZMEIsVUFBVUMsT0FBTyxnQkFBaUIsZUFDOUNDLEtBQUt0QixPQUFTZSxHQUdWLFlBQUFRLFFBQVIsU0FBaUJULEVBQWFDLEdBQ3RCQSxFQUFnQkksZ0JBQWtCTCxFQUFJSyxlQUN0Q3pCLEVBQVkwQixVQUFVSSxJQUFJLGlCQUMxQkYsS0FBS1gsU0FBU1csS0FBS0csU0FBU0gsS0FBS3pCLFVBRWpDSCxFQUFZMEIsVUFBVUksSUFBSSxlQUMxQkYsS0FBS1gsU0FBU1csS0FBS0ksV0FBV0osS0FBS3pCLFVBR25DLFlBQUE0QixTQUFSLFNBQWlCNUIsR0FNYixPQUxBeUIsS0FBS3pCLE1BQVFBLEVBQ2J5QixLQUFLekIsTUFBUXlCLEtBQUt6QixNQUFReUIsS0FBS3JCLFVBQVUsRUFBRyxJQUN4Q3FCLEtBQUt6QixPQUFTLEtBQ2Q4QixNQUFNLFdBRUhMLEtBQUt6QixPQUVSLFlBQUE2QixXQUFSLFNBQW1CN0IsR0FLZixPQUpBeUIsS0FBS3pCLE1BQVF5QixLQUFLekIsTUFBUXlCLEtBQUtyQixXQUFXLElBQUssSUFDM0NxQixLQUFLekIsT0FBUyxHQUNkOEIsTUFBTSxrQkFFSEwsS0FBS3pCLE9BR1IsWUFBQStCLG9CQUFSLHNCQUNJdEMsU0FBU3VDLGlCQUFpQixZQUFZLFNBQUNwQixHQUNuQyxFQUFLYyxRQUFRZCxFQUFNSyxJQUFLLEVBQUtkLFlBSXJDLFlBQUE4QixNQUFBLFdBQ0lSLEtBQUtmLGtCQUFrQmUsS0FBS3ZCLFVBQzVCdUIsS0FBS1gsU0FBU1csS0FBS3pCLE9BQ25CeUIsS0FBS00sdUJBRWIsRUExRUEsR0E0RWEsQ0FBU3ZDLEVBQWNHLEVBQWtCQyxFQUFZQyxFQUFhQyxHQUUvRUMsRUFBS2tDLFVDbkZEQyxFQUEyQixHQUcvQixTQUFTQyxFQUFvQkMsR0FFNUIsR0FBR0YsRUFBeUJFLEdBQzNCLE9BQU9GLEVBQXlCRSxHQUFVQyxRQUczQyxJQUFJQyxFQUFTSixFQUF5QkUsR0FBWSxDQUdqREMsUUFBUyxJQU9WLE9BSEFFLEVBQW9CSCxHQUFVRSxFQUFRQSxFQUFPRCxRQUFTRixHQUcvQ0csRUFBT0QsUUNuQmZGLEVBQW9CSyxFQUFLSCxJQUNILG9CQUFYSSxRQUEwQkEsT0FBT0MsYUFDMUNDLE9BQU9DLGVBQWVQLEVBQVNJLE9BQU9DLFlBQWEsQ0FBRUcsTUFBTyxXQUU3REYsT0FBT0MsZUFBZVAsRUFBUyxhQUFjLENBQUVRLE9BQU8sS0NIdkRWLEVBQW9CLE0iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3RzL21haW4udHMnO1xuIiwiY29uc3Qgc2NvcmVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2NvcmVdJykgYXMgSFRNTEhlYWRpbmdFbGVtZW50O1xuY29uc3QgY3ViZVNjb3JlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWN1YmUtc2NvcmVdJykgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBrZXlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta2V5XScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgY3ViZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jdWJlXScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgcHJvZ3Jlc3NCYXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZ3Jlc3MtYmFyXScpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG5jbGFzcyBHYW1lIHtcbiAgICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBjdXJyZW50S2V5OiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIGludGVydmFsOiBudW1iZXIgPSAyMDAwO1xuICAgIHByaXZhdGUgc3ltYm9sOiBzdHJpbmcgPSAnJztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzY29yZUVsZW1lbnQ6IEhUTUxIZWFkaW5nRWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBjdWJlU2NvcmVFbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBrZXlFbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBjdWJlRWxlbWVudD86IEhUTUxEaXZFbGVtZW50LFxuICAgICAgICBwcml2YXRlIHByb2dyZXNzQmFyRWxlbWVudD86IEhUTUxEaXZFbGVtZW50LFxuICAgICkge31cblxuICAgIHByaXZhdGUgZ2V0UmFuZG9tKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRLZXlzSW50ZXJ2YWwoaW50ZXJ2YWw6IG51bWJlcikge1xuICAgICAgICBzZXRJbnRlcnZhbCggKGV2ZW50KT0+e1xuICAgICAgICAgICAgdGhpcy5zZXRLZXkodGhpcy5zeW1ib2wpO1xuICAgICAgICB9LGludGVydmFsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHNldFNjb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgc2NvcmVFbGVtZW50LmlubmVySFRNTCA9IHNjb3JlLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGdlbmVyYXRlZFN5bWJvbCA9ICcnO1xuICAgICAgICBsZXQgc3RyID0gJzEyMzQ1Njc4OTBxd2VydHl1aW9wYXNkZmdoamtsenhjdmJubSc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgICAgICBnZW5lcmF0ZWRTeW1ib2wgKz0gc3RyW2dhbWUuZ2V0UmFuZG9tKDAsIHN0ci5sZW5ndGggLSAxKV07XG4gICAgICAgIH1cbiAgICAgICAgY3ViZUVsZW1lbnQuaW5uZXJIVE1MID0gZ2VuZXJhdGVkU3ltYm9sLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGN1YmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvcnJlY3RTeW1ib2wnLCAnd3JvbmdTeW1ib2wnKTtcbiAgICAgICAgdGhpcy5zeW1ib2wgPSBnZW5lcmF0ZWRTeW1ib2w7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjb21wYXJlIChrZXk6IHN0cmluZywgZ2VuZXJhdGVkU3ltYm9sOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGdlbmVyYXRlZFN5bWJvbC50b1VwcGVyQ2FzZSgpID09PSBrZXkudG9VcHBlckNhc2UoKSkge1xuICAgICAgICAgICAgY3ViZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29ycmVjdFN5bWJvbCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRTY29yZSh0aGlzLmFkZFNjb3JlKHRoaXMuc2NvcmUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1YmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dyb25nU3ltYm9sJyk7XG4gICAgICAgICAgICB0aGlzLnNldFNjb3JlKHRoaXMubWludXNTY29yZSh0aGlzLnNjb3JlKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRTY29yZShzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2NvcmUgPSBzY29yZTtcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMuc2NvcmUgKyB0aGlzLmdldFJhbmRvbSg1LCAxMCk7XG4gICAgICAgIGlmICh0aGlzLnNjb3JlID49IDIwMCl7XG4gICAgICAgICAgICBhbGVydCgnWW91IHdpbicpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVcbiAgICB9XG4gICAgcHJpdmF0ZSBtaW51c1Njb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zY29yZSA9IHRoaXMuc2NvcmUgKyB0aGlzLmdldFJhbmRvbSgtMjAsIC0yNSk7XG4gICAgICAgIGlmICh0aGlzLnNjb3JlIDw9IDApe1xuICAgICAgICAgICAgYWxlcnQoJ1lvdSBsb29vb29zZSkpJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zY29yZVxuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlT25LZXlQcmVzcygpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcGFyZShldmVudC5rZXksIHRoaXMuc3ltYm9sKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5zdGFydEtleXNJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgICAgdGhpcy5zZXRTY29yZSh0aGlzLnNjb3JlKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVPbktleVByZXNzKCk7XG4gICAgfVxufVxuXG5jb25zdCBnYW1lID0gbmV3IEdhbWUoc2NvcmVFbGVtZW50LCBjdWJlU2NvcmVFbGVtZW50LCBrZXlFbGVtZW50LCBjdWJlRWxlbWVudCwgcHJvZ3Jlc3NCYXJFbGVtZW50KTtcblxuZ2FtZS5zdGFydCgpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXygzMDMpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==