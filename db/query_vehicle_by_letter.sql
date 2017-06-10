select vehicles.id, make, model, year, owner_id
from vehicles
join users on users.id = vehicles.owner_id 
where users.name like $1

-- select *
-- from vehicles
-- join users on users.id = vehicles.owner_id 
-- where  users.name like 'Jo%'