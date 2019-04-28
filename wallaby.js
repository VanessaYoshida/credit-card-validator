module.exports = () => {
    return {
        files: ['lib/**/*.js'],
        tests: ['test/**/*.spec.js'],
        env: {
            type: 'node'
        }
    }
}