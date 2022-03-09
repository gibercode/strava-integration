export const actionObject = (type, payload) => ({ type, payload })

export const transformDate = date => {
  const localDate = new Date(date)
  const year = localDate.getFullYear()
  const month = localDate.getMonth() + 1
  const day = localDate.getDate()

  return `${day}/${month}/${year}`
}

export const buildArray = array => {
  const newArray = array.map((item, index) => {
    const data = {
      key: index,
      name: item?.name,
      date: transformDate(item?.start_date_local),
      distance: item?.distance,
      time: item?.moving_time,
      elevation: item?.total_elevation_gain
    }

    return data
  })

  return newArray || []
}