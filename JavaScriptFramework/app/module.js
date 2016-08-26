var MiApp = (function (e) {
  'use strict';
  //Private Data
  var Resource = {
    'constants': {},
    'factory': {},
    'mode': null,
    'root': '/',
    'routes': [],
    'controller': {},
    'controller_dependancy': {},
  };
  function constants() {
    var key = arguments[0], val = arguments[1];
    Resource.constants[key] = val;
  }
  function routes() {
    var key = arguments[0], val = arguments[1];
    Resource.routes.push({ key, val });
  }
  function controller() {
    var key = arguments[0], val = arguments[1];
    Resource.controller[key] = val;
  }
  function factory() {
    var key = arguments[0], val = arguments[1];
    Resource.factory[key] = val;
  }
  function getDependencies(func) {
    return (func + '')
      .replace(/[/][/].*$/mg, '') // strip single-line comments
      .replace(/\s+/g, '') // strip white space
      .replace(/[/][*][^/*]*[*][/]/g, '') // strip multi-line comments  
      .split('){', 1)[0].replace(/^[^(]*[(]/, '') // extract the parameters  
      .replace(/=[^,]+/g, '') // strip any ES6 defaults  
      .split(',').filter(Boolean); // split & filter [""]
  }
  function load_home(e) {

    var con = document.getElementById('content')
      , xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function (e) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        con.innerHTML = xhr.responseText;
      }
    }
    var templateURL,controller;
    // for (var a in Resource.routes) {
    //   if (Resource.routes[a].route == window.location.hash) {
    //     templateURL = Resource.routes[a].templateURL;
    //   }
    // }
    var routeURL=e.currentTarget.getAttribute?e.currentTarget.getAttribute('href'):window.location.hash;
    for (var a in Resource.routes) {
      for (var b in Resource.routes[a]) {
        if ('#' + Resource.routes[a][b].route === routeURL)// window.location.hash)
        {  templateURL = Resource.routes[a][b].templateURL;
          controller= Resource.routes[a][b].controller;
          break;
        }
      }
    }
    if (templateURL) {
      (e || window.event).preventDefault();

      xhr.open("GET", templateURL, true);
      xhr.setRequestHeader('Content-type', 'text/html');
      xhr.send();
      window.location.hash = routeURL;
      Resource.controller[controller]();
    }
  }
  //load_home(e);

  return {
    'factory': factory,
    'routes': routes,
    'controller': controller,
    'constants': constants,
    'load_home': load_home
  }
});
(function () {
  window.app = MiApp();

  window.onload = function (event) {
    window.app.load_home(event);
  }
  let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      var element = document.getElementsByTagName("a");
      for (var a in element) {
        element[a].onclick = function (e) {

          window.app.load_home(e);
        };
      }
      
    }
  }, 100);

})();

//MiApp();