interface HeroImageProps {
  backgroundImage?: string;
  overlayColor?: string;
  children?: React.ReactNode;
}

// have to use inline style for backgroundImage & overlayColor since tailwind doesn't support dynamic values
// https://stackoverflow.com/questions/70805041/background-image-in-tailwindcss-using-dynamic-url-react-js
export const HeroImage = ({
  backgroundImage,
  overlayColor,
  children,
}: HeroImageProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`flex h-screen w-screen bg-cover bg-no-repeat bg-center`}
    >
      <div
        style={{
          backgroundColor: `${
            overlayColor ? overlayColor : "rgba(0, 0, 0, 0.65)"
          }`,
        }}
        className={`absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed`}
      >
        <div className="flex h-full items-center justify-center">
          <div className="px-6 text-center text-white md:px-12">{children}</div>
        </div>
      </div>
    </div>
  );
};
