//@Author - RajKumar B00849566

const mysql566 = require('mysql2');
var Client = require('ssh2').Client;
var ssh566 = new Client();

    var db566 = new Promise(function (resolve, reject) {

        ssh566.on('ready', function () {

            ssh566.forwardOut(
                // source address, this can usually be any valid address
                '127.0.0.1',
                // source port, this can be any valid port number
                3306,
                // destination address (localhost here refers to the SSH server)
                'db.cs.dal.ca',
                // destination port
                3306,
                function (err, stream) {

                    if (err) throw err; // SSH error: can also send error in promise ex. reject(err)
                    // use `sql` connection as usual
                    connection = mysql566.createConnection({
                        host: 'db.cs.dal.ca',
                        user: 'gangi',
                        password: 'B00849566', //TODO: Password in env or separate file
                        port: 3306,
                        database: 'gangi',
                        stream: stream

                    });

                    // send connection back in variable depending on success or not
                    connection.connect(function (err) {
                        if (err) {

                            //resolve(connection);
                            reject(err);
                        } else {

                            resolve(connection);
                        }
                    });
                });
        }).connect({
            host: 'bluenose.cs.dal.ca',
            port: 22,
            user: 'gangi',
            password: 'B00849566'
        });
    }).catch((err) => {  if (err) throw "lolll"; });


exports.db566 = db566;



