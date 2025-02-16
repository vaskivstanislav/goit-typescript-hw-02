enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  // Перевіряємо чи є день вихідний
  const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday
  }
  
  // console.log(isWeekend(DayOfWeek.Monday)) //false
  // console.log(isWeekend(DayOfWeek.Saturday)) //true