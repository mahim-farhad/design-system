import clsx from 'clsx';

import { twMerge } from 'tailwind-merge';

function cn(...props) {
  return twMerge(clsx(props));
}

export default cn;
