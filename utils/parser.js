const parser = param => {
  return {
    name: param.location.name,
    region: param.location.country,
    time: param.location.localtime,
    temperature: {
      real: param.current.temp_c,
      feels_like: param.current.feelslike_c,
    },
    wind: {
      speed: param.current.wind_kph,
      direction: param.current.wind_dir,
    },
    pressure: param.current.pressure_mb,
    visibility: param.current.vis_km,
    precipitation: param.current.precip_mm,
    humidity: param.current.humidity,
  };
};

export default parser;
