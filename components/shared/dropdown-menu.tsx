
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,

    DropdownMenuSeparator,
    DropdownMenuShortcut,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/redux/features/auth/authSlice";
import Link from "next/link";

export function DropdownMenuInNav({ onClick }: { onClick?: () => void }) {
    const user = useSelector(selectCurrentUser);
    return (
        <DropdownMenu>
            {user && <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer"> {/* Main flex container */}
                    {/* Avatar */}
                    <Avatar>
                        <AvatarImage src={user?.image} alt="userImage" />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>

                    {/* Name and Role */}
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">{user?.name || "User Name"}</span>
                        <span className="text-xs text-gray-400">{user?.role || "User Role"}</span>
                    </div>
                </div>
            </DropdownMenuTrigger>}


            <DropdownMenuContent className="w-56" align="start">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                    <Link href="/dashboard">
                        <DropdownMenuItem>
                            Dashboard
                            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </Link>



                </DropdownMenuGroup>
                <DropdownMenuSeparator />

                <DropdownMenuItem onClick={onClick}>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
