import React from 'react';
import Link from 'next/link';

export default function HomeBanner() {
  return (
    <div className="p-5">
      
      <div className="d-flex align-items-center justify-content-center mt-3 mb-5">
        <Link href="/about">
          <a className="d-flex py-3 align-items-center font-color-purple borderbottom border-color-black">
            <button>Push Me</button>
          </a>
        </Link>
      </div>
    </div>
  );
}
