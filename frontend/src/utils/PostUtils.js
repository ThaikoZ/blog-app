export const getReadingTime = (content) => {
  const minutes = Math.floor(content.length / 100);
  return `${minutes}min`;
};

export const getDate = (date) => {
  let newDate = date.split("T")[0].split("-");
  switch (newDate[1]) {
    case "01":
      newDate[1] = "Jan";
      break;
    case "02":
      newDate[1] = "Feb";
      break;
    case "03":
      newDate[1] = "Mar";
      break;
    case "04":
      newDate[1] = "Apr";
      break;
    case "05":
      newDate[1] = "May";
      break;
    case "06":
      newDate[1] = "Jun";
      break;
    case "07":
      newDate[1] = "Jul";
      break;
    case "08":
      newDate[1] = "Aug";
      break;
    case "09":
      newDate[1] = "Sep";
      break;
    case "10":
      newDate[1] = "Oct";
      break;
    case "11":
      newDate[1] = "Nov";
      break;
    case "12":
      newDate[1] = "Dec";
      break;
  }
  return `${newDate[1]} ${newDate[2]}, ${newDate[0]}`;
};
