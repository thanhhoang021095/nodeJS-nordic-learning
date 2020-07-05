const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
    name: String,
    band:String,
},{
    toJSON: {
        virtuals: true
    }
})

const bandSchema = new Schema({
    name: String,
})

const Person = mongoose.model('Person', personSchema);
const Band = mongoose.model('Band', bandSchema);

bandSchema.virtual('member', {
  ref: 'Person', // The model to use
  localField: 'name', // Find people where `localField`
  foreignField: 'band', 
})

const person1 = new Person({ name: 'hoang', band:'ABC' })
const band1 = new Band({ band:'DEF'})

Band.find({}).populate('members').exec(function(error, bands) {
    console.log(bands)
  });