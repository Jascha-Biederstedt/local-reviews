import prisma from 'lib/prisma';
import { getItem } from 'lib/data.js';

export const getServerSideProps = async ({ params }) => {
  const item = await getItem(prisma, parseInt(params.id));

  return {
    props: {
      item,
    },
  };
};

const Item = ({ item }) => {
  return (
    <div className='text-center'>
      <h1 className='mt-10 font-extrabold text-2xl'>{item.name}</h1>
      <h2 className='mt-10 font-bold'>{item.description}</h2>
      {item.rating !== 0 && (
        <h2 className='mt-10 font-bold'>
          Rating: {item.rating / 10} / 5{' '}
          {[...Array(Math.round(item.rating / 10))].map(() => '⭐️ ')}
        </h2>
      )}
    </div>
  );
};

export default Item;
