const About = () => {
  return (
    <section className="border-b-4 border-black bg-main-purple">
      <h2 className="py-3 pl-4 border-b-4 border-black text-6xl font-extrabold uppercase">
        About
      </h2>
      <div className="grid md:grid-cols-2 text-3xl">
        <div className="py-6 px-4 border-b-4 border-black md:border-b-0 md:border-r-4">
          <p>
            Hi! I am Hafez Fahmi,
            <br />a Full-Stack JavaScript
            <br /> Developer.
          </p>
          <br />
          <p>
            I enjoy playing around with <br />
            technologies to create <br />
            solutions that have an <br />
            impact on the user.
          </p>
        </div>
        <div className="py-6 px-4">
          <p>What I&apos;ve worked with:</p>
        </div>
      </div>
    </section>
  );
};

export default About;
