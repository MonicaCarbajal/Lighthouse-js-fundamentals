function chooseStations(station){

  var goodStations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
  ];
  for (var i = 0 ; i < 2 ;i++){
    if (station[i][1] >= 20) {
      if (station[i][2] === 'school' || station[i][2] === 'community centre' )
        { goodStations.push (station[i][0]); }
    }
  }
  return goodStations;
}


console.log(chooseStations(station));