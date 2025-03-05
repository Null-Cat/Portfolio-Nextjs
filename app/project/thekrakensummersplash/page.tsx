import KrakenGame from "@/app/components/KrakenGame";
import { JavaScriptSVG, NodejsSVG } from "@/app/components/SVGs";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Image, Link, Spacer } from "@heroui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | The Kraken Summer Splash",
  description:
    'A commissioned project for Kraken Rum for a competition to win a branded arcade machine hosted on the "The League of Darkness" site. Has a fully functional leaderboard with secure score transmission to a secured API backend.',
  openGraph: {
    type: "website",
    url: "https://philipwhite.dev/thekrakensummersplash",
    title: "Project | The Kraken Summer Splash",
    description:
      'A commissioned project for Kraken Rum for a competition to win a branded arcade machine hosted on the "The League of Darkness" site. Has a fully functional leaderboard with secure score transmission to a secured API backend.',
    images: [
      {
        url: "https://philipwhite.dev/kraken/title.png",
        alt: "Project | The Kraken Summer Splash",
      },
    ],
  },
};

const TheKrakenSummerSplashProject = () => {
  return (
    <>
      <h1 className="flex justify-center sm:text-5xl text-4xl text-center pt-20 pb-4">
        The Kraken Summer Splash
      </h1>

      <KrakenGame />

      <div className="flex sm:justify-center flex-wrap gap-8 p-4">
        <div>
          <h2 className="sm:text-4xl text-3xl sm:text-right">
            Project Features
          </h2>
          <div className="flex flex-wrap justify-end gap-1 py-3">
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"primary"}
              startContent={<p>🔫</p>}
            >
              Phaser 3
            </Chip>
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"primary"}
              startContent={<NodejsSVG />}
            >
              Node.js
            </Chip>
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"secondary"}
              startContent={<JavaScriptSVG />}
            >
              JavaScript
            </Chip>
            <Chip
              size="sm"
              radius="sm"
              variant="shadow"
              className="flex gap-1"
              color={"default"}
              startContent={<p>🌐</p>}
            >
              Web
            </Chip>
          </div>
          <ul className="sm:text-right">
            <li>2D Obstacle Course</li>
            <li>Difficulty Scaling</li>
            <li>Leaderboard</li>
            <li>Bonus Items</li>
            <li>Cheat Detection</li>
            <li>Secured API</li>
            <li>Obfuscation</li>
          </ul>
        </div>
        <div>
          <h2 className="sm:text-4xl text-3xl">Description</h2>
          <p className="max-w-prose">
            <br />
            Player 1. Are you ready? Fancy snaring a genuine one-off Kraken
            Freaky Tiki Summer Splash arcade cab with over 13,000 games,
            widescreen and unbelievable stereo sound?
            <br />
            <br />A commissioned project for Kraken Rum for a competition to win
            a branded arcade machine hosted on the &quot;The League of
            Darkness&quot; site. Has a fully functional leaderboard with secure
            score transmission to a secured API backend.
            <br />
            <br />
          </p>
          <Link
            isExternal
            showAnchorIcon
            underline="always"
            href="https://www.theleagueofdarkness.co.uk/the-krakens-summer-splash"
          >
            Hosted here: &quot;The League of Darkness&quot; site.
          </Link>
          <p className="italic">*Login Required</p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          isExternal
          showAnchorIcon
          underline="always"
          href="https://github.com/Null-Cat/TheKrakenSummerSplash"
        >
          <FontAwesomeIcon icon={faGithub} /> <Spacer />
          Game Project Files
        </Link>
      </div>

      <div className="flex flex-col items-center py-8">
        <h2 className="sm:text-4xl text-3xl">My Contributions</h2>
      </div>
      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">Gameplay</h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          The game play simulates a branded theme of Flappy Bird with a Kraken
          Rum twist. The player has to navigate through a series of obstacles
          aka the krakens tentacles ramping up in difficulty as you progress
          through the game capped at a certain speed to give players the ability
          to get a higher score based on skill rather than random number
          generation. The game also has a series of bonus items that the player
          can collect to increase their score by risking their lives to get
          them.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/kraken/KrakenSnippet4.png"
          alt="Gameplay Snippet"
        />
        <Image
          className="w-full"
          src="/kraken/KrakenSnippet3.png"
          alt="Gameplay Snippet"
        />
        <Image
          className="w-full"
          src="/kraken/KrakenSnippet5.png"
          alt="Gameplay Snippet"
        />
        <Image
          className="w-full"
          src="/kraken/player.png"
          alt="Gameplay Snippet"
        />
      </div>

      <div className="flex flex-col items-center pt-2">
        <h2 className="sm:text-3xl text-2xl font-bold">
          Securing Scores & Retrieving/Sending API Data
        </h2>
      </div>
      <div className="flex justify-center pt-2">
        <p className="max-w-prose text-center">
          As the game was hosted on a public facing website and that there is a
          high value reward for getting the top scores in this game, I had to
          ensure that the scores were not manipulated in any way during the
          competition however due to the nature of public facing websites all
          scripts are publicly available so I had to use multiple methodologies
          to slow any perpetrators down before the competition ends.
          <br />
          <br />
          I did this by using a combination of obfuscation and encryption
          techniques to ensure that the scores were secure at the time of the
          competition. One of the techniques that was implemented was done by
          storing the scores in multiple variables obfuscating the names and
          functions that check the scores as you pass through each tunnel. I
          also used a obfuscating tool called &quot;Javascript Obfuscator&quot;
          to obfuscate the code further by including the whole game script. I
          also used a encryption technique using AES-128-CBC to encrypt the
          payload set by Kraken Rum&apos;s hosts of the game, this was done by
          using a encryption key and salt that was provided by the hosts and
          encrypting the scores then sending the encrypted scores to the API
          endpoint provided, in the form of a POST request as stated by the API
          documentation.
          <br />
          <br />
          As I had no access to the API endpoint all cheat detection was done on
          the client side, this was done by checking if the add score function
          was triggered as long as the player is in the collision box and
          triggered once per collision. If the function was triggered more than
          once per collision then the player was flagged as a cheater and the
          score was not sent to the API. Another cheat detection was done by
          comparing the score value to the string value of the UI score and if
          they did not match then the player was flagged as a cheater and the
          score was not sent to the API.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 py-8 px-4">
        <Image
          className="w-full"
          src="/kraken/KrakenSnippet0.png"
          alt="Kraken Snippet"
        />
        <Image
          className="w-full"
          src="/kraken/KrakenSnippet1.png"
          alt="Kraken Snippet"
        />
        <Image
          className="w-full"
          src="/kraken/KrakenSnippet2.png"
          alt="Kraken Snippet"
        />
      </div>
    </>
  );
};

export default TheKrakenSummerSplashProject;
