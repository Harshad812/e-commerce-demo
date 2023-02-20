import React from "react";

export const LockIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 10.4298V7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V10.4298M16 10.4298C14.9876 10.1268 13.6753 10 12 10C10.3247 10 9.01243 10.1268 8 10.4298M16 10.4298C18.2226 11.0952 19 12.6104 19 15.5C19 19.7059 17.3529 21 12 21C6.64706 21 5 19.7059 5 15.5C5 12.6104 5.77744 11.0952 8 10.4298"
        stroke="#000000"
      />
    </svg>
  );
};
