import Dom from "./Dom.js";
class University extends Dom {
  constructor(name, web_pages) {
    super();
    this.name = name;
    this.web_pages = web_pages;

    this.render();
  }
  render() {
    const article = this.createMarkup("article", "", document.querySelector("#universities"));
    this.createMarkup("h2", this.name, article);
    this.createMarkup("p", this.web_pages, article);
  }
}