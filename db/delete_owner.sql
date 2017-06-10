UPDATE vehicles
SET owner_Id = null
WHERE id= $1
RETURNING *;