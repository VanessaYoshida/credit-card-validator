module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'id-length': [
            'error',
            {'min': 2}
        ],
        'camelcase': [
            'error',
            {'properties': 'always'}
        ],
        'keyword-spacing': [
            'error', 
            { 'after': true }
        ],
        'space-infix-ops': [
            'error', 
            { 'int32Hint': false }
        ],
        'comma-spacing': [
            'error', 
            { before: false, after: true }
        ],
        'space-before-blocks': [
            'error', 
            'always'
        ],
        'spaced-comment': [
            'error', 
            'always'
        ],
        'key-spacing': [
            'error', 
            { 'afterColon': true }
        ],
        'no-multi-spaces': [
            'error'
        ],
        'space-in-parens': [
            'error', 
            'never'
        ],
        'space-before-function-paren': [
            'error', 
            'never'
        ],
        'func-call-spacing': [
            'error', 
            'never'
        ],
        'no-multiple-empty-lines': [
            'error', 
            { 'max': 0 }
        ],
        'padded-blocks': [
            'error', 
            'never'
        ],
        'quotes':[
            'error',
            'single'
        ],
        'no-floating-decimal': [
            'error'
        ],
        'object-property-newline': [
            'error'
        ],
        'brace-style': [
            'error', 
            '1tbs'
        ],
        'eqeqeq': [
            'error', 
            'always', 
            { 'null': 'ignore' }
        ],
        'no-array-constructor': [
            'error'
        ]
    }
};