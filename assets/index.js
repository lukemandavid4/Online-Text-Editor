function myFunction() {
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let js = document.getElementById("js-code").value;
    let output = document.getElementById("output-area");
  
    output.contentDocument.body.innerHTML = html + "<style>" + css + "</style>";
    output.contentWindow(js);
  }