function print_Second() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(print_Second, 1000);