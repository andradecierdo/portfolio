export const getSchoolYearLabel = (starDate: Date, endDate?: Date): string => {
  const endYear = endDate?.getFullYear() || 'Present'
  return `(${starDate.getFullYear()} - ${endYear})`
}

export const getDateLabel = (d: Date): string => {
  return d.toLocaleString('default', { month: 'short', year: 'numeric' })
}

export const getDurationLabel = (starDate: Date, endDate?: Date): string => {
  const endYear = endDate ? getDateLabel(endDate) : 'Present'
  return `(${getDateLabel(starDate)} - ${endYear})`
}
