import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./mock";


export async function fetchInfos (id, isMocked) {
    if (isMocked) {
        
        const data = USER_MAIN_DATA.find(user => user.userId === parseInt(id))
        return data.keyData
    }
    let response
    let data
    try {
      response = await fetch(`http://localhost:3000/user/${id}`)
      data = await response.json()
      return data.data.keyData
    } catch (err) {
      console.log('----- Error -----', err)
    }
}
export async function fetchInformationUserInfo (id, isMocked) {
    if (isMocked) {
      const data = USER_MAIN_DATA.find(user => user.userId === parseInt(id))
      return data.userInfos
    }
    let response
    let data
    try {
      response = await fetch(`http://localhost:3000/user/${id}`)
      data = await response.json()
      return data.data.userInfos
    } catch (err) {
      console.log('----- Error -----', err)
    }
  }


  export async function fetchInformationScore (id, isMocked) {
    if (isMocked) {
      const data = USER_MAIN_DATA.find(user => user.userId === parseInt(id))
      const newData = formatScore({ data: data })
      return newData
    }
    let response
    let data
    try {
      response = await fetch(`http://localhost:3000/user/${id}`)
      data = await response.json()
      const newData = formatScore({ data: data.data })
      return newData
    } catch (err) {
      console.log('----- Error -----', err)
    }
  }

  export async function fetchActivity (id, isMocked) {
    if (isMocked) {
      const data = USER_ACTIVITY.find(user => user.userId === parseInt(id))
      const newData = formatActivityData({
        sessions: data.sessions,
        day: data.sessions.day,
        kilogram: data.sessions.kilogram,
        calories: data.sessions.calories
      })
      return newData
    }
    let response
    let data
    try {
      response = await fetch(`http://localhost:3000/user/${id}/activity`)
      data = await response.json()
      const newData = formatActivityData({
        sessions: data.data.sessions,
        day: data.data.sessions.day,
        kilogram: data.data.sessions.kilogram,
        calories: data.data.sessions.calories
      })
      return newData
    } catch (err) {
      console.log('----- Error -----', err)
    }
  }
  
export async function fetchAverageSession (id, isMocked) {
    if (isMocked) {
      const data = USER_AVERAGE_SESSIONS.find(user => user.userId === parseInt(id))
      const newData = formatSessionDays({
        sessions: data.sessions,
        day: data.sessions.day,
        sessionLength: data.sessions.sessionLength
      })
      return newData
    }
    let response
    let data
    try {
      response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
      data = await response.json()
      const newData = formatSessionDays({
        sessions: data.data.sessions,
        day: data.data.sessions.day,
        sessionLength: data.data.sessions.sessionLength
      })
      return newData
    } catch (err) {
      console.log('----- Error -----', err)
    }
  }
  
export async function fetchPerformance (id, isMocked) {
    if (isMocked) {
      const data = USER_PERFORMANCE.find(user => user.userId === parseInt(id))
      const newData = formatPerformanceData({
        data: data.data,
        kind: data.kind
      })
      newData.reverse()
      return newData
    }
    let response
    let data
    try {
      response = await fetch(`http://localhost:3000/user/${id}/performance`)
      data = await response.json()
      const newData = formatPerformanceData({
        data: data.data.data,
        kind: data.data.kind
      })
      newData.reverse()
      return newData
    } catch (err) {
      console.log('----- Error -----', err)
    }
  }
  
const translation = {
    cardio: 'Cardio',
    energy: 'Energie',
    endurance: 'Endurance',
    strength: 'Force',
    speed: 'Vitesse',
    intensity: 'Intensité'
  }
  
  function formatPerformanceData (dataOriginal) {
    const { data, kind } = dataOriginal
    const newData = []
    data.forEach(perf => {
      newData.push({
        value: perf.value,
        kind: translation[kind[perf.kind]]
      })
    })
    return newData
  }
  
  function formatActivityData (dataOriginal) {
    const { sessions } = dataOriginal
    const newData = []
    let date
    sessions.forEach(sess => {
      date = new Date(sess.day)
      newData.push({
        day: date.getDate(),
        kilogram: sess.kilogram,
        calories: sess.calories
      })
    })
    return newData
  }
  
  const jour = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
  }
  
  function formatSessionDays (dataOriginal) {
    const { sessions } = dataOriginal
    const newData = []
    sessions.forEach(sess => {
      newData.push({
        day: jour[sess.day],
        sessionLength: sess.sessionLength
      })
    })
    return newData
  }
  
  function formatScore (dataOriginal) {
    const { data } = dataOriginal
    let score
    if (data.todayScore === undefined) {
      score = data.score
    } else {
      score = data.todayScore
    }
    const newData = []
    newData.push({
      userId: data.userId,
      todayScore: score,
      fill: '#ff0000'
    })
    return newData
  }