class SlideShow {
  constructor(nb_images, width, height, speed) {
    // paramètres
    this.nb_images = nb_images;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.images = [];
    // Appel des méthodes
    this.feedSlideshow();

    // Rendu
    this.render();
  }
  feedSlideshow() {
    // Création des images
    for (let i = 0; i < this.nb_images; i++) {
      this.images.push(this.createImage());
    }
  }
  createImage() {
    // création d'une image
    const img = document.createElement("img");
    img.setAttribute("src", `https://picsum.photos/${this.width}/${this.height}?id=${Math.random() * 1000}`);
    return img;
  }
  render() {
    const sectionSlideshow = this.createMarkup("section", "", document.body, [{ name: "id", value: "slideshow" }]);
    // Rendre les images visibles en les ajoutant à ma section d'id slideshow
    this.images.forEach(image => {
      sectionSlideshow.appendChild(image);
    })

  }
  createMarkup(markup_name, text, parent, attributes = []) {
    const markup = document.createElement(markup_name);
    markup.textContent = text;
    parent.appendChild(markup);
    attributes.forEach((attribute) => {
      if (attribute && attribute.hasOwnProperty("name") && attribute.hasOwnProperty("value")) {
        markup.setAttribute(attribute.name, attribute.value);
      }
    })

    return markup;
  }
}
const firstSlideshow = new SlideShow(6, 600, 400, 1000);