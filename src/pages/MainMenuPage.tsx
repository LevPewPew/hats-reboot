import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MainMenuPageProps {
  className?: string;
}

export const MainMenuPage: React.FC<MainMenuPageProps> = ({ className }) => {
  return (
    <main className={className}>
      <h1>Hats</h1>
      <p>
        RULES PLACEHOLDER Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, accusantium impedit
        pariatur a fugiat odio illum optio nostrum recusandae ratione aliquid accusamus hic commodi earum officia
        voluptatibus quae excepturi vitae! Temporibus quas minus reprehenderit hic. Dolore omnis, consequatur, enim
        necessitatibus quasi corporis accusantium quo magni magnam perspiciatis at perferendis ducimus fugiat temporibus
        optio dicta natus est amet tempore eum? In. Tenetur sed libero eos pariatur cupiditate optio quam, nam labore.
        Quisquam tenetur cupiditate itaque dolores omnis quasi nisi veritatis, sint est deserunt, fuga sit reiciendis
        ipsum facere dolorum inventore ullam! Blanditiis minima consectetur perspiciatis, magnam architecto accusamus
        mollitia possimus qui enim, repellat et ducimus adipisci! Quidem, illum. Quas incidunt sit expedita odit
        exercitationem. Sint, quidem? Culpa autem in aperiam expedita? Dicta ipsum eveniet obcaecati aspernatur
        voluptatem non explicabo libero eius alias! Ea sapiente eius beatae rem quasi neque nemo, eligendi debitis illo,
        rerum nihil fugiat eos perferendis minus, repellendus enim! Omnis eaque ducimus tempora obcaecati tenetur
        voluptatum impedit ea, nisi corporis, numquam nostrum. Soluta ab a assumenda praesentium, perspiciatis deserunt
        iure corrupti repellat eveniet esse nostrum sint nisi, ullam quasi! Voluptate hic ipsam, aliquid eos fugit nisi
        at facilis vitae eius cum, dolor perspiciatis repudiandae blanditiis esse beatae dicta ea iure sunt quae veniam,
        provident sequi. Perspiciatis temporibus nisi repudiandae! Eaque harum doloribus nesciunt ipsam incidunt magnam.
        Fugit qui dignissimos omnis est vitae architecto corrupti, sint beatae nemo, id atque nisi perspiciatis eos
        ipsum quis inventore impedit veniam sed! Repudiandae. Esse necessitatibus eaque distinctio iste odio atque
        debitis id et inventore eligendi qui exercitationem temporibus amet, consequatur laudantium, magnam dolorem cum
        blanditiis quas, quis cumque mollitia molestias nobis ex? Ipsum? Odit facilis aperiam reprehenderit blanditiis
        aliquam? Nam vitae quisquam placeat. Quasi tenetur recusandae animi officiis, accusamus amet illo? Voluptatibus
        id culpa cupiditate vero accusantium, dolor voluptatem dolores vel exercitationem maxime?
      </p>
      <nav>
        <Link to="/setup">Start</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </main>
  );
};

export default styled(MainMenuPage)``;
