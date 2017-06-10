select *
from vehicles
join users on users.id = vehicles.owner_id 
where vehicles.year > 2000
order by year asc