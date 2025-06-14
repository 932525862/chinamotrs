const Navbar = () => {
    return (
        <div>Navbar</div>
    )
}

export default Navbar


// // src/components/Navbar.tsx
// import { Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

// function Navbar() {
//     return (
//         <div className="w-full bg-gradient-to-r from-black to-zinc-900 text-white flex items-center justify-between px-4 py-2 shadow">

//             {/* Left: Menu and Language */}
//             <div className="flex items-center gap-4">
//                 <Button variant="ghost" className="text-lime-400 font-bold text-sm flex items-center gap-2">
//                     <Menu className="w-5 h-5" />
//                     МЕНЮ
//                 </Button>

//                 <DropdownMenu>
//                     <DropdownMenuTrigger className="text-white font-semibold text-sm">РУС ▾</DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                         <DropdownMenuItem>UZB</DropdownMenuItem>
//                         <DropdownMenuItem>ENG</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>

//             {/* Center: Logo */}
//             <div className="text-white text-2xl font-bold tracking-wider">
//                 sport<span className="text-lime-400">mi<span className="border-b-4 border-lime-400">x</span></span>
//             </div>

//             {/* Right: Cart, Search, Phone */}
//             <div className="flex items-center gap-6">
//                 {/* Cart */}
//                 <div className="relative">
//                     <Button variant="ghost">
//                         <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
//                             <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                     </Button>
//                     <span className="absolute -top-1 -right-1 text-xs bg-lime-400 text-black rounded-full w-4 h-4 flex items-center justify-center">0</span>
//                 </div>

//                 {/* Search */}
//                 <Button variant="ghost">
//                     <svg className="w-5 h-5" fill="none" stroke="white" viewBox="0 0 24 24">
//                         <path d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                     </svg>
//                 </Button>

//                 {/* Phone */}
//                 <DropdownMenu>
//                     <DropdownMenuTrigger className="text-lime-400 text-sm font-medium flex items-center gap-1">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path d="M22 16.92V21a2 2 0 01-2.18 2A19.87 19.87 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.81.32 1.6.58 2.36a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 007.27 7.27l1.27-1.27a2 2 0 012.11-.45c.76.26 1.55.46 2.36.58a2 2 0 011.72 2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         +998 <span className="text-white font-bold ml-1">71 200 02 26 ▾</span>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                         <DropdownMenuItem>+998 90 123 45 67</DropdownMenuItem>
//                         <DropdownMenuItem>+998 91 765 43 21</DropdownMenuItem>
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>
//         </div>
//     )
// }

// export default Navbar