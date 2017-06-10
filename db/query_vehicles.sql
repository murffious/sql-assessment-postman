select *
from vehicles
join users on users.id = vehicles.owner_id 
where users.email = $1 