




const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  it('should insert a user into collection', async () => {
    const users = db.collection('users');
  
    const User = { firstname: 'John', lastname: 't', email: 'amna@gmail.com', password: '123'};
    await users.insertOne(User);
  
    const insertedUser = await users.findOne({firstname: 'John'});
    expect(insertedUser).toEqual(User);
  });

 
  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db();
  });
  
  afterAll(async () => {
    await connection.close();
  });
  

  
 
});

