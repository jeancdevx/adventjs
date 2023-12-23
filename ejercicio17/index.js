function optimizeIntervals(intervals) {
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0])

  const optimizedIntervals = sortedIntervals.reduce((acc, interval) => {
    const lastInterval = acc[acc.length - 1]

    if (lastInterval && lastInterval[1] >= interval[0]) {
      lastInterval[1] = Math.max(lastInterval[1], interval[1])
    } else {
      acc.push(interval)
    }

    return acc
  }, [])

  return optimizedIntervals
}
