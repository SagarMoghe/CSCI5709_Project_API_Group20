
var connection = require('./DatabaseConn');



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
    connection.db566.then(function (connection) {
        let sql566 = 'select * from createdevents where userid='+userId;
        let query566 = connection.query(sql566, (error566, result566) => {
            if (error566) {
                console.log(error566);
            }
		
            else {
                //console.log(result566[0]);
                result(null, result566);
            }
        })
    });
    //var res = eventsHist.filter(item => item['userId'] == userId);
    //result(null, res);

}

Obj.postUserEvent = (userId, event, result) => {
    
    //var res = eventsHist.push(event);
    //result(null, eventsHist);
    var sql = "INSERT INTO createdevents (userid,eventTypeVal, fromAddress, toAddress, doj, seats, estPrice, description) VALUES ?";
    var values = [
        [userId,
        event['newItem'].eventTypeVal,
        event['newItem'].fromAddress,
        event['newItem'].toAddress,
        event['newItem'].dateToDisplay,
        //null,
        event['newItem'].seats,
        event['newItem'].estPrice,
        event['newItem'].description]
    ];
    //console.log(values);
    connection.db566.then(function (connection) {
        connection.query(sql, [values], function (err, succ) {
            if (err) console.log(err);
            else {
                let sql566 = 'select * from createdevents where userid=' + userId;
                let query566 = connection.query(sql566, (error566, result566) => {
                    if (error566) {
                        console.log(error566);
                    }
		
                    else {
                        console.log(result566[0]);
                        result(null, result566);
                    }
                })
            }
            
        });
    });
    

}
module.exports = Obj;