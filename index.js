const scrollbar = document.querySelector(".scrollbar")
window.addEventListener("scroll", () => {
  console.log("scrollY", window.scrollY);
  console.log("scrollHeight", document.body.scrollHeight)
  console.log("innerHeight", window.innerHeight)
  let percentage =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight))
  scrollbar.style.width = percentage + '%'
})