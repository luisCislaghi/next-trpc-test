import Image from 'next/image';

const Logo: React.FC = () => {
  const wrapperStyle: React.CSSProperties = {
    display: 'flex',
    padding: 12,
    minHeight: 64,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={wrapperStyle}>
      <Image src="" alt="logo" width={190} height={38} />
    </div>
  );
};

export default Logo;
