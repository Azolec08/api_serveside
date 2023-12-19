const About = () => {
  return (
    <div className=" flex items-center justify-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/wallpaper.jpg"
            className="w-48 h-60 rounded-lg shadow-2xl 
            md:w-96 md:h-64
            "
          />
          <div>
            <h1 className="text-4xl font-bold text-center">About Anime</h1>
            <p className="py-6 text-justify">
              This app is tailored to offer anime recommendations by analyzing
              your personal ratings on AniList. By eliminating the need to
              depend on others' preferences, it can suggest underrated and
              underwatched anime that align with your taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
