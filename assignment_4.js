
function calculateTax(income, expenses) {
    if (0 > income || 0 > expenses || income < expenses) {
        return "Invalid Input";
    }

    let dif = income - expenses;
    let tax = dif * 0.20;

    return tax;
}

function sendNotification(email) {
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    const divide = email.split('@');

    let username = divide[0];
    let domainName = divide[1];

    const notification = `${username} sent you an email from ${domainName}`;
    return notification;
}

function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    
    for (let i = 0; i < name.length; i++) {
        if (!isNaN(name[i])) {
            return true;
        }
    }
    return false;
}

function calculateFinalScore(obj) {

    if (typeof obj !== 'object') {
        return "Invalid Input"
    }

    const {name, testScore, schoolGrade, isFamily } = obj;

    if (typeof name !== 'string' || typeof testScore !== 'number' || typeof schoolGrade !== 'number' || typeof isFamily !== 'boolean') {
        return "Invalid Input";
    }

    if (testScore < 0 || testScore > 50 || schoolGrade < 0 || schoolGrade > 30) {
        return "Invalid Input";
    }
    
    let Score = testScore + schoolGrade;

    if (isFamily === true) {
        Score += 20;
    }

    if (Score >= 80) {
        return true;
    }
    return false;

}

function  waitingTime(waitingTimes  , serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return "Invalid Input";
    }

    let totaltime = 0;
    for (let i = 0; i < waitingTimes.length; i++) {
        totaltime = totaltime + waitingTimes[i];
    }

    let avgtime = Math.round(totaltime / waitingTimes.length);

    let inSerial = serialNumber - waitingTimes.length - 1;

    let waitingTime = inSerial * avgtime;
    return waitingTime;

}

console.log(calculateTax(10000, 3000));
console.log(calculateTax(34000, 1753));
console.log(calculateTax(5000, 1500));
console.log(calculateTax(7000, 7000));
console.log(calculateTax(-5000, 2000));
console.log(calculateTax(6000, -1500));

console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));

console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));

console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFamily: true }));
console.log(calculateFinalScore({ name: "Rajib", testScore: 45, schoolGrade: 25, isFamily: false }));
console.log(calculateFinalScore("Hello"));
console.log(calculateFinalScore({ name: "Rajib", testScore: 15, schoolGrade: 25, isFamily: true }));

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7, 10));
console.log(waitingTime("[6, 2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));