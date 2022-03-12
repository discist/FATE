mongo -- "$MONGO_INITDB_DATABASE" <<EOF

db.createUser({user: 'akash', pwd: 'akash', roles:[{'role': 'readWrite', 'db': '$MONGO_INITDB_DATABASE'}]});



EOF