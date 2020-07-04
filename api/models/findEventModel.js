var connection = require('./DatabaseConn');



var Obj = function () {
    
}

Obj.findEvents = (userId, result) => {
    connection.db566.then(function (connection) {
        let sql566 = 'select * from createdevents where userid !='+userId;
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

module.exports = Obj;