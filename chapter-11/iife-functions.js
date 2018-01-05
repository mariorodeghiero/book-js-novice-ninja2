(function () {
    const name = 'Peter Parker';
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"]
    const date = new Date();
    const today = days[date.getDay()];
    console.log(`Welcome back ${name}. Today is ${today}`);
})();


