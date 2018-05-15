function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  arr.map(function(el, i){
    let a = earthRadius + el.avgAlt;
    let orbitalPeriod = Math.round(2*Math.PI*
           Math.sqrt(
             Math.pow(a,3)/GM
    ));
    delete el.avgAlt;
    el.orbitalPeriod = orbitalPeriod;
    return el;
  });

  return arr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
