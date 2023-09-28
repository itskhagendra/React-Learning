import style from "./App.module.css";

function App() {
  return (
    <>
      <div className={style.mainContainer}>
        <div className={style.headerContainer}>
          <div className="row">
            <div className="col-4">
              <div>Logo</div>
              <div>Subtitle</div>
            </div>
            <div className="col-md-12 col-lg-4">
              <input type="text"/>
            </div>
          </div>
        </div>
        <div className={style.tvShows}>
          TV Show Detail
        </div>
        <div className={style.recommendedShow}>Recommended Shows</div>
      </div>
    </>
  );
}

export default App;
