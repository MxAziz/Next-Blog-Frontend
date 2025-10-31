import { Metadata } from "next";

export const metadata : Metadata = {
  title: 'About | Next Blog',
  description: 'Learn more about the next blog platform'
}

const AboutPage = () => {
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-gray-700 text-center">
        💤 The developer is sleeping now. Check back later!
      </h1>
    </div>
  );
};

export default AboutPage;
