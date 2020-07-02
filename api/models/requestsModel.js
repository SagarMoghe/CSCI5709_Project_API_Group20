var connection = require('./DatabaseConn');



var Obj = function () {
    
}

Obj.getEventsAndRequests = (userId, result) => {
    connection.db566.then(function (connection) {
        let events_sql = 'select * from createdevents where userid=' + userId+'; ';
        let req_sql = ` select requesteventId,r.eventid,r.userid,r.seats,r.description,r.status`+ 
        ` from requestevent r`+
        ` join createdevents c on c.eventid = r.eventid`+
            ` where c.userid = ` + userId;

        
        let query = connection.query(events_sql, (error, eventResult) => {
            if (error) {
                console.log(error);
            }
		
            else {

                connection.query(req_sql, (error2, reqResult) => {
                    if (error2) {
                        console.log(error2);
                    }
                
                    else {
                        let postresult = { events: eventResult, requests: reqResult };
                result(null, postresult);
                    }
                })

                
            }
        })
    });
    //var res = eventsHist.filter(item => item['userId'] == userId);
    //result(null, res);

}

module.exports = Obj;