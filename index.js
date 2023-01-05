"use strict";

const themeToggler = document.querySelector(".theme-toggler");

themeToggler.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme-variables");
  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
  <td>${order.ProductName}</td>
  <td>${order.ProductNumber}</td>
  <td>${order.ProductStatus}</td>
  <td class="${
    order.Ship === "Declined"
      ? "danger"
      : order.Ship === "Pending"
      ? "warning"
      : "success"
  }">${order.Ship}</td>
  <td class="primary">Details</td>
  `;

  tr.innerHTML = trContent;
  document.querySelector("tbody").appendChild(tr);
});
