let previous;
      function copy(event) {
        event.stopPropagation();
        let textCopied = event.target.previousElementSibling.firstElementChild;
        textCopied.disabled=false
        textCopied.select();
        textCopied.setSelectionRange(0, 99999);
        document.execCommand("copy");
        textCopied.disabled=true
        event.target.classList.add("copied");
        event.target.innerHTML = "Done";
        previous = event.target;
      }
      function show(event) {
        event.stopPropagation();
        let baseElement =
          event.target.nodeName === "IMG"
            ? event.target.parentElement
            : event.target;
        baseElement.nextElementSibling.hidden =
          !baseElement.nextElementSibling.hidden;
      }
      function hide(event) {
        event.stopPropagation();
        event.target.classList.contains("link-div") &&
          (event.target.hidden = !event.target.hidden);
        event.target.classList.contains("wrapper") &&
          (event.target.style = "display:none");
        previous.classList.remove("copied");
        previous.innerHTML = "copy";
      }
      function popover() {
        document.querySelector(".wrapper").style = "display:grid";
      }