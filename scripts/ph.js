(function(){

    'use strict';

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
        for (var name in classes)
            results[idx++] = name+'{min-height:'+classes[name](window.innerHeight)+'px;}';
        container.innerText = results.join('');
    }

    function addClass(name, fn) {
        classes[name] = typeof fn === 'function' ? fn : function (h) { return h };
    }

})();