import { sanityService } from './sanityService'; 
import { client } from './sanity'; 

jest.mock('./sanity', () => ({
  client: {
    fetch: jest.fn(),
  },
}));

describe('Sanity Service - Funciones GetAll', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const funcionesGetAll = [
    { nombre: 'getAllNoticias', funcion: sanityService.getAllNoticias },
    { nombre: 'getAllMiembros', funcion: sanityService.getAllMiembros },
    { nombre: 'getAllProyectos', funcion: sanityService.getAllProyectos },
    { nombre: 'getAllCursos', funcion: sanityService.getAllCursos },
  ];

  test.each(funcionesGetAll)(
    '$nombre debe retornar datos cuando Sanity responde correctamente',
    async ({ funcion }) => {
      const datosFalsos = [{ _id: '123', titulo: 'Dato de prueba' }];
      
      (client.fetch as jest.Mock).mockResolvedValue(datosFalsos);

      const resultado = await funcion();

      expect(client.fetch).toHaveBeenCalledTimes(1);
      expect(resultado).toEqual(datosFalsos);
    }
  );

  test.each(funcionesGetAll)(
    '$nombre debe retornar un arreglo vacío [] si Sanity falla',
    async ({ funcion }) => {
      (client.fetch as jest.Mock).mockRejectedValue(new Error('Sanity se cayó'));

      const resultado = await funcion();

      expect(resultado).toEqual([]);
    }
  );
});