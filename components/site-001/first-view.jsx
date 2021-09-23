export default function firstView() {
  return (   
    <section>
      <div className="first-view">
        <div className="first-view-title">
          <h1>site</h1>
        </div>
        <div className="first-view-main">title</div>
        <div className="first-view-bottom"></div>
        <style jsx>{`
          .first-view {
            position: relative;
          }
        `}</style>
      </div>
    </section>
  );
}