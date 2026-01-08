"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Documento } from "@/lib/sanityClasses";

export default function FilterableList({ documentos }: { documentos: Documento[] }) {
  // Estados para filtros
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  
  // Estados para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Obtener opciones únicas para los filtros
  const categories = Array.from(new Set(documentos.map((d) => d.categoria)));
  const years = Array.from(new Set(documentos.map((d) => d.anio))).sort().reverse();

  // 1. Aplicar Filtros
  const filteredDocs = documentos.filter((doc) => {
    const matchesName = doc.titulo.toLowerCase().includes(search.toLowerCase()) || 
                        doc.autor.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "" || doc.categoria === category;
    return matchesName && matchesCategory;
  });

  // 2. Lógica de Paginación
  const totalPages = Math.ceil(filteredDocs.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDocs.slice(indexOfFirstItem, indexOfLastItem);

  // Resetear a la página 1 cuando se cambia un filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* BARRA LATERAL DE FILTROS */}
      <aside className="w-full md:w-64 shrink-0">
        <div className="top-24 space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-100 font-karla">
          <h4 className="font-bold text-lg border-b pb-2 text-black">Filtros</h4>
          
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Buscar</label>
            <input 
              type="text"
              placeholder="Título o autor..."
              className="w-full p-2 border rounded-md text-sm focus:ring-2 focus:ring-sage-green outline-none"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Categoría</label>
            <select 
              className="w-full p-2 border rounded-md text-sm outline-none"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="">Todas</option>
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>
      </aside>

      {/* LISTA DE RESULTADOS Y PAGINACIÓN */}
      <div className="flex-grow flex flex-col">
        <div className="space-y-8 flex-grow">
          {currentItems.length > 0 ? (
            currentItems.map((doc) => (
              <div key={doc._id} className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fadeIn">
                 {doc.imagenUrl && (
                    <div className="w-full md:w-48 h-64 relative shrink-0">
                        <Image src={doc.imagenUrl} alt={doc.titulo} fill className="object-cover rounded shadow-sm" />
                    </div>
                  )}
                  <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                          <span className="bg-black text-white text-xs px-2 py-1 rounded font-bold font-jetbrains">{doc.anio}</span>
                          <span className="text-gray-500 text-sm uppercase tracking-wide">{doc.categoria}</span>
                      </div>
                      <h3 className="text-2xl font-bold font-karla mb-2 text-black">{doc.titulo}</h3>
                      <p className="text-sage-green font-semibold italic mb-4 text-sm">{doc.autor}</p>
                      <p className="text-gray-600 mb-6 leading-relaxed">{doc.descripcion}</p>
                      {doc.pdfUrl && (
                        <a href={`${doc.pdfUrl}?dl=`} target="_blank" rel="noopener noreferrer" className="mt-auto self-start flex items-center gap-2 text-black hover:text-sage-green font-bold transition-colors underline decoration-2 underline-offset-4">
                          Leer Publicación Completa
                        </a>
                      )}
                  </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-20">No se encontraron publicaciones.</p>
          )}
        </div>

        {/* PAGINADOR (Solo se muestra si hay más de 1 página) */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2 font-karla">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-md disabled:opacity-30 hover:bg-gray-100 transition-colors"
            >
              Anterior
            </button>
            
            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-md border transition-colors ${
                    currentPage === i + 1 
                    ? "bg-black text-white border-black" 
                    : "hover:bg-gray-100 border-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-md disabled:opacity-30 hover:bg-gray-100 transition-colors"
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}