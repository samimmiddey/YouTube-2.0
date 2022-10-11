import React from 'react';
import { useRouter } from 'next/router';
import HomeFeed from '../src/components/HomeFeed/HomeFeed';

const CategoryPage = () => {
   const router = useRouter();
   const { categoryID } = router.query;

   return (
      <HomeFeed category={categoryID} />
   );
};

export default CategoryPage;