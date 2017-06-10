module.exports = {


getUsers: function (req, res) {
     
    req.app.get('db').get_users().then(function(users) {
  res.send(users)

})
},

getVehicles: function (req, res) {
     
    req.app.get('db').get_vehicles().then(function(cars) {
  res.send(cars)

})
},

addUser: function (req, res) {
 var user = [
     req.body.name,
     req.body.email,
 ]

req.app.get('db').add_user(user).then(function(newUser) {
  res.send(newUser) 
  console.log(newUser)
})

},
addVehicle: function (req, res) {
 var vehicle = [
     req.body.make,
     req.body.model,
     req.body.year,
     req.body.user_id
 ]
console.log(req.body)
req.app.get('db').add_vehicle(vehicle).then(function(newCar) {
  res.send(newCar) 
  
})
},

getUserCount: function (req, res) {

  var check = req.params.id

req.app.get('db').get_user_count(check).then(function(count) {
  res.send(count)
 
})

},
getById:  function (req, res) {

req.app.get('db').get_by_id([req.params.userId]).then(function(cars) {
  res.send(cars)
})
},



queryVehicles: function (req, res) {
if (req.query.userEmail) {
req.app.get('db').query_vehicles([req.query.userEmail]).then(function(cars) {
  res.send(cars)
})
}
else if (req.query.userFirstStart) {
          var query = req.query.userFirstStart;
    req.app.get('db').query_vehicle_by_letter([query +'%']).then(function (resp) {
             console.log(query)
                  res.send(resp);
          });
      }
},
getVehicleByYear: function (req, res) {
req.app.get('db').get_by_year().then(function(years) {
  res.send(years)
 
})
},



putById: function (req, res) {

      var vehicleId = parseInt(req.params.vehicleId);
      var userId = parseInt(req.params.userId);

    req.app.get('db').put_by_id([vehicleId, userId]).then(function(resp) {
              res.send(resp); 
              console.log(resp)
  });
},
// putById: function (req, res) {

//   var change = [
//        req.params.id,
//         req.params[2].ownerid 
       
//   ]
  
//   console.log(change)
// req.app.get('db').put_by_id([change]).then(function(changes) {
//   res.send(changes)
 
// })

// },

deleteById: function (req, res) {

req.app.get('db').delete_by_id([req.params.id]).then(function(removed) {
  res.send(removed)
})

},

deleteOwner:  function(req, res) {
      var vehicleId = parseInt(req.params.vehicleId);
      var userId = parseInt(req.params.userId);
    req.app.get('db').delete_owner(vehicleId).then(function(resp) {
         
              res.status(200).send(resp);
         
      });
}
}
