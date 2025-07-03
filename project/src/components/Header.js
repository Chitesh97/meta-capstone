

export default function Header() {
  return(
    <header>
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Little Lemon logo" />
    </header>
  )
}