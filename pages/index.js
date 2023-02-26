import Link from 'next/Link'
export default function Home() {
  return (
    <div>
      <h1>  this is home page</h1>
      <Link href='/blog'>return blog page</Link>
    </div>

  )
}
