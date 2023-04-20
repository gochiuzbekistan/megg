export default function time_to_date(month, day) {
  const presentDay = new Date();
  const passed =
    presentDay.getMonth() > month ||
    (presentDay.getMonth() == month && presentDay.getDate() > day);
  const year = new Date().getFullYear() + 1 * passed;
  const date = new Date(year, month, day);

  if (presentDay.toDateString() === date.toDateString()) return 0;

  const seconds = (date.valueOf() - presentDay.valueOf()) / 1000;
  const secondsInMinute = 60;
  const secondsInHour = secondsInMinute * 60;
  const secondsInDay = secondsInHour * 24;
  const days = ~~(seconds / secondsInDay);
  const hours = ~~((seconds % secondsInDay) / secondsInHour);
  const minutes = ~~((seconds % secondsInHour) / secondsInMinute);

  return { days, hours, minutes, seconds: ~~(seconds % secondsInMinute) };
}
