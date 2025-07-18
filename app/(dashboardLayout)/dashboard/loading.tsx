export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-[#bf9310] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#bf9310] font-semibold text-lg">Loading ...</p>
      </div>
    </div>
  );
}
