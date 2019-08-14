let default_city = 'Berlin';
let link = `http://api.apixu.com/v1/current.json?key=${key}&q=${default_city}`;

window.addEventListener('load', loadWidget);

const button = document.querySelector('.btn');
button.addEventListener('click', getDataFromURL);

function getDataFromURL(){
  let city = document.querySelector('#city').value;
  if (city == null || city === ``) {
    city = default_city;
  }
  link = `http://api.apixu.com/v1/current.json?key=${key}&q=${city}`;
  loadWidget();
}

async function make_request (__url) {
  try {
    return await (await fetch(__url)).json();
  } catch (e) {
    throw new Error(e);
  }
  return null;
};

async function requestWeatherData(url) {
  let weather_data = null;
  try {
    weather_data = parser(await make_request(url));
  } catch (e) {
    console.log(e);
  }
  return weather_data;
}

async function appRender(whatToRender, whereToRender) {
  document.querySelector(whereToRender).append(whatToRender);
  return whereToRender;
}

function loadWidget() {
  requestWeatherData(link).then(weatherObject => {
    let widget = document.querySelector('.widgetForm');
    if (widget !== null) {
    widget.remove();
      console.log("widget has been removed");
    }
    document.querySelector('.app').append(renderWidget(weatherObject));
  });
}

let reloaded = setInterval(() => {
  loadWidget();
}, 1800000);

setTimeout(() => {
  clearInterval(reloaded);
}, 43200000);

