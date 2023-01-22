class MyReporter {
    onBegin(config, suite) {
        console.log(`======================================================`);
        console.log(`Starting the run with ${suite.allTests().length} tests`);
        console.log(`======================================================`);
    }

    onTestBegin(test) {
        console.log(`Starting test ${test.title}`);
    }

    onTestEnd(test, result) {
        console.log(`Finished test ${test.title}: ${result.status}`);
    }

    onEnd(result) {
        console.log(`======================================================`);
        console.log(`Finished the run: ${result.status}`);
        console.log(`======================================================`);
    }
}

module.exports = MyReporter;