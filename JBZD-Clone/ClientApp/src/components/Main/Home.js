import { PostComponent } from './PostComponent';
import testImage from '../../../public/Images/test.PNG';

const post1 = {
          post_id: '756',
          author_id: '123',
          title: 'test',
          category: 'Główny',
          author_name: 'admin',
          comments_number: 12,
          publish_date: '123',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
          plus: 44,
          gold_badges: 1,
          silver_badges: 0,
          stone_badges: 3
      }
      const post2 = {
          post_id: '756',
          author_id: '123',
          title: 'test',
          category: 'Główny',
          author_name: 'admin',
          comments_number: 12,
          publish_date: '123',
          image: testImage,
          plus: 44,
          gold_badges: 1,
          silver_badges: 65,
          stone_badges: 3
      }


export const Home = () => {

    return (
      <main>

        <PostComponent postDetails={post1} />
        <PostComponent postDetails={post2} />

      </main>
    );
}
