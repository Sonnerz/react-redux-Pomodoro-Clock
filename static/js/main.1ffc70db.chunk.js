(this["webpackJsonppomodoro-clock"]=this["webpackJsonppomodoro-clock"]||[]).push([[0],{19:function(e,t,s){e.exports=s(31)},24:function(e,t,s){},25:function(e,t,s){},31:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),a=s(4),i=s.n(a),o=(s(24),s(9)),c=s(11),l=s(12),u=s(17),p=s(13),m=s(18),d=(s(25),function(e){var t=e.paused?r.a.createElement("i",{className:"fa fa-play-circle fa-2x","aria-hidden":"true"}):r.a.createElement("i",{className:"fa fa-pause-circle fa-2x","aria-hidden":"true"});return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(t){return e.onControlClick(t)},id:"start_stop",className:"control-button"},t),r.a.createElement("button",{onClick:function(t){return e.onControlClick(t)},id:"reset",className:"control-button control-button2"},r.a.createElement("i",{className:"fa fa-refresh fa-2x","aria-hidden":"true"})))}),f=function(e){var t,s;return"session"===e.sessionType?(t=parseInt(e.userSession/60,10),s=parseInt(e.userSession%60,10)):"break"===e.sessionType&&(t=parseInt(e.userBreak/60,10),s=parseInt(e.userBreak%60,10)),t=t<10?"0"+t:t,s=s<10?"0"+s:s,r.a.createElement("div",{id:"time-left"},t+":"+s)},E=function(e){return r.a.createElement("div",null,r.a.createElement("div",{style:{textTransform:"capitalize"},id:e.type+"-label"},e.type," Length"),r.a.createElement("div",{className:"length-control"},r.a.createElement("div",{className:"arrow-button"},r.a.createElement("button",{className:e.sessionRunning?"pulse disabled":"pulse",onClick:function(t){return e.onIncrement(t)},id:e.type+"-increment",disabled:e.sessionRunning&&!e.paused},r.a.createElement("i",{className:"fa fa-arrow-up fa-2x","aria-hidden":"true"}))),r.a.createElement("div",{id:e.type+"-length"},Math.floor(e.session/60)),r.a.createElement("div",{className:"arrow-button"},r.a.createElement("button",{className:e.sessionRunning?"pulse disabled":"pulse",onClick:function(t){return e.onDecrement(t)},id:e.type+"-decrement",disabled:e.sessionRunning&&!e.paused},r.a.createElement("i",{className:"fa fa-arrow-down fa-2x","aria-hidden":"true"})))))},T=s(5),S=s(15),b=s.n(S),h=function(e){function t(){var e,s;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(s=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleIncrementClick=function(e){var t=e.currentTarget.id.split("-");"session"===Object(o.a)(t,1)[0]?s.props.increment("session"):s.props.increment("break")},s.handleDecrementClick=function(e){var t=e.currentTarget.id.split("-");"session"===Object(o.a)(t,1)[0]?s.props.decrement("session"):s.props.decrement("break")},s.handleControlClick=function(e){"start_stop"===e.currentTarget.id?(s.props.startStop(),"session"===s.props.state.sessionType?s.props.state.sessionTimerRunning?s.pauseTimer():s.startTimer("session"):s.props.state.sessionTimerRunning?s.pauseTimer():s.startTimer("break")):"reset"===e.currentTarget.id&&s.resetTimer()},s.resetTimer=function(){clearInterval(s.props.state.intervalId),s.beepSound.pause(),s.beepSound.currentTime=0,s.props.reset()},s.runTimer=function(e){var t="session"===e?"session":"break";"session"===e?(s.props.run(t),s.props.state.session<0&&(clearInterval(s.props.state.intervalId),s.props.pause(t),s.beepSound.play(),s.startTimer("break"))):"break"===e&&(s.props.run(t),s.props.state.break<0&&(clearInterval(s.props.state.intervalId),s.props.pause(t),s.beepSound.play(),s.startTimer("session")))},s.startTimer=function(e){var t=setInterval((function(){s.props.countdown(e),s.runTimer(e)}),1e3);s.props.setIntervalID(t)},s.pauseTimer=function(){s.props.pSettings(),clearInterval(s.props.state.intervalId)},s}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"wrapper"},r.a.createElement("section",{className:"container-social"},r.a.createElement("div",{className:"text-right"},r.a.createElement("ul",{className:"social-list"},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/sonyacooley/",title:"linkedin",target:"blank"},r.a.createElement("i",{className:"fa fa-linkedin"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/Sonnerz",title:"github",target:"blank"},r.a.createElement("i",{className:"fa fa-github-square"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.freecodecamp.org/sonnerz",title:"free code camp",target:"blank"},r.a.createElement("i",{className:"fa fa-free-code-camp"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://sonnerz.github.io",title:"portfolio",target:"blank"},r.a.createElement("i",{className:"fa fa-briefcase"}))),r.a.createElement("li",null,r.a.createElement("a",{className:"nav-link text-light",rel:"noopener noreferrer",href:"mailto:sonya.cooley@mail.com",target:"_blank",title:"email me"},r.a.createElement("i",{className:"fa fa-envelope-square"})))))),r.a.createElement("h1",null,"Pomodoro Clock"),r.a.createElement("div",{id:"app-container"},r.a.createElement("div",{id:"timer-component"},r.a.createElement(b.a,{color:"#012705",seconds:"session"===this.props.state.sessionType?this.props.state.userSetSession:this.props.state.userSetBreak,paused:this.props.state.timerPaused,showMilliseconds:!1,fontSize:"0px",alpha:.6,size:300,weight:10}),r.a.createElement("div",{id:"timer-clock"},r.a.createElement(f,{userSession:this.props.state.session,userBreak:this.props.state.break,sessionType:this.props.state.sessionType})),r.a.createElement("div",{id:"timer-label"},"session"===this.props.state.sessionType?"Session":"Break")),r.a.createElement("div",{className:"length-controls"},r.a.createElement("div",{id:"session-component"},r.a.createElement(E,{onIncrement:this.handleIncrementClick,onDecrement:this.handleDecrementClick,session:this.props.state.userSetSession,type:"session",sessionRunning:this.props.state.sessionTimerRunning,sessionType:this.props.state.sessionType})),r.a.createElement("div",{id:"break-component"},r.a.createElement(E,{onIncrement:this.handleIncrementClick,onDecrement:this.handleDecrementClick,session:this.props.state.userSetBreak,type:"break",sessionRunning:this.props.state.sessionTimerRunning,sessionType:this.props.state.sessionType}))),r.a.createElement("div",{id:"controls-component"},r.a.createElement(d,{onControlClick:this.handleControlClick,paused:this.props.state.timerPaused,sessionType:this.props.state.sessionType})),r.a.createElement("div",{id:"tomato"}),r.a.createElement("audio",{id:"beep",preload:"auto",src:"https://goo.gl/65cBl1",ref:function(t){e.beepSound=t}})))}}]),t}(n.Component),k=Object(T.b)((function(e){return{state:e}}),(function(e){return{increment:function(t){return e(function(e){return{type:"INCREMENT",timerType:e}}(t))},decrement:function(t){return e(function(e){return{type:"DECREMENT",timerType:e}}(t))},reset:function(){return e({type:"RESET"})},startStop:function(){return e({type:"START_STOP"})},countdown:function(t){return e(function(e){return{type:"COUNTDOWN",timerType:e}}(t))},setIntervalID:function(t){return e({type:"SET_INTERVAL_ID",intervalId:t})},run:function(t){return e(function(e){return{type:"RUN_TIMER",timerType:e}}(t))},pause:function(t){return e(function(e){return{type:"PAUSE_TIMER",timerType:e}}(t))},pSettings:function(){return e({type:"PAUSE_SETTINGS"})}}}))(h);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=s(3),v=s(16);function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function I(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(s,!0).forEach((function(t){Object(v.a)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(s).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var N={break:300,userSetBreak:300,session:1500,userSetSession:1500,sessionTimerRunning:!1,timerPaused:!0,intervalId:"",sessionType:"session"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT":return"session"===t.timerType?I({},e,{session:3600===e.session?e.session:e.userSetSession+60,userSetSession:3600===e.userSetSession?e.userSetSession:e.userSetSession+60}):I({},e,{break:3600===e.break?e.break:e.userSetBreak+60,userSetBreak:3600===e.userSetBreak?e.userSetBreak:e.userSetBreak+60});case"DECREMENT":return"session"===t.timerType?I({},e,{session:60===e.session?e.session:e.userSetSession-60,userSetSession:60===e.userSetSession?e.userSetSession:e.userSetSession-60}):I({},e,{break:60===e.break?e.break:e.userSetBreak-60,userSetBreak:60===e.userSetBreak?e.userSetBreak:e.userSetBreak-60});case"RESET":return I({},N);case"SET_INTERVAL_ID":return I({},e,{intervalId:t.intervalId});case"PAUSE_SETTINGS":return I({},e,{sessionTimerRunning:!1,timerPaused:!0});case"START_STOP":return I({},e,{sessionTimerRunning:!e.sessionTimerRunning,timerPaused:!e.timerPaused});case"COUNTDOWN":return"session"===t.timerType?I({},e,{session:e.session-1}):I({},e,{break:e.break-1});case"RUN_TIMER":return"session"===t.timerType?I({},e,{sessionType:t.timerType,sessionTimerRunning:!0,timerPaused:!1,break:e.userSetBreak}):I({},e,{sessionType:t.timerType,sessionTimerRunning:!0,timerPaused:!1,session:e.userSetSession});case"PAUSE_TIMER":return"session"===t.timerType?I({},e,{session:e.userSetSession,intervalId:"",sessionTimerRunning:!1,timerPaused:!0,sessionType:"break"}):I({},e,{break:e.userSetBreak,intervalId:"",sessionTimerRunning:!1,timerPaused:!0,sessionType:"session"});default:return e}},w=Object(y.b)(window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),R=Object(y.c)(O,w);i.a.render(r.a.createElement(T.a,{store:R},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.1ffc70db.chunk.js.map