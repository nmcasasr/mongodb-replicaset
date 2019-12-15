rs.initiate( {
  _id : "rs0",
  members: [
    { _id: 0, host: `parchapp_event_db:27017` },
    { _id: 1, host: `parchapp_group_db:27017` }
  ]
});
