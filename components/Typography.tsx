interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1 = ({ children, className }: TypographyProps) => {
  return (
    <h1
      className={`text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl ${className}`}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: TypographyProps) => {
  return (
    <h2
      className={`text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl ${className}`}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: TypographyProps) => {
  return (
    <h3
      className={`text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl ${className}`}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className }: TypographyProps) => {
  return (
    <h4
      className={`text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl ${className}`}
    >
      {children}
    </h4>
  );
};

export const H5 = ({ children, className }: TypographyProps) => {
  return (
    <h5
      className={`text-xl font-bold tracking-tight md:text-2xl xl:text-3xl ${className}`}
    >
      {children}
    </h5>
  );
};

export const H6 = ({ children, className }: TypographyProps) => {
  return (
    <h6
      className={`text-lg font-bold tracking-tight md:text-xl xl:text-2xl ${className}`}
    >
      {children}
    </h6>
  );
};

export const PLarge = ({ children, className }: TypographyProps) => {
  return (
    <p className={`text-lg tracking-tight md:text-xl xl:text-2xl ${className}`}>
      {children}
    </p>
  );
};

export const P = ({ children, className }: TypographyProps) => {
  return (
    <p
      className={`text-base tracking-tight md:text-lg xl:text-xl ${className}`}
    >
      {children}
    </p>
  );
};
