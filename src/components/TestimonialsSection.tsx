
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "Porter made my house shifting so easy. The drivers were professional and helped with loading and unloading.",
      author: "Rahul Sharma",
      role: "Customer",
      rating: 5
    },
    {
      id: 2,
      content: "I use Porter regularly for my business deliveries. Their bikes are always on time and reliable.",
      author: "Priya Patel",
      role: "Business Owner",
      rating: 5
    },
    {
      id: 3,
      content: "Outstanding service! The app is very user-friendly and the customer support team is extremely helpful.",
      author: "Vikram Singh",
      role: "Customer",
      rating: 4
    }
  ];

  return (
    <section id="how-it-works" className="py-12 bg-porter-lightGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-porter-red font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-porter-black sm:text-4xl">
            What our customers say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-porter-gray lg:mx-auto">
            Thousands of customers trust Porter for their logistics needs
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
              <div className="px-6 py-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 text-base">{testimonial.content}</p>
                <div className="mt-4">
                  <p className="text-gray-900 font-medium">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
