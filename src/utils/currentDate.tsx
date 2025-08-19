export function currentDate() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
  return formattedDate.replace(",", "");
}
