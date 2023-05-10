import React from "react";
interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    lableText?: string;
    error?: string;
    children?: React.ReactNode;
  }

  const TextBox = React.forwardRef<HTMLInputElement, IProps>(
    ({ className, children, lableText, type = "text", error, ...props }, ref) => {
      return (
        <div className={'flex flex-col text-gray-600'}>
            {lableText && (
                <label 
                htmlFor="txt" 
                >{lableText}</label>
            )}

<input
            autoComplete="off"
            className={`h-11  border border-slate-300 disabled:border-slate-100
              ${error && "border-red-500 border  animate-shake"} ${
              children ? "rounded-r-md" : "rounded-md"
            }`}
            {...props}
            ref={ref}
            type={type}
          >

          </input>

          <div className="flex">{children}</div>
     
        {error && (
          <p className="text-red-600 text-right animate-shake">{error}</p>
        )}
        </div>
    );
  },
);

  TextBox.displayName = "TextBox"
  export default TextBox;

