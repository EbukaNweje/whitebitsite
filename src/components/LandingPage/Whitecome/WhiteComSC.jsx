import React from "react";
import {
  MainWhite,
  MainWhiteWraps,
  H3,
  P,
  Ul,
  Twix,
  Li,
} from "./WhiteComSC.js";

const WhiteComSC = () => {
  return (
    <MainWhite className="mainWhite">
      <MainWhiteWraps className="mainWhiteWraps">
        <H3>WhiteBIT Community</H3>
        <P>
          There is an excellent team behind WhiteBIT, and we adore communicating
          with our users! We have large communities where you can chat with
          other enthusiasts, read news from the crypto world, and be the first
          to know the WhiteBIT updates.
        </P>
        <Ul>
          <Li>
            <img src="discord-icons.svg" alt="" />
            <p>Discord</p>
          </Li>
          <Li>
            <img src="instagram.svg" alt="" />
            <p>Instagram</p>
          </Li>
          <Li>
            <img src="telegram.svg" alt="" />
            <p>Telegram</p>
          </Li>
          <Li className="Twix">
            <img src="twix-black.svg" alt="" />
            <p>Twitter</p>
          </Li>
        </Ul>
      </MainWhiteWraps>
    </MainWhite>
  );
};

export default WhiteComSC;
