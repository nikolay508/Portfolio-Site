import ScrollingTestimonials from "./ScrollingTestimonials";
import { commentsData } from "./CommentData";

export default function YoutubeGrid() {
  return (
    <div id="reviews" className="relative min-h-[70vh] sm:min-h-screen">
      <ScrollingTestimonials testimonials={commentsData} />
    </div>
  );
}
