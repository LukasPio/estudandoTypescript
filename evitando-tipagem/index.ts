// function kissPerson(Person: {name: string, isBoy?: boolean}) {
//     console.log(Person)
// }
//
// kissPerson({ name: "Jorge", isBoy: true });
//
// kissPerson({ name: "Jorge"});

// let input : any
//
// input = 10
// input = 'ka'
// input = {}
//
// let text: string
//
// text = input

function verification(test: boolean) {
  if (test) {
  } else {
    let _check: never;
    let text = _check;

    // text = ''

    return _check;
  }
}

verification(false);
