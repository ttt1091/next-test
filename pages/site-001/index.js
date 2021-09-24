import Link from 'next/link'
import Layout from '../../components/site-001/home-layout'

export default function Index() {
  return (
    <main>
      <div className="top-message">
        <img src="https://placehold.jp/24/cc9999/993333/300x250.png?text=top" alt="" />
      </div>
      <section className="item-section">
        <h2>○○○○</h2>
        <div className="item-section-text">
          親譲りの無鉄砲で小供の時から損ばかりしている。小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。新築の二階から首を出していたら、同級生の一人が冗談に、いくら威張っても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。小使に負ぶさって帰って来た時、おやじが大きな眼をして二階ぐらいから飛び降りて腰を抜かす奴があるかと云ったから、この次は抜かさずに飛んで見せますと答えた。（青空文庫より）
        </div>
      </section>

      <section className="item-section">
        <h2>○○○○</h2>
        <div className="item-section-text">
          つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）
        </div>
      </section>

      <section className="item-section">
        <h2>○○○○</h2>
        <div className="item-card">
          <div className="item-card-prof">
            <div className="item-card-prof-icon">
              <img src="https://placehold.jp//24/cc9999/993333/100x100.png?text=ICON" alt="" />
            </div>
            <div className="item-card-prof-icon-caption">
              <span>日本 太郎</span>
            </div>
          </div>
          <div className="item-card-body">
            もしもし亀よ<br />
            亀さんよ<br />
            どうしてあんたは<br />
            亀なのよ🐢
          </div>
        </div>
      </section>

      <section className="item-section">
        <h2>○○○○</h2>
        <div className="item-section-text long-text">
          日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。<br />
          日本国民は、恒久の平和を念願し、人間相互の関係を支配する崇高な理想を深く自覚するのであつて、平和を愛する諸国民の公正と信義に信頼して、われらの安全と生存を保持しようと決意した。われらは、平和を維持し、専制と隷従、圧迫と偏狭を地上から永遠に除去しようと努めてゐる国際社会において、名誉ある地位を占めたいと思ふ。われらは、全世界の国民が、ひとしく恐怖と欠乏から免かれ、平和のうちに生存する権利を有することを確認する。<br />
          <br />
          われらは、いづれの国家も、自国のことのみに専念して他国を無視してはならないのであつて、政治道徳の法則は、普遍的なものであり、この法則に従ふことは、自国の主権を維持し、他国と対等関係に立たうとする各国の責務であると信ずる。<br />
          <br />
          日本国民は、国家の名誉にかけ、全力をあげてこの崇高な理想と目的を達成することを誓ふ。
        </div>
      </section>



      <div>
        <a className="link-button" href="/about">test</a>
        <a className="link-button" href="/site-001/about">about</a>
      </div>
    </main>
  )
}




Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}