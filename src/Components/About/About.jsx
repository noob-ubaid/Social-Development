import React from "react";

const About = () => {
  return (
    <div className=" px-6 py-12 text-gray-800 dark:text-gray-100">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#AD49E1] mb-4">
          About Jovent
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A simple, impactful platform for discovering, creating, and joining
          local social service events.
        </p>
      </div>

      {/* When & Why */}
      <div className="mb-10">
        <p className="text-base leading-relaxed">
          Welcome to <span className="font-bold">Jovent</span>! This platform empowers individuals and communities
          to take action through meaningful local activities, from tree
          plantation drives to community cleanups. Whether you’re a passionate
          volunteer eager to make a difference or someone looking to contribute
          for the first time, Jovent is the perfect place to connect, organize,
          and inspire positive change.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🎯 The story behind Jovent
        </h2>
        <p className="text-base leading-relaxed">
          The idea for Jovent was born from the need to make community service
          more organized and accessible. Many people want to contribute to
          society but struggle to find, join, or manage events in their local
          area. At the same time, organizers often face challenges in reaching
          volunteers and managing participation effectively. Seeing this gap, we
          created a platform where anyone can easily discover upcoming social
          service events, join causes they care about, and even create their own
          initiatives to serve the community. What started as a simple idea to
          help people contribute locally has grown into a platform that fosters
          active citizenship and strengthens communities.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🎯 Our Vision</h2>
        <p className="text-base leading-relaxed">
          At Jovent, our vision is to build a connected, socially responsible
          community where people actively participate in positive change. We
          believe that small, local actions can collectively make a significant
          impact. By providing a user-friendly platform for discovering,
          creating, and managing community service events, we aim to inspire
          individuals to contribute to society, build leadership skills, and
          foster a culture of service that brings people together for a better
          tomorrow.
        </p>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🎯 Our mission</h2>
        <p className="text-base leading-relaxed">
          People use Jovent because it makes participating in social service
          initiatives easy, organized, and impactful. Whether it’s joining a
          local cleanup drive or creating a new community event, users can
          easily track, manage, and participate in activities that matter to
          them. The platform offers a seamless experience with clear event
          details, search and filter options, and personalized participation
          tracking, ensuring users stay engaged in causes they care about. By
          fostering a space for individuals to take action and collaborate,
          Jovent helps build stronger, more connected communities.
        </p>
      </div>

      {/* Why People Use It */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          🙋 Why do people use it?
        </h2>
        <p className="text-base leading-relaxed">
          People use the Recipe Book App because it makes cooking simple,
          enjoyable, and accessible for everyone. The app is especially helpful
          for beginners, offering easy-to-follow recipes with step-by-step
          instructions, clear ingredient lists, cooking times, and visual
          guidance. Even someone who has never cooked before can confidently
          prepare a meal using our app. One of the key reasons users love Recipe
          Book is the ability to share their own recipes with others. Whether
          it's a traditional family dish or a personal creation, users can
          quickly upload and showcase their recipes to the community. The app
          also features powerful search and filter options, allowing users to
          find recipes based on category, cooking time, difficulty level,
          dietary preferences, or specific ingredients.
        </p>
      </div>
    </div>
  );
};

export default About;
