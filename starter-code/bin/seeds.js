const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const DB_NAME = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {  
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
{
    name: 'Scarlett Johansson',
    occupation: 'Actress',
    catchPhrase: 'No ideia what to say'
},
{
    name: 'Beethoven',
    occupation: 'Dog Actor',
    catchPhrase: 'Woof-Woof'
},
{
    name: 'Natsu Dragneel',
    occupation: 'Anime Actor',
    catchPhrase: `I'm fired up`
}
];

Celebrity.create(celebrities)
.then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));