const update = document.querySelector("#update-button");
const remove = document.querySelector("#delete-button");
const message = document.querySelector("message");

update.addEventListener("click", () => {
  fetch("/quotes", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Darth Vader",
      quote: "I find your lack of faith disturbing.",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
});

remove.addEventListener("click", () => {
  fetch("/quotes", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Darth Vader",
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data === "No quote to delete") {
        message.textContent = "No quote to delete";
      } else window.location.reload;
    })
    .catch((err) => console.error(err));
});
