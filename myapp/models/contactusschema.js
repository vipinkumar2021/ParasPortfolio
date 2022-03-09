var mongoose = require('mongoose');
var uri = 'mongodb+srv://paras1:paras1093@clusterparas1.bbm5p.mongodb.net/parasportfoliodatabase?retryWrites=true&w=majority'

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, /*useFindAndModify: false,
useCreateIndex: true*/});

var contactUsSchema = new mongoose.Schema({
    Name: {
        type: String,

    },
    Mobile: {
        type: String
    },
    Email: {
        type: String
    },
    WriteMessage: {
        type: String
    },
    Date: {
        type: Date,
        default: Date.now
    }
});

var contactUsModel = mongoose.model('customersmessages', contactUsSchema)

module.exports = contactUsModel;