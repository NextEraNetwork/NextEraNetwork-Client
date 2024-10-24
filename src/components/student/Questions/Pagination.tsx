'use client';

import { IoMdReturnLeft, IoMdReturnRight } from 'react-icons/io';
import Link from 'next/link';
import { generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const baseClasses = 'flex h-10 w-10 items-center justify-center text-sm border';
  const activeClasses = 'z-10 bg-blue-600 border-blue-600 text-white';
  const hoverClasses = 'hover:bg-gray-100';
  const middleClasses = 'text-gray-300';

  const className = `
    ${baseClasses}
    ${isActive ? activeClasses : ''}
    ${!isActive && position !== 'middle' ? hoverClasses : ''}
    ${position === 'middle' ? middleClasses : ''}
    ${position === 'first' || position === 'single' ? 'rounded-l-md' : ''}
    ${position === 'last' || position === 'single' ? 'rounded-r-md' : ''}
  `.trim();

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const baseClasses = 'flex h-10 w-10 items-center justify-center rounded-md border';
  const disabledClasses = 'pointer-events-none text-gray-300';
  const hoverClasses = 'hover:bg-gray-100';

  const className = `
    ${baseClasses}
    ${isDisabled ? disabledClasses : hoverClasses}
    ${direction === 'left' ? 'mr-2 md:mr-4' : 'ml-2 md:ml-4'}
  `.trim();

  const icon = direction === 'left' ? (
    <IoMdReturnLeft className="w-4" />
  ) : (
    <IoMdReturnRight className="w-4" />
  );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
