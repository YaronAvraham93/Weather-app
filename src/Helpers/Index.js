export const GetDate = (item, type) => {
  const option = {
    longDate: {
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    },
    time: {
      hour: 'numeric',
      minute: 'numeric',
    },
    date: {
      month: 'numeric',
      day: 'numeric',
    },
  };

  const longDate = new Date().toLocaleDateString('en-us', option.longDate);
  const objectDate = new Date(item);
  const time = objectDate.toLocaleTimeString('en-us', option.time);
  const date = objectDate.toLocaleDateString('en-us', option.date);

  switch (type) {
    case 'time':
      return time;

    case 'date':
      return date;

    default:
        return longDate;
  }
};
export const GetIcon=(icon)=>{
  return `http://vortex.accuweather.com/adc2010/images/slate/icons/${icon}.svg`
}
const Helpers={
    GetDate,GetIcon
}

export default Helpers;