

const ContainerFirst = () => {
  return (
    <div className="collection-section">
      <div className="collection-content">
        <h1>Elegeant Timepiece Collection</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, qui
          quas? Blanditiis, at aspernatur accusamus eaque eveniet a? Laboriosam
          rem fugit ut, assumenda enim corrupti quas omnis placeat velit
          dignissimos!
        </p>
        <button className="btn" >Explore</button>
      </div>
      <div className="collection-images">
        <img src="../src/assets/lightbrown-watch.png" alt="watch-01" />
        <img src="../src/assets/multicolor-watch.png" alt="watch-02" />
      </div>
      <div className="collection-images-ipad">
        <img src="../src/assets/rectanglebrown-watch.png" alt="watch-01" />
        <img src="../src/assets/rectanglemulticolor-watch.png" alt="watch-02" />
      </div>
    </div>
  );
}

export default ContainerFirst;
