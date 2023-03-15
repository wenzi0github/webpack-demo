import "./c.c";

const c = 1;

const sum = (a, b) => {
  return a + b + c;
};

document.addEventListener("click", () => {
  console.log(sum(Date.now(), 1));
});

// console.log(sum(1, 2));

// export default sum;
