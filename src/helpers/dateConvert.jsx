import moment from 'moment'

export function getDateTime(value) {
  const dateObj = new Date(value)
  const month = dateObj.getUTCMonth() + 1 //months from 1-12
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()
  const time = dateObj.toLocaleTimeString()

  const newdate = `${year} / ${month} / ${day} - ${time}`

  return newdate
}


export function getDate(value) {
  const dateObj = new Date(value)
  const month = dateObj.getUTCMonth() + 1 //months from 1-12
  const day = dateObj.getUTCDate()
  const year = dateObj.getUTCFullYear()
  const time = dateObj.toLocaleTimeString()

  const newdate = `${year} / ${month} / ${day}`

  return newdate
}

export function getMomentDate(value) {

  const momentDate = moment(value).fromNow()

  return momentDate
}
