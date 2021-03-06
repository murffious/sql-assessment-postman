const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive');

const mainCtrl = require('./mainCtrl');

const app = express();

app.use(bodyParser.json())
app.use(cors());

// You need to complete the information below to connect
// to the assessbox database on your postgres server.
massive({
  host: 'localhost',
  port: 5432,
  database: 'assessbox',
  user: 'postgres',
  password: 'murff123'
}).then( db => {
  app.set('db', db);

  // Initialize user table and vehicle table.
  db.init_tables.user_create_seed().then( response => {
    console.log('User table init');
    db.init_tables.vehicle_create_seed().then( response => {
      console.log('Vehicle table init');
    })
  })

})


// ===== Build enpoints below ============
app.get('/api/users', mainCtrl.getUsers)
app.get('/api/vehicles', mainCtrl.getVehicles)
app.post('/api/users', mainCtrl.addUser)
app.post('/api/vehicles', mainCtrl.addVehicle)
app.get('/api/user/:id/vehiclecount', mainCtrl.getUserCount)
app.get('/api/user/:userId/vehicle', mainCtrl.getById)
app.get('/api/vehicle', mainCtrl.queryVehicles)
app.get('/api/newervehiclesbyyear', mainCtrl.getVehicleByYear)
app.put('/api/vehicle/:vehicleId/user/:userId', mainCtrl.putById)
app.delete('/api/vehicle/:id', mainCtrl.deleteById)
app.delete('/api/user/:userId/vehicle/:vehicleId', mainCtrl.deleteOwner)

// ===== Do not change port ===============
const port = 3000;
app.listen(port, () => {
  console.log('Listening on port: ', port);
})
