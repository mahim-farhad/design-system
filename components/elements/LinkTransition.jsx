import Link from "next/link";

import { useRouter } from "next/navigation";

function LinkTransition(props) {
  const router = useRouter();

  const handleClick = (e) => {
    if (!document.startViewTransition) {
      return;
    } else {
      // browser supports view transition. Animate the transtion.
      e.preventDefault();

      document.startViewTransition(() => {
        router.push(props.href);
      });
    }
  };

  return (
    <Link
      onClick={handleClick}
      {...props}
    >
      {props.children}
    </Link>
  );
}

export default LinkTransition;
