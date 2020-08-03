var connection = require('./DatabaseConn');



var Obj = function () {

}

Obj.getEventsAndRequests = (userId, result) => {
    connection.db566.then(function (connection) {
        let events_sql = 'select * from createdevents where userid=' + userId + '; ';
        let req_sql = ` select requesteventId,r.eventid,r.userid,r.seats,r.description,r.status` +
            ` from requestevent r` +
            ` join createdevents c on c.eventid = r.eventid` +
            ` where c.userid = ` + userId;


        let query = connection.query(events_sql, (error, eventResult) => {
            if (error) {
                console.log(error);
            } else {

                connection.query(req_sql, (error2, reqResult) => {
                    if (error2) {
                        console.log(error2);
                    } else {
                        let postresult = {
                            events: eventResult,
                            requests: reqResult
                        };
                        result(null, postresult);
                    }
                })


            }
        })
    });

    //var res = eventsHist.filter(item => item['userId'] == userId);
    //result(null, res);
}

// Author Breej - B00843525
// used to insert request data and keep track of who requested which events
Obj.postRequestedEvent = (userId, event, result) => {
    // check weather the event has already been requested by user ?
    var squery = `Select * from requestevent where userid = ${event.userid} and eventid = ${event.eventid}`;
    connection.db566.then(function (connection) {
        let equery = connection.query(squery, (err, searchresult) => {
            console.log(searchresult, searchresult.length)
            if (err) {
                console.log(err);
            } else if (searchresult.length == 0) {
                var query = `INSERT INTO requestevent (eventid,userid,seats,description,status, timeStamp) VALUES (?) `;
                var values = [
                    event.eventid,
                    event.userid,
                    event.seats,
                    event.description,
                    -1,
                    new Date()
                ];

                connection.query(query, [values], (err, insertresult) => {
                    if (err) {
                        console.log(err);
                    } else {
                        result(null, 'success')
                    }
                });
            } else {
                result("exist", null)
            }
        });
    });

};

//Author - Jigar Makwana B00842568
// @route POST api /manageReq/:eventid/:action
// @desc manage request status
// @access Public
//PUT Route to update request status
Obj.manage_request = (req, result) => {
    const { eventid, action} = req.params
    console.log("In reset password userId: " + eventid);
    console.log("In reset password action: " + action);
    var sqlUpdate = "UPDATE requestevent SET status=? WHERE eventid= " + eventid;
        connection.db566.then(function (connection) {
            connection.query(sqlUpdate, action, function (err, succ) {
                if (err) {
                    console.log(err);
                    // console.log("update unsuccessful");
                    result(err, null);
                } else {
                    // console.log("update success!");
                    result(null, true);
                }
            });
        });
}


//Author - Jigar Makwana B00842568
// @route POST api /getReqStatus/:eventid
// @desc get request status
// @access Public
//GET Route to get request status
Obj.get_req_status = (req, result) => {
    const { eventid, requesteventId} = req.params
    console.log("In reset password userId: " + eventid);
    var getStatus = "SELECT status, timeStamp FROM requestevent WHERE eventid = " +
        eventid + " AND requesteventId = " + requesteventId;
    connection.db566.then(function (connection) {
        connection.query(getStatus, function (err, succ) {
            if (err) {
                console.log(err);
                console.log("unsuccessful");
                result(err, null);
            } else {
                console.log("this is status: " + succ[0].status);
                console.log("got the status successfully!");
                result(null, succ);
            }
        });
    });
}

module.exports = Obj;
