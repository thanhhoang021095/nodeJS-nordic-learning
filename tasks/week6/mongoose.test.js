const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const userSchema = new mongoose.Schema({
    name: {
        firstName: String,
        lastName: String,
    },
        age: Number,
        address: String
    }, 
    {   versionKey: false , toJSON: { virtuals: true}  },  
)

userSchema.methods.start = () => {
    console.log('start')
}

userSchema.virtual('fullName').get(function () {
    return this.name.firstName + this.name.lastName ;
  });
const userModel = mongoose.model('users', userSchema)

const user = new userModel ({
    name: {
        firstName: 'ricardo',
        lastName: 'kaka'
    },
    age: 1,
    address: 'abc'
})
user.start();

console.log('user full name', user.fullName);

// userModel.find({ name: 'a'}, (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data)
// })