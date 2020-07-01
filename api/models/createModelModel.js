
var connection = require('./DatabaseConn');



var Obj = function () {
    
}


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

    var sql = "INSERT INTO createdevents (userid,eventTypeVal, fromAddress, toAddress, doj, seats, estPrice, description) VALUES ?";
    var values = [
        [userId,
        event['newItem'].eventTypeVal,
        event['newItem'].fromAddress,
        event['newItem'].toAddress,
        event['newItem'].dateToDisplay,
        event['newItem'].seats,
        event['newItem'].estPrice,
        event['newItem'].description]
    ];
    connection.db566.then(function (connection) {
        connection.query(sql, [values], function (err, succ) {
            if (err) console.log(err);
            else {
                let sql566 = 'select * from createdevents where userid=' + userId;
                let query566 = connection.query(sql566, (error566, result566) => {
                    if (error566) {
                        console.log(error566);
                        result(error566, null);
                    }
		
                    else {
                        result(null, result566);
                    }
                })
            }
            
        });
    });
    

}

Obj.updateUserEvent = (userId, event, result) => {

    var sql = `UPDATE createdevents SET 
    eventTypeVal="`+ event['updatedItem'].eventTypeVal + 
        `", fromAddress="` + event['updatedItem'].fromAddress +
        `", toAddress="`+event['updatedItem'].toAddress +
        `", doj="` + event['updatedItem'].dateToDisplay +
        `", seats=` + event['updatedItem'].seats +
        `, estPrice=` + event['updatedItem'].estPrice +
        `, description="` + event['updatedItem'].description +
        `" WHERE eventid=`+event['updatedItem'].eventid;
    connection.db566.then(function (connection) {
        connection.query(sql, function (err, succ) {
            if (err) {
                console.log(err);
                result(err, null);
            }
            else {
                result(null, true);
            }
            
        });
    });
    

}

Obj.deleteUserEvent = (userId, eventId, result) => {

    var sql = `DELETE FROM createdevents WHERE eventid=`+eventId+` and userid=`+userId;
  
    connection.db566.then(function (connection) {
        connection.query(sql, function (err, succ) {
            if (err) {
                console.log(err);
                result(err, null);
            }
            else {
                result(null, true);
            }
            
        });
    });
    

}

module.exports = Obj;