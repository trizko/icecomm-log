function generate(days) {
  var connections = $.ajax({
    method: 'GET',
    url: '/connections?number_of_days=' + days
  });

  var users = $.ajax({
    method: 'GET',
    url: '/users?number_of_days=' + days
  });

  $.when(connections, users).then(generateGraph);
}

function generateGraph(connectionsData, usersData) {
  connectionsData = connectionsData[0];
  usersData = usersData[0];
  var total = ['total'].concat(connectionsData.total);
  var unique = ['unique'].concat(connectionsData.unique);
  var users = ['users'].concat(usersData.users);
  var x = ['x'].concat(connectionsData.times);
  var chart = c3.generate({
    data: {
        x: 'x',
        columns: [
            x,
            total,
            unique,
            users
        ]
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d'
            }
        }
    }
  });

}

generate(7);

