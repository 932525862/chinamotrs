import { Loader2 } from "lucide-react"
import { Suspense } from "react"

const Loading = () => {
    return (
        <Suspense
            fallback={
                <div className="flex items-center justify-center min-h-screen">
                    <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
                </div>
            }
        />
    )
}

export default Loading