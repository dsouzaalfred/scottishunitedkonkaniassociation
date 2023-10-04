interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

// using type since we want to extend from two interfaces
// https://stackoverflow.com/questions/49723173/merge-two-interfaces
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & TypographyProps;

type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> &
  TypographyProps;

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  TypographyProps;

export const H1 = ({ children, className, ...restProps }: HeadingProps) => {
  return (
    <h1
      className={`text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl ${className}`}
      {...restProps}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ children, className, ...restProps }: HeadingProps) => {
  return (
    <h2
      className={`text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl ${className}`}
      {...restProps}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ children, className, ...restProps }: HeadingProps) => {
  return (
    <h3
      className={`text-3xl font-bold tracking-tight md:text-4xl xl:text-5xl ${className}`}
      {...restProps}
    >
      {children}
    </h3>
  );
};

export const H4 = ({ children, className, ...restProps }: HeadingProps) => {
  return (
    <h4
      className={`text-2xl font-bold tracking-tight md:text-3xl xl:text-4xl ${className}`}
      {...restProps}
    >
      {children}
    </h4>
  );
};

export const H5 = ({ children, className, ...restProps }: HeadingProps) => {
  return (
    <h5
      className={`text-xl font-bold tracking-tight md:text-2xl xl:text-3xl ${className}`}
      {...restProps}
    >
      {children}
    </h5>
  );
};

export const H6 = ({ children, className, ...restProps }: HeadingProps) => {
  return (
    <h6
      className={`text-lg font-bold tracking-tight md:text-xl xl:text-2xl ${className}`}
      {...restProps}
    >
      {children}
    </h6>
  );
};

export const PLarge = ({
  children,
  className,
  ...restProps
}: ParagraphProps) => {
  return (
    <p
      className={`text-lg tracking-tight md:text-xl xl:text-2xl ${className}`}
      {...restProps}
    >
      {children}
    </p>
  );
};

export const P = ({ children, className, ...restProps }: ParagraphProps) => {
  return (
    <p
      className={`text-base tracking-tight md:text-lg xl:text-xl ${className}`}
      {...restProps}
    >
      {children}
    </p>
  );
};

export const Link = ({ children, className, ...restProps }: LinkProps) => {
  return (
    <a
      className={`text-base font-medium text-blue-600 dark:text-blue-500 hover:underline ${className}`}
      {...restProps}
    >
      {children}
    </a>
  );
};
