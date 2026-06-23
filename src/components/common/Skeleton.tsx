import React from 'react';

export const Skeleton: React.FC<{ className?: string }> = ({ className = 'h-12 w-full' }) => {
  return <div className={`${className} bg-gray-200 animate-pulse rounded-md`} />;
};

export const SkeletonGrid: React.FC<{ count?: number }> = ({ count = 4 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
};
