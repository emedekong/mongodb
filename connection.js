const mongoose = require('mongoose');
const name = "Project_2";
module.exports = class Database{
    
    // static init(){
    //     let connection = mongoose.createConnection('mongodb+srv://root:I8YK2jKSzbWjAsmd@cluster0.moxirzi.mongodb.net', {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         family: 4
    //     });


    static init(){
            let connection = mongoose.createConnection('mongodb+srv://root:I8YK2jKSzbWjAsmd@cluster0.moxirzi.mongodb.net/', {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                family: 4
            });

        connection.on('connected', function () {
            console.log(`${name} Database is Online`);
        });
        connection.on('error',function (err) {
            console.log(`${name} Database failed to connect because: ` + err);
        });
        connection.on('disconnected', function () {
            console.log(`${name} Database has been disconnected`);
        });
        
        process.on('SIGINT', function() {
            connection.close(function () {
                console.log(`${name} Database disconnected through app termination`);
            });
        });

        return connection;
    }

}