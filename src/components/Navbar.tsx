import Avatar from "./Avatar"

export default function Navbar() {
  return (
    <div className="bg-white/1 z-5 flex items-center backdrop-blur-2xl px-2 py-2 h-16  fixed top-0 inset-x-0">
      <Avatar />
    </div>
  )
}
