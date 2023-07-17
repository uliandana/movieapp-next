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
  const h = `h-[${size}]`;
  const w = `w-[${size}]`;
  const c = [h, w, 'relative', className].filter(Boolean).join(' ');
  return (
    <div className={c}>
      <Image alt={alt} src={src} fill sizes={size} style={{ objectFit: fit }} />
    </div>
  );
};
