-- Update vehicles
-- set vehicles.owner_id = $2
--  where users.id =  $1
--  RETURNING *
UPDATE vehicles
SET owner_id = $2
WHERE id= $1
 RETURNING *;

-- Update vehicles
-- set owner_id = $1
-- from vehicles
-- join users on users.id = vehicles.owner_id
--  where users.id = $2 
-- RETURNING *