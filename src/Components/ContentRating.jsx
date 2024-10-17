import React, { Component } from "react";
import "./ContentRating.css";
class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
  }
  render() {
    return (
      <>
        <h1>Tyrannosaurus Rex (T-Rex)</h1>
        <section className="content-rating">
          <figure>
            <img
              src="https://th.bing.com/th/id/R.1c0015d225e47260d3fb64aedab698ee?rik=7Fx0tWmO8MadQg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f9%2f4%2f1%2f1240415-most-popular-jurassic-world-t-rex-wallpaper-2560x1440-for-1080p.jpg&ehk=TRjpDdesCYTPaGyXfqwywfmEOTmoujgDYZLOs6uQQCE%3d&risl=&pid=ImgRaw&r=0"
              alt="T-Rex Image"
              width="1000 px"
            />
            <figcaption>
              <strong>Tyrannosaurus Rex</strong>
            </figcaption>
          </figure>
          <p>
            <h2>Overview:</h2>
            <article className="note1">
              <strong>Tyrannosaurus (/tɪˌrænəˈsɔːrəs, taɪ-/)</strong>[a] is a
              genus of large theropod dinosaur. The type species{" "}
              <strong>Tyrannosaurus rex</strong> (rex meaning 'king' in Latin),
              often shortened to T. rex or colloquially T-Rex, is one of the
              best represented theropods. It lived throughout what is now
              western North America, on what was then an island continent known
              as Laramidia. Tyrannosaurus had a much wider range than other
              tyrannosaurids. Fossils are found in a variety of rock formations
              dating to the latest Campanian-Maastrichtian ages of the late
              Cretaceous period, 73.2 to 66 million years ago. It was the last
              known member of the tyrannosaurids and among the last non-avian
              dinosaurs to exist before the Cretaceous–Paleogene extinction
              event.,
              <br />
            </article>
            <br />
            <hr />
            <article className="note1">
              Like other tyrannosaurids, Tyrannosaurus was a bipedal carnivore
              with a massive skull balanced by a long, heavy tail. Relative to
              its large and powerful hind limbs, the forelimbs of Tyrannosaurus
              were short but unusually powerful for their size, and they had two
              clawed digits. The most complete specimen measures 12.3–12.4 m
              (40–41 ft) in length, but according to most modern estimates,
              Tyrannosaurus could have exceeded sizes of 13 m (43 ft) in length,
              3.7–4 m (12–13 ft) in hip height, and 8.8 t (8.7 long tons; 9.7
              short tons) in mass. Although some other theropods might have
              rivaled or exceeded Tyrannosaurus in size, it is still among the
              largest known land predators, with its estimated bite force being
              the largest among all terrestrial animals. By far the largest
              carnivore in its environment, Tyrannosaurus rex was most likely an
              apex predator, preying upon hadrosaurs, juvenile armored
              herbivores like ceratopsians and ankylosaurs, and possibly
              sauropods. Some experts have suggested the dinosaur was primarily
              a scavenger. The question of whether Tyrannosaurus was an apex
              predator or a pure scavenger was among the longest debates in
              paleontology. Most paleontologists today accept that Tyrannosaurus
              was both an active predator and a scavenger. <br />
            </article>
            <br />
            <hr />
            <article className="note1">
              Specimens of Tyrannosaurus rex include some that are nearly
              complete skeletons. Soft tissue and proteins have been reported in
              at least one of these specimens. The abundance of fossil material
              has allowed significant research into many aspects of its biology,
              including its life history and biomechanics. The feeding habits,
              physiology, and potential speed of Tyrannosaurus rex are a few
              subjects of debate. Its taxonomy is also controversial, as some
              scientists consider Tarbosaurus bataar from Asia to be a third
              Tyrannosaurus species, while others maintain Tarbosaurus is a
              separate genus. Several other genera of North American
              tyrannosaurids have also been synonymized with Tyrannosaurus. At
              present, two species of Tyrannosaurus are considered valid; the
              type species, T. rex, and the earlier and more recently discovered
              T. mcraeensis. <br />
            </article>
            <br />
            <hr />
            <article className="note1">
              As the archetypal theropod, Tyrannosaurus has been one of the
              best-known dinosaurs since the early 20th century and has been
              featured in film, advertising, postal stamps, and many other
              media.
            </article>
            <br />
            <hr />
          </p>
          <section className="nomenclature">
            <table>
              <tr>
                <th>Classification</th>
                <th>Belongings</th>
              </tr>
              <tr>
                <td>Domain:</td>
                <td><a href="https://en.wikipedia.org/wiki/Eukaryote">Eukaryota</a></td>
              </tr>
              <tr>
                <td>Kingdom:</td>
                <td><a href="https://en.wikipedia.org/wiki/Animal">Animalia</a></td>
              </tr>
              <tr>
                <td>Phylum:</td>
                <td><a href="https://en.wikipedia.org/wiki/Chordate">Chordata</a></td>
              </tr>
              <tr>
                <td>Clade:</td>
                <td><a href="https://en.wikipedia.org/wiki/Dinosaur">Dinosauria</a></td>
              </tr>
              <tr>
                <td>Clade:</td>
                <td><a href="https://en.wikipedia.org/wiki/Saurischia">Saurischia</a></td>
              </tr>
              <tr>
                <td>Clade:</td>
                <td><a href="https://en.wikipedia.org/wiki/Theropoda">Theropoda</a></td>
              </tr>
              <tr>
                <td>Family:</td>
                <td><a href="https://en.wikipedia.org/wiki/Tyrannosauridae">†Tyrannosauridae</a></td>
              </tr>
              <tr>
                <td>Subfamily:</td>
                <td><a href="https://en.wikipedia.org/wiki/Tyrannosaurinae">†Tyrannosaurinae</a></td>
              </tr>
              <tr>
                <td>Clade:</td>
                <td><a href="https://en.wikipedia.org/wiki/Tyrannosaurini">†Tyrannosaurini</a></td>
              </tr>
              <tr>
                <td>Genus:</td>
                <td>†Tyrannosaurus</td>
              </tr>
            </table>
           
          </section>
          <div className="rating-buttons">
            <button className="like-button" onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button
              className="dislike-button"
              onClick={this.state.handleDislike}
            >
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </section>
      </>
    );
  }
}
export default ContentRating;
