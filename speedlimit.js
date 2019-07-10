//Speed Limit = 70
//For every 5mph over the speed limit, they get one point
//Math.floor (1.3);
//More than 12 points, your license is suspended


const output = checkSpeed (80);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + 5)
    console.log ('Ok');

    else {
        const points = Math.floor ((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
        console.log ('Suspend License');
    else
    console.log('Points', points);

    }
}