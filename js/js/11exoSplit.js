class CustomString extends String {
  split(separator) {
    return super.split(separator);
  }
}

const hello = new CustomString("Hello World");

const result = hello.split("o");

console.log(`Retout de hello.split("o")`, result);
