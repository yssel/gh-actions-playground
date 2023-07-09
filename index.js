const helloWorld = () => {
    console.log('Hello world from the github actions demo package!');
}

const tellDate = () => {
    const dt = new Date();
    let day;
    switch (dt.getDay()) {
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday, innit';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            day = 'another day';
            break;

    }
    console.log(`It's ${day}!`);
}

const add = (a, b) => a + b;

module.exports = {
    helloWorld,
    tellDate,
    add,
}