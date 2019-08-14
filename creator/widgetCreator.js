const create = (what, classAndId, text) => {
  let element = document.createElement(what);
  element.className = classAndId.class;
  element.id = classAndId.id;
  element.innerHTML = text;
  return element;
};

const wrap = (whatToWrap, whereToWrap) => {
  whereToWrap.append(whatToWrap);
  return whereToWrap;
};

const renderWidget = (weatherObject) => {
  const widget =  create('div', {class: 'widgetForm ', id: ''}, '');
  if (weatherObject == null) {
    return wrap(create('div', {class: 'item', id: ''}, 'Unknown / no data found'), widget);
  }
  const grid = create('div', {class: 'widget grid ', id: ''}, '');
  const city = create('div', {class: 'item', id: ''}, weatherObject.name);
  const empty1 = create('div', {class: 'item', id: ''}, weatherObject.region);
  const setting = create('button', {class: 'item', id: ''}, '');
  const icon = create('div', {class: 'item', id: ''}, '');
  const temp = create('div', {class: 'item', id: ''}, `Temp.: ${weatherObject.temperature.real}`);
  const time = create('div', {class: 'item', id: ''}, '');
  const fill = create('div', {class: 'item', id: ''}, `Feels like: ${weatherObject.temperature.feels_like}`);
  const cloud = create('div', {class: 'item', id: ''}, weatherObject.humidity);
  const date = create('div', {class: 'item', id: ''}, weatherObject.time);

  let a = wrap(city, grid);
  a = wrap(empty1, grid);
  a = wrap(setting, grid);
  a = wrap(icon, grid);
  a = wrap(temp, grid);
  a = wrap(time, grid);
  a = wrap(fill, grid);
  a = wrap(cloud, grid);
  a = wrap(date, grid);
  a = wrap(grid, widget);
  return a;
};

//export {renderWidget};


