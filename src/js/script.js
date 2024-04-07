// simplyCountdown
simplyCountdown('.simply-countdown-losange', {
  year: 2024, // required
  month: 4, // required
  day: 13, // required
  hours: 8, // Default is 0 [0-23] integer
  words: { //words displayed into the countdown
    days: { singular: 'hari', plural: 'hari' },
    hours: { singular: 'jam', plural: 'jam' },
    minutes: { singular: 'menit', plural: 'menit' },
    seconds: { singular: 'detik', plural: 'detik' }
  },
});