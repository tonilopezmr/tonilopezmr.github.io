import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-zinc-800 font-semibold text-yellow-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-yellow-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-yellow-100/70',
  secondary:
    'bg-zinc-50 font-medium text-yellow-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-yellow-900/60 dark:bg-zinc-800/50 dark:text-yellow-300 dark:hover:bg-zinc-800 dark:hover:text-yellow-50 dark:active:bg-zinc-800/50 dark:active:text-yellow-50/70',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}
