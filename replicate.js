rs.initiate( {
  _id : "rs0",
  members: [
    { _id: 0, host: `parchapp-event-db1:27017` },
    { _id: 1, host: `parchapp-event-db2:27017` },
    { _id: 2, host: `parchapp-event-db3:27017` }
  ]
});
