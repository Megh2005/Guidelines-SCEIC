const downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", function () {
  const printableContent = document.querySelector("section").outerHTML;
  const newWindow = window.open();

  newWindow.document.write(printableContent);
  newWindow.document.close();
  newWindow.print();
  newWindow.close();
});
