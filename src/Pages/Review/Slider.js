import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const reviews = [
  {
    id: 1,
    title: "Exceptional Results",
    clientName: "John Smith",
    designation: "CEO",
    feedback:
      "The Next.js project exceeded our expectations! As a team expertise in building responsive UIs and optimizing performance made our application stand out. She were responsive, delivered on time, and provided excellent support. Highly recommend her Next.js development services. 🚀",
    url: "https://i.ibb.co/BKJBBbt/1.jpg",
  },
  {
    id: 2,
    title: "Game-Changing Experience",
    clientName: "Emily Johnson",
    designation: "CTO",
    feedback:
      "Working with the team on our React project was a game-changer! She delivered a sleek and intuitive user interface that enhanced our user experience. Her attention to detail, clean code, and seamless integration with APIs made the project a success. We're thrilled with the results! 👏",
    url: "https://i.ibb.co/xFLg9Sq/2.jpg",
  },
  {
    id: 3,
    title: "Smooth and Satisfying",
    clientName: "Mark Davis",
    designation: "Product Manager",
    feedback:
      "The React project developed by Jharna Khatun! She skillfully transformed our ideas into a feature-rich application. Her proficiency in React, efficient project management, and prompt communication ensured a smooth development process. We're extremely satisfied with the outcome! 💯",
    url: "https://i.ibb.co/9TKZ3kN/3.jpg",
  },
];
export default function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper "
      >
        {reviews.map((review) => {
          return (
            <SwiperSlide key={review.id}>
              <article className="flex flex-col items-start justify-between py-5">
                <div className="group relative ">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {review.title}
                  </h3>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill="currentColor"
                    className="bi bi-quote text-[#f33bea]"
                    viewBox="0 0 16 16"
                  >
                    {" "}
                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />{" "}
                  </svg>
                  <p className="line-clamp-3 text-md leading-6 text-gray-600">
                    {review.feedback}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={review.url}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href="/">
                        <span className="absolute inset-0" />
                        {review.clientName}
                      </a>
                    </p>
                    <p className="text-gray-600">{review.designation}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
