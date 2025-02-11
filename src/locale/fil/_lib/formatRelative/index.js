var formatRelativeLocale = {
  lastWeek: '[last] dddd [at] p',
  yesterday: '[yesterday at] p',
  today: '[today at] p',
  tomorrow: '[tomorrow at] p',
  nextWeek: 'dddd [at] p',
  other: 'P'
}

export default function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token]
}
