var countdownfunc = function() {
    var count = 10;
    setTimeout(function() {
        console.log(count);
        setTimeout(function() {
            console.log(count - 1);
            setTimeout(function() {
                console.log(count - 2);
                setTimeout(function() {
                    console.log(count - 3);
                    setTimeout(function() {
                        console.log(count - 4);
                        setTimeout(function() {
                            console.log(count - 5);
                            setTimeout(function() {
                                console.log(count - 6);
                                setTimeout(function() {
                                    console.log(count - 7);
                                    setTimeout(function() {
                                        console.log(count - 8);
                                        setTimeout(function() {
                                            console.log(count - 9);
                                            setTimeout(function() {
                                                console.log("Happy Independence Day");
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}

countdownfunc();