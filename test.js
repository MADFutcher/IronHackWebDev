var whatTimeIsIt = function(angle) {
    if(angle === 0){
      return '12:00'
    }
    let minuteAngle = 0.5
    let totalMinutes = angle / 0.5
    let timeHours = Math.floor(totalMinutes / 60)
    let timeMinutes = Math.floor(totalMinutes % 60)
    let timeHourStr;
    let timeMinuteStr;
  
    
    console.log(timeHourStr)
    if(timeHours >= 1 && timeHours<10){
         timeHourStr = '0'+timeHours.toString()
    }else if(timeHours == 0){
        console.log('HOur should be 12')
        timeHourStr = '12'
    }else{
         timeHourStr = timeHours.toString()
    }
    if(timeMinutes<10){
         timeMinuteStr = '0'+timeMinutes.toString()
    }else{
         timeMinuteStr = timeMinutes.toString()
    }
    
    return `${timeHourStr}:${timeMinuteStr}`
  }
  


console.log(whatTimeIsIt(9.537557408071908))