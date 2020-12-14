export function getDateTime(value) {
  const dateObj = new Date(value)
  const month = dateObj.getUTCMonth() + 1 //months from 1-12
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()
  const time = dateObj.toLocaleTimeString()

  const newdate = `${year} / ${month} / ${day} - ${time}`

  return newdate
}
