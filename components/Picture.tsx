import Image4 from '../public/image4.jpg';

const Picture = () => {
  return (
    <div className="w-full bg-primary min-h-[90vh] items-center flex justify-center py-10 px-12">
      <img src={Image4.src} alt="image" className="w-full rounded-2xl m-4" />
    </div>
  );
};

export default Picture;
