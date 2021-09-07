var countdownfunc = function() {
    var count = 10;
    setTimeout(function() {
        document.getElementById("timer").innerHTML = count;
        // console.log(count);
        setTimeout(function() {
            document.getElementById("timer").innerHTML = count - 1;
            //console.log(count - 1);
            setTimeout(function() {
                document.getElementById("timer").innerHTML = count - 2;
                //console.log(count - 2);
                setTimeout(function() {
                    document.getElementById("timer").innerHTML = count - 3;
                    // console.log(count - 3);
                    setTimeout(function() {
                        document.getElementById("timer").innerHTML = count - 4;
                        //console.log(count - 4);
                        setTimeout(function() {
                            document.getElementById("timer").innerHTML = count - 5;
                            //  console.log(count - 5);
                            setTimeout(function() {
                                document.getElementById("timer").innerHTML = count - 6;
                                //    console.log(count - 6);
                                setTimeout(function() {
                                    document.getElementById("timer").innerHTML = count - 7;
                                    //      console.log(count - 7);
                                    setTimeout(function() {
                                        document.getElementById("timer").innerHTML = count - 8;
                                        //        console.log(count - 8);
                                        setTimeout(function() {
                                            document.getElementById("timer").innerHTML = count - 9;
                                            //          console.log(count - 9);
                                            setTimeout(function() {
                                                document.getElementById("timer").innerHTML = "Happy Independence Day";
                                                //            console.log("Happy Independence Day");
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