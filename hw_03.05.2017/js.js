var arr = [
    {
        url: 'http://tobyho.com/2011/01/28/checking-types-in-javascript/',
        description: 'How to detect type of object. typeof, instanceof',
        tags: ['object', 'types']
    }, {
        url: 'http://bonsaiden.github.io/JavaScript-Garden/#types',
        description: 'Type detection',
        tags: ['object', 'types']
    }, {
        url: 'http://www.jspatterns.com/classical-inheritance/',
        description: 'Classical inheritance example, build on top of prototyping.',
        tags: ['object', 'inheritance', 'prototype']
    }, {
        url: 'http://dmitrysoshnikov.com/ecmascript/javascript-the-core/',
        description: 'Very detailed description on how javascript core works. ',
        tags: ['core', 'javascript']
    }, {
        url: 'http://lostechies.com/jimmybogard/2009/01/20/javascript-decorator-pattern/',
        description: 'Decorating functions. This is the way to change function behavior, not touching its implementation',
        tags: ['inheritance', 'function']
    }, {
        url: 'http://dmitrysoshnikov.com/ecmascript/chapter-5-functions/',
        description: 'Functions in details',
        tags: ['function']
    }, {
        url: 'http://dmitrysoshnikov.com/ecmascript/chapter-4-scope-chain/',
        description: 'Scope chain',
        tags: ['function', 'variable', 'closure']
    }, {
        url: 'http://dmitrysoshnikov.com/ecmascript/chapter-3-this/',
        description: 'What is "this" in functions',
        tags: ['function', 'inheritance']
    }
];

function genarate( arr ) {

    arr.forEach(
        function (item) {

            var li = document.createElement('li');
            var link = document.createElement('a', item.url);
            var text = document.createTextNode(item.description);
            var ul = document.createElement('ul');

            var t = document.createElement('li');
            var j = t.appendChild(text);
            document.body.appendChild(j);
        }

    );
}

genarate(arr);
