import HomeFeed from "../src/components/HomeFeed/HomeFeed";
import { useReactContext } from "../src/context/ContextProvider";

const HomePage = () => {
   const { tag } = useReactContext();

   const category = !tag || tag === 'All' ? 'New' : tag;

   return (
      <HomeFeed category={category} />
   );
};

export default HomePage;
