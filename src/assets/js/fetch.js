// import data from "/src/assets/json/tst.json" assert { type: "json" };
// import data from '/src/assets/json/tst.json' with {type: 'json'};
// import data from "/src/assets/json/tst.json";

// const tst = "/src/assets/json/tst.json";
const tst = "http://localhost:5173/src/assets/json/tst.json";

fetch(tst)
  .then((res) => res.json())
  .then((data) => showInfo(data));

const showInfo = (data) => {
  console.log(data.dev);
};

const dev1 = [
  { nome: "SA", href: "./dev/sa", disable: false },
  { nome: "BR", href: "./dev/br" },
  { nome: "CA", href: "./dev/ca", disable: true },
];

async function postJSON() {
  try {
    const res = await fetch(tst);
    const data = await res.json();
    data.dev = dev1;

    console.log(data.dev);
    const response = await fetch(tst, {
      method: "PUT", // or 'PUT'
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result.dev);
  } catch (error) {
    console.error("Error:", error);
  }
}

// const data = { username: "example" };
postJSON();
