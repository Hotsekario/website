onload = () => {
  const c = setTimeout(() => {
    document.getElementById("flower_container").classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};