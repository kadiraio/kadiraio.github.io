(function(){

    'use strict';

    // http://stackoverflow.com/a/4565120/527922
    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

    window.pH = {};
    var container = null;
    var classes = {};

    window.pH.add = addClass;
    window.pH.update = updateTag;

    container = document.createElement('style');
    document.head.appendChild(container);

    document.addEventListener('DOMContentLoaded', updateTag);
    window.addEventListener('resize', updateTag);

    function updateTag() {
        var results = [], idx = 0;
        for (var name in classes) {
            var height = classes[name](window.innerHeight);
            results[idx++] = name+'{min-height:'+height+'px;}';
            is_chrome || updateElements(name, height);
        }
        container.innerText = results.join('');
    }

    function addClass(name, fn) {
        classes[name] = typeof fn === 'function' ? fn : function (h) { return h };
    }

    function updateElements (name, height) {
        var elements = document.querySelectorAll(name);
        for(var i=elements.length; i-->0;) {
            elements[i].style.minHeight = height+'px';
        }
    }

})();