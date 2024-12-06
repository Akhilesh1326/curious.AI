
export default function LoadingSpinner({ className }: { className?: string }) {
    return (
        <div className={`border-white h-5 w-5 animate-spin rounded-full border-4 border-t-white/10 ${className} `} />
    )
}