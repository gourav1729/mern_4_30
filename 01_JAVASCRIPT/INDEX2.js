// let N1 = 10
// let N2 = 20
// let N3 = 30

if (N1 < N2 && N1 < N3) {
  if (N2 < N3) {
    console.log(N1, N2, N3);
  } else if (N2 > N3) {
    console.log(N1, N3, N2);
  }
} else if (N2 < N1 && N2 < N3) {
  if (N1 < N3) {
    console.log(N2, N1, N3);
  } else if (N1 > N3) {
    console.log(N2, N3, N1);
  }
} else if (N3 < N1 && N3 < N2) {
  if (N1 < N2) {
    console.log(N3, N1, N2);
  } else if (N1 > N2) {
    console.log(N3, N2, N1);
  }
}

let n = 11;

if (n <= 1) {
  console.log("Not a prime number");
} else {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log("Not a prime number");
    }
  }
  console.log("Prime number");
}

// ->FALSY VALUES
// false, 0, -0, On (Bigint value), "" (empty string), null, undefined, NaN

// ->TRUTH VALUES : EVERYTHING ELSE, EXCEPT FALSY VALUES .

let a = 0;

if (a) {
  console.log("IT HAS A TRUE VALUE");
} else {
  console.log("IT HAS A FALSE EVALUE");
}
