# format-object-keys [![CircleCI](https://circleci.com/gh/kunal-mandalia/format-object-keys.svg?style=svg)](https://circleci.com/gh/kunal-mandalia/format-object-keys)
Format keys in an object to be camelCase, PascalCase, or a custom format.

## Example

```
// import function
const formatObjectKeys = require('./formatObjectKeys)

// provide a data structure whose
// keys you want formatted
const dataStructure = {
  FIRST_NAME: 'Kunal',
  LAST_NAME: 'Mandalia',
  LOCATION: 'London',
  JOB_HISTORY: [
    {
      DATE_FROM: 'April 2016',
      DATE_TO: 'Present'.
      TITLE: 'Js developer'
    }
  ]
}

// define a function to format keys
// here we'll camelCase key given
// key has the structure <FIRSTWORD>_<SECONDWORD>...
const formatter = key => {
  if (typeof key === 'string') {
    return key.toLowerCase()
      .split('_')
      .map((word, i) => i > 0
        ? word[0].toUpperCase() + word.substr(1)
        : word
      )
      .join('')
  }
  return key
}

const result = formatObjectKeys(dataStructure, formatter)
console.log(result)
{
  firstName: 'Kunal',
  lastName: 'Mandalia',
  location: 'London',
  jobHistory: [
    {
      dateFrom: 'April 2016',
      dateTo: 'Present'.
      title: 'Js developer'
    }
  ]
}
```

## Limitations
No support for circular references yet. PRs welcome to support this feature.

## License
MIT