export function dateTime() {
  const currentTime = new Date();

  const hours = String(currentTime.getHours()).padStart(2, "0");
  const minutes = String(currentTime.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}
