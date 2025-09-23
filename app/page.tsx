import { BusinessCard } from "@/components/business-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Static background decorative elements - black and white theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-300/20 to-gray-500/20 dark:from-gray-600/20 dark:to-gray-800/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-200/20 to-gray-400/20 dark:from-gray-700/20 dark:to-gray-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-100/10 to-gray-300/10 dark:from-gray-800/10 dark:to-gray-600/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10">
        <BusinessCard />
      </div>
    </main>
  )
}
