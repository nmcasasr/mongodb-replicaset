rs.initiate( {
  _id : "rs0",
  members: [
    { _id: 0, host: `parchapp_event_db1:27017` },
    { _id: 1, host: `parchapp_event_db2:27017` },
    { _id: 2, host: `parchapp_event_db3:27017` }
  ]
});
