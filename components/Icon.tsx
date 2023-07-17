import Image from 'next/image'

export const Icon = (
  { alt, className, fit, size, src }:
  {
    alt:string,
    className?:string,
    fit:'cover'|'contain',
    size:string,
    src:string,
  }
) => {
  const c = ['relative', className].filter(Boolean).join(' ');
  return (
    <div className={c} style={{ height: size, width: size }}>
      <Image alt={alt} src={src} fill sizes={size} style={{ objectFit: fit }} />
    </div>
  );
};
