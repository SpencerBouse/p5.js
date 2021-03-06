// In this example, we want to load JSON (a JavaScript Object)
// from a URL at openweathermap.org, and display it in setup().
//
// Since setup() happens faster than you can load a website, the
// data does not have time to properly load before setup() is done.
//
// We are introducing preload() where you can run load
// operations that are guaranteed to complete by setup().
// This is called asynchronous loading, because it happens whenever
// the computer is done and ready, not necessarily when you call it.

var result;

function preload() {
  result = loadJSON(
    'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=imperial'
  );
  console.log('In preload(), the result has not finished loading: ');
  console.log(result);
}

function setup() {
  createCanvas(400, 100);
  textSize(18);
  textAlign(CENTER);
  fill(0);
  noStroke();

  console.log('In setup(), here is the result: ');
  console.log(result);

  var location = result.name;
  var currentTemp = result.main.temp;
  text(
    'Current temperature in ' + location + ' is ' + currentTemp + 'F',
    width / 2,
    height / 2
  );
}
