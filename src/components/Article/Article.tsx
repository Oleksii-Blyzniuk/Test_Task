import { Link, useParams} from 'react-router-dom';
import './Article.scss';
import { Infos } from '../../types/Infos';

type InfoType = {
  articles: Infos[];
};

export const Article: React.FC<InfoType> = ({ articles = [] }) => {
  const { articleId } = useParams();
  const visibleArticle = articles.find(article => String(article.id) === articleId);

  return (
    <div className="more-info">
      <img
        src={visibleArticle?.imageUrl}
        alt="info"
        className="MoreInfo__image"
      />
      <div className="MoreInfo__container">
        <span className="MoreInfo__title">{visibleArticle?.title}</span>

        <span className="MoreInfo__description">
          {visibleArticle?.summary}
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Officia asperiores facilis quisquam! Quisquam error libero qui perferendis vitae sit ab.
          Fugit earum ipsam maxime consequatur nesciunt neque iusto nostrum at voluptatibus, cum doloribus ipsa unde accusantium rerum quos. Molestiae reprehenderit nam illo illum quod enim eum temporibus totam facilis. Unde veritatis totam eius labore laudantium tempore facere,
          adipisci ad excepturi odit saepe sit ut ea deserunt voluptates ab atque id velit magni deleniti commodi repudiandae iste corporis esse.
          Quis facere nemo explicabo delectus beatae. Architecto consequuntur repudiandae incidunt nobis perspiciatis facilis nisi nulla, alias nemo tenetur, saepe quaerat fuga voluptate?
          <br />
          <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptas recusandae quod veniam. Quis culpa ea nihil pariatur, qui architecto iure impedit dignissimos quos,
          consequuntur deserunt harum repudiandae consectetur mollitia dolores nesciunt? Reprehenderit molestiae vitae ipsum asperiores sed cum, officia autem
          sit a aliquid repellat modi commodi, architecto voluptate ea in voluptas! Libero illum ea, veniam explicabo perspiciatis magni vel officia modi ratione, atque laborum incidunt quas tempora illo itaque ut quia consequatur. Quibusdam aperiam, rem consequuntur eius,
          quasi voluptatum officiis, dicta et aspernatur magnam aut repellendus nesciunt cumque. At laborum sit praesentium aperiam expedita molestiae recusandae labore sapiente? Ullam, in.
        </span>
      </div>

      <Link to={'/'} className="MoreInfo__more">Back to homepage</Link>
    </div>
  )
}