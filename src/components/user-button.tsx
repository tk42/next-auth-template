import { auth } from "@/auth"
import { SignIn, SignOut } from "./auth-components"
import { CustomDropdown } from "./custom-dropdown"

export default async function UserButton() {
  const session = await auth()
  if (!session?.user) return <SignIn />

  return (
    <div className="flex gap-2 items-center">
      <span className="hidden text-sm sm:inline-flex">{session.user.email}</span>
      <CustomDropdown
        trigger={
          <button className="relative w-8 h-8 rounded-full">
            <div className="w-8 h-8">
              <img
                src={
                  session.user.image ?? "https://source.boringavatars.com/marble/120"
                }
                alt={session.user.name ?? ""}
              />
            </div>
          </button>
        }
      >
        <div className="p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{session.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">{session.user.email}</p>
          </div>
        </div>
        <div className="p-2">
          <SignOut />
        </div>
      </CustomDropdown>
    </div>
  )
}