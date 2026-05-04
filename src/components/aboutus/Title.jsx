import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Title = ({
  pageTitle,
  sub,
  bgImage,
  bgColor = "#0f172a",
  overlay = true,
}) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const [loaded, setLoaded] = useState(false);

  // 🔥 preload background image
  useEffect(() => {
    if (!bgImage) return;

    const img = new Image();
    img.src = bgImage;
    img.onload = () => setLoaded(true);
  }, [bgImage]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-white overflow-hidden">
      
      {/* BACKGROUND */}
      {bgImage ? (
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: loaded ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: bgColor }}
        />
      )}

      {/* OVERLAY */}
      {overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="relative z-10 text-center px-4"
      >
        {/* TITLE */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6 },
            },
          }}
          className="text-white text-heading mb-[1.2rem] font-[800]"
          style={{
              fontSize: "clamp(2.5rem, 5.2vw, 4rem)",
              lineHeight: 1.08,
            }}
        >
          {pageTitle}
        </motion.h1>

        {/* SUB */}
        {sub && (
          <motion.p
             initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}
              

              className="text-body text-dark-500 font-[700] uppercase"
          >
            {sub}
          </motion.p>
        )}

        {/* BREADCRUMB */}
        {/* <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 },
            },
          }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm"
        >
          <Link to="/" className="hover:underline">
            Home
          </Link>

          {paths.map((path, index) => {
            const routeTo = "/" + paths.slice(0, index + 1).join("/");

            return (
              <span
                key={index}
                className="flex text-accent items-center gap-2"
              >
                <span>/</span>
                <Link
                  to={routeTo}
                  className="capitalize font-semibold hover:underline"
                >
                  {path.replace("-", " ")}
                </Link>
              </span>
            );
          })}
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Title;