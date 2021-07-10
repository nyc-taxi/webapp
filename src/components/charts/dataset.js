
import uplow from './upperlower24.csv';
import data from './data24.csv';
import outlier from './outlier24.csv';
import { isBefore, isAfter, parseISO } from 'date-fns';


export function forRange(from, to) {

  const fromISO = parseISO(from);
  const toISO = parseISO(to);

  const uplowFiltered = uplow.filter((col) => {
    const timestamp = parseISO(col.timestamp)
    return isBefore(fromISO, timestamp) && isAfter(toISO, timestamp);
  })
  // eslint-disable-next-line no-unused-vars
  const dataFiltered = data.filter((col) => {
    const timestamp = parseISO(col.timestamp)
    return isBefore(fromISO, timestamp) && isAfter(toISO, timestamp);
  })

  const outlierFiltered = outlier.filter((col) => {
    const timestamp = parseISO(col.timestamp)
    return isBefore(fromISO, timestamp) && isAfter(toISO, timestamp);
  });

  const outlierCurve = outlierFiltered.reduce((prev, curr) => {
    if (curr.isOutlier) {
      return [...prev, curr.value];
    }
    return [...prev, NaN];
  }, []) 

  const labels = uplowFiltered.reduce((prev, curr) => {
    return [...prev, curr.timestamp];
  }, [])

  const upperCurve = uplowFiltered.reduce((prev, curr) => {
    return [...prev, curr.UpperLimit];
  }, [])

  const lowerCurve = uplowFiltered.reduce((prev, curr) => {
    return [...prev, curr.LowerLimit];
  }, [])

  const dataCurve = outlierFiltered.reduce((prev, curr) => {
    return [...prev, curr.value];
  }, []);


  return { upperCurve, lowerCurve, labels, dataCurve, outlierCurve };
}