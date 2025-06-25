
import React from 'react';

const ExtratSection = () => {
    return (
        <div>
            


            <section className="mb-24 w-11/12 mx-auto">
  <h1 className="text-center eb text-4xl font-bold mb-6">The Legal Practice Area</h1>
  <div className="text-center mb-6">
    <p className="text-center text-gray-400">
      There are many variations of passages of Lorem Ipsum available, but the majority have
    </p>
    <span className="text-center text-gray-400">
      suffered alteration in some form, by injected humour.
    </span>
  </div>

  <div className="ca-container grid grid-cols-1 gap-6 md:gap-0 lg:gap-0 md:grid-cols-2 lg:grid-cols-3 mt-20">
    {[
      { img: 'business.png', title: 'Business Law' },
      { img: 'criminal.png', title: 'Criminal Law' },
      { img: 'child.png', title: 'Child Support' },
      { img: 'education.png', title: 'Education Law' },
      { img: 'divorce.png', title: 'Divorce Law' },
      { img: 'tax.png', title: 'Tax Law' },
    ].map((item, index) => (
      <div
        key={index}
        className={`flex flex-col items-center justify-center gap-8 border py-14 rounded-xl md:rounded-none lg:rounded-none ${
          index === 0 ? 'lg:border-b md:border-r md:border-l-white md:border-t-white' : ''
        } ${
          index === 1
            ? 'md:border-b lg:border-t lg:border-r md:border-t-white md:border-r-white md:border-l-white'
            : ''
        } ${
          index === 2
            ? 'md:border-0 lg:border-b md:border-r md:border-b lg:border-r-0 md:border-t-0 lg:border-l'
            : ''
        } ${
          index === 3 ? 'md:border-0 md:border-b lg:border-b-0' : ''
        } ${
          index === 4 ? 'md:border-0 md:border-r lg:border lg:border-t-white lg:border-b-white' : ''
        } ${
          index === 5 ? 'md:border-0' : ''
        }`}
      >
        <img src={`images/${item.img}`} alt={item.title} />
        <h1 className="eb font-bold text-[32px]">{item.title}</h1>
        <p className="max-w-[258px] text-center text-gray-400">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
        </p>
        <img src="images/Frame.png" alt="Frame Icon" />
      </div>
    ))}
  </div>
</section>













        </div>
    );
};

export default ExtratSection;