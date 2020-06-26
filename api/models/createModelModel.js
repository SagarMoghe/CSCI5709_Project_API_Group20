
var Obj = function () {
    
}

const eventsHist = [
    { userId: 1, id: 1, eventTypeVal: 'cj', fromAddress: 'Halifax1', toAddress: 'Toronto1', dateToDisplay: "07/02/2020", seats: 2, estPrice: 100, description: 'new car' },
    { userId: 1, id: 2, eventTypeVal: 'cj', fromAddress: 'Halifax2', toAddress: 'Toronto1', dateToDisplay: "07/02/2020", seats: 2, estPrice: 100, description: 'new car' },
    { userId: 2, id: 3, eventTypeVal: 'cj', fromAddress: 'Halifax3', toAddress: 'Toronto1', dateToDisplay: "07/02/2020", seats: 2, estPrice: 100, description: 'new car' },
    { userId: 3, id: 4, eventTypeVal: 'cj', fromAddress: 'Halifax4', toAddress: 'Toronto1', dateToDisplay: "07/02/2020", seats: 2, estPrice: 100, description: 'new car' },
    { userId: 3, id: 5, eventTypeVal: 'cj', fromAddress: 'Halifax5', toAddress: 'Toronto1', dateToDisplay: "07/02/2020", seats: 2, estPrice: 100, description: 'new car' },
    { userId: 3, id: 6, eventTypeVal: 'cj', fromAddress: 'Halifax6', toAddress: 'Toronto1', dateToDisplay: "07/02/2020", seats: 2, estPrice: 100, description: 'new car' }
    
]

Obj.getUserEventsHistory = (userId, result) => {
    var res = eventsHist.filter(item => item['userId'] == userId);
    result(null, res);
}

Obj.postUserEvent = (userId,event, result) => {
    var res = eventsHist.push(event);
    result(null, eventsHist);
}
module.exports = Obj;