import Link from "next/link";

interface PaginadorProps {
  currentPage: number;
  totalPages: number;
}

export default function Paginador({ currentPage, totalPages }: PaginadorProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-12 font-karla">
      {/* Botón Anterior */}
      {currentPage > 1 ? (
        <Link
          href={`?page=${currentPage - 1}`}
          className="px-4 py-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 transition-colors"
        >
          Anterior
        </Link>
      ) : (
        <span className="px-4 py-2 rounded-md bg-gray-100 text-black opacity-50 cursor-not-allowed">
          Anterior
        </span>
      )}

      {/* Números de Página */}
      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={`?page=${page}`}
            className={`flex items-center justify-center w-10 h-10 rounded-md transition-colors ${
              currentPage === page
                ? "bg-black text-white font-bold"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Botón Siguiente */}
      {currentPage < totalPages ? (
        <Link
          href={`?page=${currentPage + 1}`}
          className="px-4 py-2 rounded-md bg-gray-100 text-black hover:bg-gray-200 transition-colors"
        >
          Siguiente
        </Link>
      ) : (
        <span className="px-4 py-2 rounded-md bg-gray-100 text-black opacity-50 cursor-not-allowed">
          Siguiente
        </span>
      )}
    </div>
  );
}