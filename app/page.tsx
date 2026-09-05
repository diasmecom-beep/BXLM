import Image from "next/image";
import {
  site,
  book,
  specs,
  offers,
  timeline,
  whyPoints,
  video,
  mailto,
} from "@/lib/content";
import PedagogyCards from "@/components/PedagogyCards";

import heroImg from "./assets/hero.jpg";
import coverImg from "./assets/cover.jpg";
import bandImg from "./assets/band-poelaert.jpg";
import bangouraImg from "./assets/bangoura.jpg";

const Wordmark = ({ className }: { className?: string }) => (
  <span className={className}>
    B<i>X</i>LM
  </span>
);

export default function Page() {
  return (
    <>
      <header>
        <div className="wrap bar">
          <a href="#top" className="mark">
            <Wordmark />
          </a>
          <nav>
            <a href="#livre">Le livre</a>
            <a href="#recit">Le récit</a>
            <a href="#pedagogie">Pédagogie</a>
            <a href="#se-procurer" className="buy">
              Se procurer
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="hero">
          <div className="hero-img">
            <Image
              src={heroImg}
              alt="Foule poings levés lors de la manifestation du 7 juin 2020 à Bruxelles."
              fill
              sizes="100vw"
              placeholder="blur"
              priority
            />
            <span className="hero-scrim" aria-hidden="true" />
          </div>
          <div className="wrap hero-inner">
            <p className="eyebrow kicker">Récit · Bruxelles · 7 juin 2020</p>
            <Wordmark className="wordmark" />
            <h1>{book.subtitle}</h1>
            <p className="byline">
              {book.authors} &nbsp;·&nbsp; Photographies {book.photographer}
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#se-procurer">
                Se procurer l’ouvrage
              </a>
              <a className="btn btn-ghost" href="#pedagogie">
                Pour les équipes pédagogiques
              </a>
            </div>
          </div>
        </section>

        {/* ---------- LE LIVRE ---------- */}
        <section id="livre">
          <div className="wrap body-col livre-grid reveal">
            <div>
              <p className="eyebrow">Le livre</p>
              <p className="lead measure mt-s">
                Le 7 juin 2020, entre dix et vingt mille personnes se rassemblent
                devant le Palais de Justice de Bruxelles pour dénoncer les
                violences policières et la négrophobie. <strong>BXLM</strong>{" "}
                raconte cette journée de l’intérieur : par celles et ceux qui
                l’ont organisée.
              </p>
              <div className="measure mt-m">
                <p>
                  Deux des coordinateurs de la mobilisation, Tayino Chérubin et
                  Dido Lakama, reconstituent la semaine de tractations, de peurs
                  et de désaccords qui a précédé la manifestation : l’appel
                  initial, porté par un collectif féminin néerlandophone puis
                  annulé sous pression politique ; le sit-in maintenu malgré
                  tout, un genou à terre, pour George Floyd ; l’interdiction
                  fédérale au nom du risque sanitaire ; et la décision de tenir
                  bon.
                </p>
                <p>
                  Le texte ne lisse rien. Il s’attarde sur{" "}
                  <strong>la fracture autour du mot d’ordre</strong> — «&nbsp;black
                  lives&nbsp;» ou «&nbsp;all lives&nbsp;»&nbsp;? — sur les
                  tensions attisées entre jeunes maghrébins et subsahariens, sur
                  les tentatives de récupération du leadership, et sur ces
                  personnalités venues «&nbsp;récolter les lauriers&nbsp;» au
                  journal télévisé sans avoir pris part à une seule réunion.
                </p>
                <p>
                  C’est un livre de terrain, écrit dans la langue du terrain :
                  nerveuse, franche, traversée de doutes. Un format de poche de
                  64 pages qui se lit d’une traite et se discute longtemps.
                </p>
              </div>
            </div>
            <figure className="cover-obj">
              <Image
                src={coverImg}
                alt="Couverture de BXLM : vue aérienne du Palais de Justice de Bruxelles et de la foule du 7 juin 2020."
                sizes="(max-width: 860px) 60vw, 20rem"
                placeholder="blur"
              />
              <figcaption>Couverture — design {book.coverDesign}</figcaption>
            </figure>
          </div>
        </section>

        {/* ---------- BANDE PHOTO 1 ---------- */}
        <section className="band" aria-label="Photographie">
          <figure className="band-fig">
            <Image
              src={bandImg}
              alt="Foule dense poings levés devant le parking Poelaert, face au Palais de Justice de Bruxelles, 7 juin 2020."
              fill
              sizes="100vw"
              placeholder="blur"
            />
          </figure>
          <figcaption className="band-cap">
            <b>Place Poelaert, face au Palais de Justice.</b> Entre dix mille
            personnes selon la police et vingt mille selon les organisateurs. Le
            rassemblement s’est tenu dans le calme pendant trois heures.{" "}
            <span className="hash">#7juin2020</span>
          </figcaption>
        </section>

        {/* ---------- LE RÉCIT ---------- */}
        <section id="recit">
          <div className="wrap reveal">
            <h2 className="section-title measure">
              <span className="n">→</span>De l’étincelle à l’après
            </h2>
            <p className="measure body-col">
              <span style={{ color: "var(--ink-soft)" }}>
                Le livre suit un fil chronologique clair. Chaque étape est un cas
                d’étude en soi : décision collective, gestion du risque, rapport
                aux institutions.
              </span>
            </p>
            <div className="track">
              {timeline.map((s, i) => (
                <div className="step" key={i}>
                  <div className="when">{s.when}</div>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- CITATION ---------- */}
        <section className="pull">
          <div className="wrap reveal">
            <blockquote>
              Rien ne peut changer tant que ce n’est pas affronté.
            </blockquote>
            <p className="src">D’après James Baldwin — épigraphe de l’ouvrage</p>
          </div>
        </section>

        {/* ---------- PÉDAGOGIE ---------- */}
        <section id="pedagogie">
          <div className="wrap reveal">
            <p className="eyebrow">Pour les organismes pédagogiques</p>
            <h2 className="section-title measure mt-s">
              Un outil de discussion, pas un manuel
            </h2>
            <p className="lead measure">
              Court, situé en Belgique, écrit par des acteurs de terrain : BXLM
              ouvre en classe des débats que les ressources importées des
              États-Unis ne permettent pas.
            </p>

            <div className="why">
              {whyPoints.map((w, i) => (
                <div key={i}>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              ))}
            </div>

            <h3 className="subhead">Six portes d’entrée en classe</h3>
            <PedagogyCards />
          </div>
        </section>

        {/* ---------- BANDE PHOTO 2 ---------- */}
        <section className="band" aria-label="Photographie">
          <figure className="band-fig">
            <Image
              src={bangouraImg}
              alt="Le père de Lamine Moïse Bangoura prend la parole au micro devant les portraits de son fils, entouré de proches, Bruxelles."
              fill
              sizes="100vw"
              placeholder="blur"
            />
          </figure>
          <figcaption className="band-cap">
            <b>La voix d’un père.</b> Lamine Moïse Bangoura, mort en 2018 lors de
            son expulsion par la police à Roeselare. Son histoire, longtemps
            ignorée, a été portée au micro le 7 juin.{" "}
            <span className="hash">#JusticePourLamineBangoura</span>
          </figcaption>
        </section>

        {/* ---------- BANDE VIDÉO ---------- */}
        <section className="band" aria-label="Vidéo">
          <div className="video-frame">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/videoseries?list=${video.playlistId}`}
              title={video.title}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <figcaption className="band-cap">
            <b>{video.title}.</b> <span className="hash">{video.qrNote}</span>
            <br />
            <a className="band-link" href={video.playlistUrl} target="_blank" rel="noreferrer">
              {video.watchCta} ↗
            </a>
          </figcaption>
        </section>

        {/* ---------- FICHE TECHNIQUE ---------- */}
        <section className="specs">
          <dl className="wrap">
            {specs.map((s, i) => (
              <div key={i}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- SE PROCURER ---------- */}
        <section id="se-procurer">
          <div className="wrap reveal">
            <p className="eyebrow">Se procurer l’ouvrage</p>
            <h2 className="section-title measure mt-s">
              E-book ou version papier
            </h2>
            <p className="lead measure">
              Pour un usage individuel comme pour un set de classe. Les commandes
              groupées et les licences de diffusion interne se traitent
              directement avec les auteurs.
            </p>

            <div className="offer">
              <article>
                <span className="k">{offers.ebook.kicker}</span>
                <div className="offer-head">
                  <h3>{offers.ebook.title}</h3>
                  <span className="offer-price">{offers.ebook.price}</span>
                </div>
                <p className="fmt">{offers.ebook.format}</p>
                <ul>
                  {offers.ebook.lines.map((l, i) => (
                    <li key={i}>
                      {l.strong && <b>{l.strong}</b>}
                      {l.rest}
                    </li>
                  ))}
                </ul>
                <div className="offer-actions">
                  <a
                    className="btn btn-primary"
                    href={offers.ebook.paymentLink}
                  >
                    {offers.ebook.paymentCta}
                  </a>
                  <a
                    className="btn btn-outline"
                    href={mailto(offers.ebook.mailSubject, offers.ebook.mailBody)}
                  >
                    {offers.ebook.mailCta}
                  </a>
                </div>
                <p className="note">{offers.ebook.note}</p>
              </article>

              <article className="feat">
                <span className="k">{offers.paper.kicker}</span>
                <div className="offer-head">
                  <h3>{offers.paper.title}</h3>
                  <span className="offer-price">{offers.paper.price}</span>
                </div>
                <p className="fmt">{offers.paper.format}</p>
                <ul>
                  {offers.paper.lines.map((l, i) => (
                    <li key={i}>
                      {l.strong && <b>{l.strong}</b>}
                      {l.rest}
                    </li>
                  ))}
                </ul>
                <div className="offer-actions">
                  <a
                    className="btn btn-primary"
                    href={offers.paper.paymentLink}
                  >
                    {offers.paper.paymentCta}
                  </a>
                  <a
                    className="btn btn-outline"
                    href={mailto(offers.paper.mailSubject, offers.paper.mailBody)}
                  >
                    {offers.paper.mailCta}
                  </a>
                </div>
                <p className="note">{offers.paper.note}</p>
              </article>
            </div>

            <div className="desk">
              <p>
                <b>Vous enseignez ou formez&nbsp;?</b> Demandez un{" "}
                <b>exemplaire de consultation</b> gratuit pour évaluer l’ouvrage
                avant une commande groupée.
              </p>
              <a
                className="btn btn-outline"
                href={mailto(
                  offers.deskCopy.mailSubject,
                  offers.deskCopy.mailBody,
                )}
              >
                {offers.deskCopy.cta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div>
            <Wordmark className="wordmark-sm" />
            <p className="credits">
              © {book.authors} — imprimé en {book.year}.
              <br />
              Photographies : {book.photographer}. Illustration et mise en page :
              Collection {book.collection}. Graphique : {book.layout}. Design de
              couverture : {book.coverDesign}.
              <br />
              Avec les remerciements à Esther Kouablan (MRAX), Gia Abrassart
              (Café Congo), Véronique Clette-Gakuba (Présences noires).
            </p>
          </div>
          <div>
            <h4>Commandes &amp; licences</h4>
            <p>
              <a href={mailto(offers.general.mailSubject, offers.general.mailBody)}>
                {site.orderEmail}
              </a>
              <br />
              Devis, bons de commande et licences établissement sur demande.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
