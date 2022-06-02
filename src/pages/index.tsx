import { useEffect, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import LoadingScreen from "../components/LoadingScreen";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";
import Debouncer from "../utils/Debouncer";

const technologiesStack = [
  "Javascript",
  "Node.js",
  "React",
  "Angular",
  "Express",
  "Next.js",
  "NestJS",
  "Material-UI",
  "Chakra UI",
  "Bootstrap",
  "Tailwind",
  "Sass",
  "Python",
  "Django",
  "Django REST framework",
  "Golang",
  "Gin Gonic",
  "Rust",
  "WebAssembly",
  "Celery",
  "RabbitMQ",
  "JWT",
  "Git",
  "GitHub",
  "Bitbucket",
  "Jira",
  "Slack",
  "Atlassian",
  "Tornado",
  "Flask",
  "Numba",
  "Blockchain",
  "Solidity",
  "Scrum",
  "Kanban",
  "Netlify",
  "Vercel",
  "Heroku",
  "Linode",
  "Firebase - Authentication",
  "Firebase - Firestore",
  "Firebase - RTD",
  "Firebase - Hosting",
  "Firebase - Functions",
  "AWS - SAM",
  "AWS - S3",
  "AWS - IAM",
  "AWS - Lambda",
  "AWS - SQS",
  "AWS - Route 53",
  "AWS - Cloudfront",
  "Terraform",
  "Infraestructure as code",
  "Distributed systems",
  "MySQL",
  "MariaDB",
  "PosgreSQL",
  "MongoDB",
  "Redis",
  "GraphQL",
];

const companyUrls = [
  "/companies/tentech.jpeg",
  "/companies/expandya.jpeg",
  "/companies/elc.jpeg",
  "/companies/kingsofbinary.jfif",
  "/companies/devsu.jpeg",
  "/companies/ccl.jpeg",
  "/companies/everymundo.jpeg",
  "/companies/bairesdev.png",
  "/companies/ergeon.jpeg",
];

const quotesApiUrl = "https://api.quotable.io/random";

const platforms = [
  {
    fontIcon: "fa-brands fa-instagram",
    url: "https://www.instagram.com/zpaceway",
  },
  {
    fontIcon: "fa-brands fa-facebook",
    url: "https://www.facebook.com/zpaceway",
  },
  {
    fontIcon: "fa-brands fa-youtube",
    url: "https://www.youtube.com/channel/UC2WdAKIvcba6vzvDeAVjnrA",
  },
  { fontIcon: "fa-brands fa-twitch", url: "https://www.twitch.tv/zpaceway" },
  { fontIcon: "fa-brands fa-whatsapp", url: "https://wa.me/593998775709" },
  { fontIcon: "fa-brands fa-telegram", url: "https://t.me/zpaceway" },
  { fontIcon: "fa-solid fa-envelope", url: "mailto:zpaceway@gmail.com" },
  { fontIcon: "fa-brands fa-github", url: "https://github.com/zpaceway" },
  { fontIcon: "fa-brands fa-discord", url: "https://discord.gg/YP3qguHH6X" },
];

const scrollStatus = {
  scrollPosAfter: 0,
  scrollPosBefore: 0,
  isNavbarHidden: false,
};

const scrollTransition = new Debouncer();

function Home() {
  const [search, setSearch] = useState("");
  const [filteredtechnologies, setFilteredTechnologies] = useState(
    [] as string[]
  );
  const [quote, setQuote] = useState({} as any);
  const [loadMoreToggled, setLoadMoreToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isJustVisitor, setIsJustVisitor] = useState(false);
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  useEffect(() => {
    const _filteredTechnologies = search
      ? technologiesStack.filter((technology) =>
          technology.toLowerCase().includes(search.toLowerCase())
        )
      : technologiesStack;
    setFilteredTechnologies(
      loadMoreToggled
        ? _filteredTechnologies
        : _filteredTechnologies.slice(0, 14)
    );
  }, [search, loadMoreToggled]);

  useEffect(() => {
    scrollStatus.scrollPosBefore = window.scrollY;
    scrollStatus.scrollPosAfter = window.scrollY;
    const handler = async () => {
      try {
        const response = await fetch(quotesApiUrl);
        const data = await response.json();
        setQuote(data);
      } catch {
        const data = {
          author: "Marie Curie",
          content:
            "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
        };
        setQuote(data);
      }
      setTimeout(() => {
        setIsLoading(false);
        window.onscroll = () => {
          scrollTransition.call(() => {
            scrollStatus.scrollPosAfter = window.scrollY;
            if (
              scrollStatus.scrollPosAfter < scrollStatus.scrollPosBefore &&
              scrollStatus.isNavbarHidden
            ) {
              scrollStatus.isNavbarHidden = false;
              setIsNavbarHidden(false);
            }
            if (
              scrollStatus.scrollPosAfter > scrollStatus.scrollPosBefore &&
              !scrollStatus.isNavbarHidden
            ) {
              scrollStatus.isNavbarHidden = true;
              setIsNavbarHidden(true);
            }
            scrollStatus.scrollPosBefore = window.scrollY;
          });
        };
      }, 1000);
    };
    handler();
  }, []);

  useEffect(() => {
    isJustVisitor &&
      document.querySelector("#presentation")?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
  }, [isJustVisitor]);

  return (
    <>
      {isLoading && <LoadingScreen></LoadingScreen>}
      <Navbar isNavbarHidden={isNavbarHidden} />
      <div className={styles.main}>
        <section className={styles.banner}>
          <div>
            <h1>Hi, visitor 👋🏻</h1>
            <span>
              It's a pleasure to have to here. To make of your visit a memorable
              experience, let me give you a random quote by one of the most
              iconic individuals in world's history 🌎. <b>{quote.author}:</b>{" "}
              <i>"{quote.content}"</i>
            </span>
            <br />
            <br />
            <span>So, what brings you here today to this beatiful place?</span>
            <div className={styles.buttons}>
              <Button
                color="primary"
                onClick={() => setIsJustVisitor((state) => !state)}
              >
                {isJustVisitor
                  ? "Let me start again, please 😥"
                  : "Nah, just watching... 👀"}
              </Button>
              <Button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                    inline: "nearest",
                  })
                }
              >
                I want to contact you! 💻
              </Button>
            </div>
            {isJustVisitor && (
              <div className={styles.introduction}>
                <iframe
                  id="presentation"
                  title="presentation"
                  allow="autoplay"
                  src={`https://giphy.com/embed/2KZ2v2vifTGTvGg1fu/video`}
                ></iframe>
              </div>
            )}
          </div>
        </section>
        <section className={styles.presentation}>
          <div>
            <h1>Who are you? 🧐</h1>
            <div className={styles.brief}>
              <div className={styles.profilePicture}>MOST WANTED</div>
              <span>
                Guten tag! This is <b>Alexandro Tapia</b>, aka <b>"Zpaceway"</b>{" "}
                🤓. Senior Full Stack web developer, Mechatronics Engineer,
                Content creator and Stripper from Ecuador 🇪🇨. A Python and
                Javascript lover ❤️ and distributed systems enthusiast. I love
                technology in general. I'm <b>passionate</b> about software
                development, music, languages, history, cultures and my family.
                I spend most of my free time doing what I like, which is to code
                and to build projects!
              </span>
            </div>
          </div>
          <div className={styles.technologies}>
            <div>
              <h1>Technologies 📚</h1>
              <Input
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className={styles.stack}>
              <div>
                {filteredtechnologies.map((technology) => (
                  <Button key={`technology-${technology}`}>{technology}</Button>
                ))}
                {!!filteredtechnologies.length && (
                  <Button
                    color="primary"
                    onClick={(e) => setLoadMoreToggled((state) => !state)}
                  >
                    {loadMoreToggled ? "Load less..." : "Load more..."}
                  </Button>
                )}
              </div>
              {!filteredtechnologies.length && (
                <span>
                  Sorry 💔, looks like I was not able to find such technology.
                  You can search for a different one that is related or ask me
                  directly if I know a particular technology using my contact
                  information.
                </span>
              )}
            </div>
          </div>
        </section>
        <section className={styles.about}>
          <div>
            <h1>Career path 🛸</h1>
            <div className={styles.description}>
              <span>
                This good boi 🐶 has {new Date().getFullYear() - 2014} years of
                experience working in the development industry. In that period,
                I have worked for small and big companies. Here is a brief
                introduction to all of them and a space for me to show them my
                biggest respect and gratitude 🙏🏻 for giving me the opportunity
                to collaborate with their teams, improving my technical skills
                and most importantly, teaching me highly important values such
                as responsability, commitment and teamwork 💪🏻.
              </span>
            </div>
            <div className={styles.companies}>
              {companyUrls.map((url) => (
                <div
                  key={`company-${url}`}
                  style={{
                    backgroundImage: `url("${url}")`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className={styles.contact}>
          <div>
            <h1>Contact me 📱</h1>
            <span>
              Here you will find direct access to my social networks and content
              platforms. To be honest, I don't use my email that much 😕, the
              spam filter I'm using is a bit aggresive, so your message might
              get lost. Let's try not to use it, please 😅.
            </span>
          </div>
          <div className={styles.platforms}>
            {platforms.map((platform) => (
              <Button
                key={`platform-${platform.fontIcon}`}
                onClick={() => window.open(platform.url, "blank")}
              >
                <i className={platform.fontIcon}></i>
              </Button>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
