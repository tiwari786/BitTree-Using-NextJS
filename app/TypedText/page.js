'use client';

import { ReactTyped } from 'react-typed';

export default function TypedText() {
  return (
    <div className="text-3xl text-[#2665d6] flex justify-center font-bold">
      <ReactTyped
        strings={[
          'creators',
          'influencers',
          'small businesses',
          'athletes',
          'models',
          'monetizers',
          'streamers',
          'vloggers',
          'fitness coaches',
          'ecommerce sellers',
          'retailers',
          'products',
          'wellness leaders',
          'musicians',
          'bands',
          'podcasters',
          'fashion designers',
          'culture creators',
          'merch sellers',
          'writers',
          'DJs',
        ]}
        typeSpeed={50}
        backSpeed={30}
        loop
      />
    </div>
  );
}
