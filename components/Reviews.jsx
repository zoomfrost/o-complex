"use client";
import xss from "xss";

const Reviews = ({ reviews }) => {
  return (
    <section className="flex flex-col md:flex-row  gap-4 md:gap-8 justify-center w-fit mx-auto">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="bg-transparent py-5 px-7 rounded-xl flex-1 max-w-[468px]"
            dangerouslySetInnerHTML={{
              __html: xss(review.text),
            }}
          ></div>
        );
      })}
    </section>
  );
};

export default Reviews;
