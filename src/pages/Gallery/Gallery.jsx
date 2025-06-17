import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    title: "Road Cleaning - Mirpur 10",
    src: "https://images.unsplash.com/photo-1648662594772-786f95b9e58b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9hZCUyMGNsZWFuaW5nfGVufDB8fDB8fHww",
    category: "Cleanup",
  },
  {
    id: 2,
    title: "Tree Plantation - Hossainpur",
    src: "https://media.istockphoto.com/id/2164280232/photo/young-woman-planting-tree-seedling-in-dug-hole-on-sunlit-ground.webp?a=1&b=1&s=612x612&w=0&k=20&c=Xy8y2c1hsvSbVQcjQrnkR3M9-9aVwuQoqYU1m2Jc7jg=",
    category: "Plantation",
  },
  {
    id: 3,
    title: "Donation Drive - Gazipur",
    src: "https://plus.unsplash.com/premium_photo-1683134050449-080429c850a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D",
    category: "Donation",
  },
  {
    id: 4,
    title: "Beach Cleanup - Cox’s Bazar",
    src: "https://media.istockphoto.com/id/1439954031/photo/boy-and-father-wearing-gloves-collecting-bottles.webp?a=1&b=1&s=612x612&w=0&k=20&c=LQhjdLeggCPG7Ymdu1S0QnAMLHQ9jJKgbA8NK4QIlpU=",
    category: "Cleanup",
  },
  {
    id: 5,
    title: "Donation - Rajshahi",
    src: "https://images.unsplash.com/photo-1593113630400-ea4288922497?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D",
    category: "Donation",
  },
  {
    id: 6,
    title: "Community Garden - Barisal",
    src: "https://media.istockphoto.com/id/2168104632/photo/two-diverse-activists-working-together-to-plant-more-trees-and-greenery.webp?a=1&b=1&s=612x612&w=0&k=20&c=JlndnYXi4z7AmzV5DJEF4OAKcHruHO7qU6uEE9Dvdic=",
    category: "Plantation",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const GallerySection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 rounded-md mt-14 md:mt-24 py-16 px-4" id="gallery">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          🌱 Community Event Gallery
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }} className="text-gray-600 dark:text-gray-300 mb-12">
          Snapshots of real impact from our local social service initiatives
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {galleryImages.map(({ id, title, src, category }) => (
            <motion.div
              variants={cardVariants}
              key={id}
              className="relative group overflow-hidden rounded-xl shadow-lg break-inside-avoid"
            >
              <img
                src={src}
                alt={title}
                className="w-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex  justify-center items-center text-center p-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {title}
                  </h3>
                  <span className="text-sm md:text-base bg-black px-6 py-2.5 rounded-full mt-4 italic text-gray-200">
                    {category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
