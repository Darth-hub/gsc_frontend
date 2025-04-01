import React from 'react';
import Star from './Star';

const reviews = [
  {
    name: 'Ayush Ranjan',
    date: 'February 10, 2025',
    title: 'Great Experience!',
    rating: 5,
    review:
      'The Scrapman was highly skilled, ensuring precise weighing of goods without any errors. Eclyra is making my life so much easier! The overall website experience was truly fantastic!'
  },
  {
    name: 'Riya Sharma',
    date: 'March 5, 2025',
    title: 'Highly Efficient!',
    rating: 5,
    review:
      'Scheduling a pickup was super easy, and the process was seamless. Eclyra ensures transparency and fair pricing, which I really appreciate!'
  },
  {
    name: 'Kunal Mehta',
    date: 'March 15, 2025',
    title: 'Reliable & Convenient',
    rating: 4,
    review:
      'I’ve used Eclyra multiple times, and every time the service has been smooth. Just wish there were more pickup slots available during weekends.'
  },
  {
    name: 'Sneha Verma',
    date: 'March 20, 2025',
    title: 'Eco-friendly & Rewarding!',
    rating: 5,
    review:
      'Not only does Eclyra help recycle efficiently, but earning Eclyra Coins makes it even more exciting! Loving the initiative!'
  }
];

const Customer_Review_Card = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {reviews.slice(0, 4).map((review, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 h-auto max-w-[40%] w-full bg-[#272E22] p-5 rounded-md shadow-md hover:scale-105 hover:duration-150 duration-150"
        >
          <div className="flex flex-row justify-between w-full">
            <p className="text-xs">{review.name}</p>
            <p className="text-xs">{review.date}</p>
          </div>
          <div className="flex flex-row justify-between w-full">
            <h3 className="text-xl font-bold">{review.title}</h3>
            <div className="text-xs flex flex-row gap-2">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
          </div>
          <div className="text-sm">{review.review}</div>
        </div>
      ))}
    </div>
  );
};

export default Customer_Review_Card;
