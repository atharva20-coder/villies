import Link from "next/link";
import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Nav() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="flex items-center justify-between py-10">
      <Link href="/">
        <button className="text-lg font-medium">👻 Villies</button>
      </Link>
      <ul className="flex items-center gap-10">
        {!user && (
          <Link href={"/auth/login"}>
            <a className="px-4 py-2 ml-8 text-sm font-medium text-white rounded-3xl bg-cyan-500">
              Join Now
            </a>
          </Link>
        )}
        {user && (
          <div className="flex items-center gap-6">
            <Link href="/post">
              <button className="px-4 py-2 font-medium text-white bg-cyan-500 rounded-3xl textx-sm">
                Post
              </button>
            </Link>
            <Link href="/dashboard">
              <img
                className="w-12 rounded-full cursor-pointer"
                src={user.photoURL}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
