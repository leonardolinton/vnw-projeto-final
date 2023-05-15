import React from "react";
import * as S from "../styles/HeaderStyle";
import logo from "../assets/logo.png";
import star from "../assets/icon-star.svg";
import logoIMDB from "../assets/IMDB_logo.png";
import filmRoll from "../assets/film_roll_icon.png"
import play from "../assets/play_icon.png";
 
const Header = () => {
  return (
    <S.Header>
      <S.Menu>
        <S.Logo>
          <img src={logo} alt="Logo DELL Movies" />
        </S.Logo>
        <S.Opcoes>
          <button>Séries</button>
          <button>Filmes</button>
        </S.Opcoes>
      </S.Menu>
      <S.Banner>
        <S.InfoMovie>
          <h1>Avatar: o Caminho da Água</h1>
          <span>3hr 23 min | Fantasia, Família | 2023</span>
          <div>
            <S.Nota>
              <img
                src={star}
                alt="Nota do filme no IMDB"
                width={25}
                height={25}
              />
              <p>
                9,9<span>/10</span>
              </p>
              <img src={logoIMDB} alt="" width={40} height={20} />
            </S.Nota>
          </div>
          <p>
            Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
            ficarem juntos. No entanto, eles devem sair de casa e explorar as
            regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
            travar uma guerra difícil contra os humanos.
          </p>
          <S.Buttons>
            <S.ButtonPlay>
              <a href="">
                <img src={play} alt="" width={15} height={15}/>
                Assistir agora
              </a>
            </S.ButtonPlay>
            <S.ButtonTrailer>
              <a href="">
                <img src={filmRoll} alt="" width={15} height={15}/>
                Trailer
              </a>
            </S.ButtonTrailer>
          </S.Buttons>
        </S.InfoMovie>
      </S.Banner>
    </S.Header>
  );
};

export default Header;
